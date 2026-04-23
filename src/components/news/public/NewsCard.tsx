import Link from "next/link";
import type { PublicNewsCardDto } from "@/lib/news/mappings";

type NewsCardProps = {
  item: PublicNewsCardDto;
};

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="pluggo-news-card">
      <Link href={`/news/${item.slug}`} aria-label={`Ler notícia ${item.title}`}>
        {item.coverImageUrl ? (
          <img
            src={item.coverImageUrl}
            alt={item.coverImageAlt || item.title}
            className="pluggo-news-card__cover"
            loading="lazy"
          />
        ) : (
          <div className="pluggo-news-card__cover" />
        )}
      </Link>

      <div className="pluggo-news-card__body">
        <div className="pluggo-news-card__meta">
          <span className="pluggo-news-chip">{item.category.name}</span>
          {item.featured ? <span className="pluggo-news-chip">Destaque</span> : null}
          <span>{item.publishedAt ? new Date(item.publishedAt).toLocaleDateString("pt-BR") : "-"}</span>
          <span>{item.readingTime} min</span>
        </div>

        <h3 className="pluggo-news-card__title">
          <Link href={`/news/${item.slug}`}>{item.title}</Link>
        </h3>

        <p className="pluggo-news-card__excerpt">{item.excerpt}</p>
      </div>
    </article>
  );
}
