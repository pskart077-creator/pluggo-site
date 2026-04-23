"use client";

import { useEffect, useMemo, useState } from "react";
import type { NewsContentBlock, NewsContentDocument } from "@/lib/news/types";

type NewsEditorProps = {
  value: NewsContentDocument;
  onChange: (value: NewsContentDocument) => void;
};

function createBlock(type: NewsContentBlock["type"]): NewsContentBlock {
  switch (type) {
    case "heading":
      return { type: "heading", level: 2, text: "" };
    case "paragraph":
      return { type: "paragraph", text: "" };
    case "list":
      return { type: "list", ordered: false, items: [""] };
    case "quote":
      return { type: "quote", text: "", cite: "" };
    case "image":
      return { type: "image", url: "", alt: "", caption: "" };
    case "callout":
      return { type: "callout", variant: "info", title: "", text: "" };
    case "faq":
      return { type: "faq", items: [{ question: "", answer: "" }] };
    case "cta":
      return { type: "cta", title: "", text: "", buttonLabel: "", buttonUrl: "" };
    case "table":
      return { type: "table", headers: [""], rows: [[""]] };
    case "embed":
      return { type: "embed", provider: "youtube", url: "" };
    case "divider":
      return { type: "divider" };
    default:
      return { type: "paragraph", text: "" };
  }
}

function cloneWithUpdatedBlock(
  document: NewsContentDocument,
  index: number,
  block: NewsContentBlock,
): NewsContentDocument {
  const blocks = [...document.blocks];
  blocks[index] = block;
  return {
    version: 1,
    blocks,
  };
}

