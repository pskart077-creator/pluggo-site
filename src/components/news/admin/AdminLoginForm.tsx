"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";

export default function AdminLoginForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    startTransition(async () => {
      setError(null);
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: String(form.get("email") ?? ""),
          password: String(form.get("password") ?? ""),
        }),
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok || !payload?.success) {
        setError(payload?.error?.message ?? "Falha ao autenticar.");
        return;
      }

      router.push("/admin/news");
      router.refresh();
    });
  };

  return (
    <form className="pluggo-news-admin-login__card" onSubmit={handleSubmit}>
      <h1 className="pluggo-news-admin-title">Acesso administrativo</h1>
      <p className="pluggo-news-admin-user" style={{ marginBottom: "0.85rem" }}>
        Área protegida para gerenciamento de notícias.
      </p>

      <div style={{ display: "grid", gap: "0.7rem" }}>
        <input
          className="pluggo-news-admin-input"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="seu-email@empresa.com"
        />

        <input
          className="pluggo-news-admin-input"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="Sua senha"
        />

        <button className="pluggo-news-admin-button" type="submit">
          {isPending ? "Entrando..." : "Entrar"}
        </button>
      </div>

      {error ? <p className="pluggo-news-admin-error" style={{ marginTop: "0.8rem" }}>{error}</p> : null}
    </form>
  );
}
