"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useStickyHeader } from "@/hooks/useStickyHeader";
import { MOBILE_MENU_BREAKPOINT, SITE_NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { NavDropdownContent } from "@/types";

function isActiveRoute(currentPath: string, route: string) {
  if (route === "/") {
    return currentPath === "/";
  }

  return currentPath === route || currentPath.startsWith(`${route}/`);
}

function hasActiveDropdownRoute(currentPath: string, dropdown: NavDropdownContent) {
  const fromLeadCards = dropdown.leadCards.some((item) =>
    isActiveRoute(currentPath, item.href),
  );
  const fromQuickLinks = dropdown.quickLinks.some((item) =>
    isActiveRoute(currentPath, item.href),
  );
  const fromFeature = isActiveRoute(currentPath, dropdown.feature.href);

  return fromLeadCards || fromQuickLinks || fromFeature;
}

function isDesktopViewport() {
  return typeof window !== "undefined" && window.innerWidth > MOBILE_MENU_BREAKPOINT;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdownKey, setOpenDropdownKey] = useState<string | null>(null);
  const { isHeaderVisible, isScrolled } = useStickyHeader(isMenuOpen);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_MENU_BREAKPOINT) {
        setIsMenuOpen(false);
        setOpenDropdownKey(null);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdownKey(null);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => {
    setOpenDropdownKey(null);
    setIsMenuOpen(false);
  };

  const handleDropdownButtonClick = (key: string) => {
    if (isDesktopViewport()) {
      return;
    }

    setOpenDropdownKey((previous) => (previous === key ? null : key));
  };

  const handleDropdownMouseEnter = (key: string) => {
    if (!isDesktopViewport()) {
      return;
    }

    setOpenDropdownKey(key);
  };

  const handleDropdownMouseLeave = (key: string) => {
    if (!isDesktopViewport()) {
      return;
    }

    setOpenDropdownKey((previous) => (previous === key ? null : previous));
  };

  return (
    <header
      className={cn(
        "site-header-wrap site-header-home",
        isHeaderVisible ? "is-visible" : "is-hidden",
        isScrolled && "is-scrolled",
      )}
    >
      <div className="site-header">
        <Link
          href="/"
          className="site-logo"
          aria-label="PlugGo Inicio"
          onClick={closeMenu}
        >
          <Image
            src="/assets/img/logo/logo.svg"
            alt="PlugGo"
            className="site-logo-image"
            width={90}
            height={33}
            priority
          />
        </Link>

        <button
          type="button"
          className={cn("site-menu-toggle", isMenuOpen && "is-open")}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          <span className="site-menu-toggle-line" />
          <span className="site-menu-toggle-line" />
          <span className="site-menu-toggle-line" />
        </button>

        <nav
          id="site-nav"
          className={cn("site-nav", isMenuOpen && "is-open")}
          aria-label="Navegacao principal"
        >
          {SITE_NAV_ITEMS.map((item) => {
            const isLinkActive = isActiveRoute(pathname, item.href);

            if (!item.dropdown) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("site-nav-link", isLinkActive && "is-active")}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            }

            const dropdownKey = item.href;
            const isDropdownOpen = openDropdownKey === dropdownKey;
            const isDropdownActive =
              isLinkActive || hasActiveDropdownRoute(pathname, item.dropdown);
            const submenuId = `site-submenu-${item.href.replace(/[^a-z0-9]/gi, "")}`;

            return (
              <div
                key={item.href}
                className={cn("site-nav-dropdown", isDropdownOpen && "is-open")}
                onMouseEnter={() => handleDropdownMouseEnter(dropdownKey)}
                onMouseLeave={() => handleDropdownMouseLeave(dropdownKey)}
              >
                <button
                  type="button"
                  className={cn(
                    "site-nav-link site-nav-link-dropdown",
                    isDropdownActive && "is-active",
                  )}
                  aria-expanded={isDropdownOpen}
                  aria-controls={submenuId}
                  onClick={() => handleDropdownButtonClick(dropdownKey)}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2}
                    className="site-nav-link-dropdown__icon"
                  />
                </button>

                <div
                  id={submenuId}
                  className={cn(
                    "site-submenu site-submenu-mega",
                    isDropdownOpen && "is-open",
                  )}
                >
                  <div className="site-submenu-mega-grid">
                    <div className="site-submenu-mega-leads">
                      {item.dropdown.leadCards.map((leadCard) => (
                        <Link
                          key={leadCard.href}
                          href={leadCard.href}
                          className="site-submenu-mega-lead-card"
                          onClick={closeMenu}
                        >
                          <h4>{leadCard.title}</h4>
                          <p>{leadCard.description}</p>
                        </Link>
                      ))}
                    </div>

                    <div className="site-submenu-mega-quick">
                      {item.dropdown.quickLinks.map((quickLink) => (
                        <Link
                          key={`${quickLink.label}-${quickLink.href}`}
                          href={quickLink.href}
                          className="site-submenu-mega-quick-link"
                          onClick={closeMenu}
                        >
                          <span className="site-submenu-mega-quick-label">
                            {quickLink.label}
                          </span>
                          <span className="site-submenu-mega-quick-description">
                            {quickLink.description}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={item.dropdown.feature.href}
                      className="site-submenu-mega-feature"
                      onClick={closeMenu}
                    >
                      <div className="site-submenu-mega-feature-media">
                        <Image
                          src={item.dropdown.feature.imageSrc}
                          alt={item.dropdown.feature.imageAlt}
                          fill
                          sizes="(max-width: 920px) 100vw, 320px"
                        />
                      </div>
                      <p className="site-submenu-mega-feature-description">
                        {item.dropdown.feature.description}
                      </p>
                      <span className="site-submenu-mega-feature-link">
                        Saiba Mais
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          <Link
            className="site-contact-btn site-contact-btn-mobile"
            href="/contato"
            onClick={closeMenu}
          >
            Fale Conosco
          </Link>
        </nav>

        <Link className="site-contact-btn site-contact-btn-desktop" href="/contato">
          Fale Conosco
        </Link>
      </div>

      <button
        type="button"
        className={cn("site-menu-backdrop", isMenuOpen && "is-open")}
        aria-label="Fechar menu"
        onClick={closeMenu}
      />
    </header>
  );
}