export default function NewsEditor({ value, onChange }: NewsEditorProps) {
  const [draft, setDraft] = useState<NewsContentDocument>(value);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  useEffect(() => {
    onChange(draft);
  }, [draft, onChange]);

  const blockTypes = useMemo(
    () =>
      [
        { label: "Título", value: "heading" },
        { label: "Paragrafo", value: "paragraph" },
        { label: "Lista", value: "list" },
        { label: "Citacao", value: "quote" },
        { label: "Imagem", value: "image" },
        { label: "Callout", value: "callout" },
        { label: "FAQ", value: "faq" },
        { label: "CTA", value: "cta" },
        { label: "Tabela", value: "table" },
        { label: "Embed", value: "embed" },
        { label: "Divisor", value: "divider" },
      ] as const,
    [],
  );

  const pushBlock = (type: NewsContentBlock["type"]) => {
    setDraft((previous) => ({
      version: 1,
      blocks: [...previous.blocks, createBlock(type)],
    }));
  };

  const removeBlock = (index: number) => {
    setDraft((previous) => ({
      version: 1,
      blocks: previous.blocks.filter((_, currentIndex) => currentIndex !== index),
    }));
  };

  const moveBlock = (index: number, direction: -1 | 1) => {
    setDraft((previous) => {
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= previous.blocks.length) {
        return previous;
      }
      const blocks = [...previous.blocks];
      [blocks[index], blocks[nextIndex]] = [blocks[nextIndex], blocks[index]];
      return {
        version: 1,
        blocks,
      };
    });
  };

  return (
    <div className="pluggo-news-editor">
      <div className="pluggo-news-editor__toolbar">
        {blockTypes.map((blockType) => (
          <button
            key={blockType.value}
            type="button"
            onClick={() => pushBlock(blockType.value as NewsContentBlock["type"])}
          >
            + {blockType.label}
          </button>
        ))}
      </div>

      <div className="pluggo-news-editor__blocks">
        {draft.blocks.length === 0 ? (
          <div className="pluggo-news-editor__empty">Nenhum bloco adicionado.</div>
        ) : null}

        {draft.blocks.map((block, index) => (
          <div className="pluggo-news-editor__block" key={`${block.type}-${index}`}>
            <div className="pluggo-news-editor__block-head">
              <span>{block.type}</span>
              <div className="pluggo-news-editor__block-actions">
                <button type="button" onClick={() => moveBlock(index, -1)} aria-label="Mover para cima">
                  ?
                </button>
                <button type="button" onClick={() => moveBlock(index, 1)} aria-label="Mover para baixo">
                  ?
                </button>
                <button type="button" onClick={() => removeBlock(index)} aria-label="Remover bloco">
                  x
                </button>
              </div>
            </div>

            {block.type === "heading" ? (
              <>
                <select
                  value={String(block.level)}
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        level: Number(event.target.value) as 2 | 3 | 4,
                      }),
                    );
                  }}
                >
                  <option value="2">H2</option>
                  <option value="3">H3</option>
                  <option value="4">H4</option>
                </select>
                <textarea
                  value={block.text}
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        text: event.target.value,
                      }),
                    );
                  }}
                />
              </>
            ) : null}

            {block.type === "paragraph" ? (
              <textarea
                value={block.text}
                onChange={(event) => {
                  setDraft((previous) =>
                    cloneWithUpdatedBlock(previous, index, {
                      ...block,
                      text: event.target.value,
                    }),
                  );
                }}
              />
            ) : null}

            {block.type === "list" ? (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={block.ordered}
                    onChange={(event) => {
                      setDraft((previous) =>
                        cloneWithUpdatedBlock(previous, index, {
                          ...block,
                          ordered: event.target.checked,
                        }),
                      );
                    }}
                  />
                  Lista ordenada
                </label>
                <textarea
                  value={block.items.join("\n")}
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        items: event.target.value.split("\n"),
                      }),
                    );
                  }}
                />
              </>
            ) : null}

            {block.type === "quote" ? (
              <>
                <textarea
                  value={block.text}
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        text: event.target.value,
                      }),
                    );
                  }}
                />
                <input
                  value={block.cite || ""}
                  placeholder="Fonte"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        cite: event.target.value,
                      }),
                    );
                  }}
                />
              </>
            ) : null}

            {block.type === "image" ? (
              <>
                <input
                  value={block.url}
                  placeholder="URL da imagem"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        url: event.target.value,
                      }),
                    );
                  }}
                />
                <input
                  value={block.alt}
                  placeholder="Texto alternativo"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        alt: event.target.value,
                      }),
                    );
                  }}
                />
                <input
                  value={block.caption || ""}
                  placeholder="Legenda"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        caption: event.target.value,
                      }),
                    );
                  }}
                />
              </>
            ) : null}

            {block.type === "callout" ? (
              <>
                <select
                  value={block.variant}
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        variant: event.target.value as "info" | "warning" | "success",
                      }),
                    );
                  }}
                >
                  <option value="info">Info</option>
                  <option value="warning">Warning</option>
                  <option value="success">Success</option>
                </select>
                <input
                  value={block.title || ""}
                  placeholder="Título"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        title: event.target.value,
                      }),
                    );
                  }}
                />
                <textarea
                  value={block.text}
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        text: event.target.value,
                      }),
                    );
                  }}
                />
              </>
            ) : null}

            {block.type === "faq" ? (
              <textarea
                value={block.items.map((item) => `${item.question}::${item.answer}`).join("\n")}
                placeholder="Pergunta::Resposta"
                onChange={(event) => {
                  const items = event.target.value
                    .split("\n")
                    .map((line) => line.split("::"))
                    .map(([question, answer]) => ({
                      question: question || "",
                      answer: answer || "",
                    }));

                  setDraft((previous) =>
                    cloneWithUpdatedBlock(previous, index, {
                      ...block,
                      items,
                    }),
                  );
                }}
              />
            ) : null}

            {block.type === "cta" ? (
              <>
                <input
                  value={block.title}
                  placeholder="Título"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        title: event.target.value,
                      }),
                    );
                  }}
                />
                <textarea
                  value={block.text}
                  placeholder="Descrição"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        text: event.target.value,
                      }),
                    );
                  }}
                />
                <input
                  value={block.buttonLabel}
                  placeholder="Texto do botao"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        buttonLabel: event.target.value,
                      }),
                    );
                  }}
                />
                <input
                  value={block.buttonUrl}
                  placeholder="URL"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        buttonUrl: event.target.value,
                      }),
                    );
                  }}
                />
              </>
            ) : null}

            {block.type === "table" ? (
              <>
                <textarea
                  value={block.headers.join("|")}
                  placeholder="Cabecalhos separados por |"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        headers: event.target.value.split("|").map((item) => item.trim()),
                      }),
                    );
                  }}
                />
                <textarea
                  value={block.rows.map((row) => row.join("|")).join("\n")}
                  placeholder="Linhas separadas por quebra de linha"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        rows: event.target.value
                          .split("\n")
                          .map((line) => line.split("|").map((item) => item.trim())),
                      }),
                    );
                  }}
                />
              </>
            ) : null}

            {block.type === "embed" ? (
              <>
                <select
                  value={block.provider}
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        provider: event.target.value as "youtube" | "vimeo" | "generic",
                      }),
                    );
                  }}
                >
                  <option value="youtube">YouTube</option>
                  <option value="vimeo">Vimeo</option>
                  <option value="generic">Generic</option>
                </select>
                <input
                  value={block.url}
                  placeholder="URL do embed"
                  onChange={(event) => {
                    setDraft((previous) =>
                      cloneWithUpdatedBlock(previous, index, {
                        ...block,
                        url: event.target.value,
                      }),
                    );
                  }}
                />
              </>
            ) : null}

            {block.type === "divider" ? <p>Separador visual simples.</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
