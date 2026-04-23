import Link from "next/link";
import "@/styles/news/news-public.css";
import "@/styles/news/news-components.css";
import NewsCard from "@/components/news/public/NewsCard";
import { listPublicNews } from "@/lib/news/queries";

type NewsListProps = {
  limit?: number;
};

export default async function NewsList({ limit = 3 }: NewsListProps) {
  const fallback: Awaited<ReturnType<typeof listPublicNews>> = {
    items: [],
    pagination: {
      page: 1,
      pageSize: Math.max(1, Math.min(6, limit)),
      total: 0,
      totalPages: 1,
    },
  };

  let result = fallback;

  try {
    result = await listPublicNews({
      page: 1,
      pageSize: fallback.pagination.pageSize,
      search: "",
      category: "",
      tag: "",
      featuredOnly: false,
    });
  } catch {
    // Keep home page stable when news storage is temporarily unavailable.
  }

  return (
    <section className="pluggo-home-news section-anchor">
      <div className="pluggo-home-news__shell">
        <div className="pluggo-home-news__header">
          <div className="pluggo-home-news__heading">
            <span className="pluggo-home-news__eyebrow">Plug Go News</span>

            <h2 className="pluggo-home-news__title">
              Conteúdos e novidades para acompanhar o mercado com mais clareza
            </h2>

            <p className="pluggo-home-news__description">
              Acompanhe notícias, tendências e conteúdos da Plug Go sobre
              tecnologia, mercado, inovação e soluções para pessoas e empresas.
            </p>
          </div>

          <Link className="pluggo-home-news__button" href="/news">
            Ver Todas
          </Link>
        </div>

        {result.items.length === 0 ? (
          <div className="pluggo-home-news__empty">
            Sem notícias publicadas no momento.
          </div>
        ) : (
          <div className="pluggo-home-news__grid">
            {result.items.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
