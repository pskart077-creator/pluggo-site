import Link from "next/link";
import { CalendarDays } from "lucide-react";
import type { PublicNewsCardDto } from "@/lib/news/mappings";
import { buildNewsListMetadata } from "@/lib/news/seo";
import type { PublicNewsQueryInput } from "@/lib/news/types";

type NewsPublicListingProps = {
  filters: PublicNewsQueryInput;
  result: {
    items: PublicNewsCardDto[];
    pagination: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
    };
  };
};

function buildPageHref(filters: PublicNewsQueryInput, page: number) {
  const searchParams = new URLSearchParams();

  if (page > 1) searchParams.set("page", String(page));
  if (filters.search) searchParams.set("search", filters.search);
  if (filters.category) searchParams.set("category", filters.category);
  if (filters.tag) searchParams.set("tag", filters.tag);
  if (filters.featuredOnly) searchParams.set("featured", "true");

  const query = searchParams.toString();
  return query ? `/news?${query}` : "/news";
}

export async function generateNewsListPageMetadata(
  filters: PublicNewsQueryInput,
) {
  return buildNewsListMetadata({
    page: filters.page,
    search: filters.search,
    category: filters.category,
    tag: filters.tag,
  });
}

export default function NewsPublicListing({
  filters,
  result,
}: NewsPublicListingProps) {
  const items = result.items;

  return (
    <section className="pluggo-news-page section-anchor">
      <div className="pluggo-news-page__shell">
        {items.length === 0 ? (
          <div className="pluggo-news-page__empty">
            Nenhuma notícia publicada no momento.
          </div>
        ) : (
          <>
            <div className="pluggo-news-page__grid">
              {items.map((item) => (
                <article key={item.id} className="pluggo-news-page-card">
                  <Link
                    href={`/news/${item.slug}`}
                    className="pluggo-news-page-card__image-link"
                  >
                    <div className="pluggo-news-page-card__image-wrap">
                      {item.coverImageUrl ? (
                        <img
                          src={item.coverImageUrl}
                          alt={item.coverImageAlt || item.title}
                          className="pluggo-news-page-card__image"
                        />
                      ) : (
                        <div className="pluggo-news-page-card__image pluggo-news-page-card__image--placeholder" />
                      )}
                    </div>
                  </Link>

                  <div className="pluggo-news-page-card__content">
                    <span className="pluggo-news-page-card__badge">
                      {item.category?.name || "News"}
                    </span>

                    <h2 className="pluggo-news-page-card__title">
                      <Link href={`/news/${item.slug}`}>{item.title}</Link>
                    </h2>

                    <div className="pluggo-news-page-card__meta">
                      <span className="pluggo-news-page-card__author">
                        por Plug Go
                      </span>

                      <span className="pluggo-news-page-card__meta-separator" />

                      <span className="pluggo-news-page-card__date">
                        <CalendarDays size={15} strokeWidth={2} />
                        {item.publishedAt
                          ? new Date(item.publishedAt).toLocaleDateString("pt-BR")
                          : "-"}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {result.pagination.totalPages > 1 ? (
              <nav
                className="pluggo-news-page__pagination"
                aria-label="Paginação das notícias"
              >
                {Array.from(
                  { length: result.pagination.totalPages },
                  (_, index) => index + 1,
                ).map((page) => {
                  const isActive = page === result.pagination.page;

                  return (
                    <Link
                      key={page}
                      href={buildPageHref(filters, page)}
                      className={`pluggo-news-page__pagination-link ${
                        isActive ? "is-active" : ""
                      }`}
                    >
                      {page}
                    </Link>
                  );
                })}
              </nav>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}