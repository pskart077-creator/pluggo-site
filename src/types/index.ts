export type NavDropdownLeadCard = {
  title: string;
  description: string;
  href: string;
};

export type NavDropdownQuickLink = {
  label: string;
  description: string;
  href: string;
};

export type NavDropdownFeature = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export type NavDropdownContent = {
  leadCards: NavDropdownLeadCard[];
  quickLinks: NavDropdownQuickLink[];
  feature: NavDropdownFeature;
};

export type NavItem = {
  href: string;
  label: string;
  dropdown?: NavDropdownContent;
};

export type SlugPageDetail = {
  slug: string;
  title: string;
  seoDescription: string;
  seoKeywords: string[];
  description: string;
  highlights: string[];
};

export type Service = SlugPageDetail & {
  shortDescription: string;
};

export type StickyHeaderState = {
  isHeaderVisible: boolean;
  isScrolled: boolean;
};

export type BackToTopController = {
  isVisible: boolean;
  isNearFooter: boolean;
  scrollToTop: () => void;
};
