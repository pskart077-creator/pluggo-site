import type { InternalLeadStatus } from "@prisma/client";
import {
  INTERNAL_PRIORITY_LABEL,
  INTERNAL_STATUS_LABEL,
} from "@/lib/admin-interno/constants";
import { getLeadEmailDisplay } from "@/lib/admin-interno/lead-email";
import { getDashboardOverview } from "@/lib/admin-interno/leads";

const RANGE_OPTIONS = [7, 15, 30, 60, 90];

const STATUS_PILL_CLASS: Record<InternalLeadStatus, string> = {
  NOVO: "is-new",
  EM_ANALISE: "is-analysis",
  CONTATADO: "is-contacted",
  QUALIFICADO: "is-qualified",
  CONVERTIDO: "is-converted",
  PERDIDO: "is-lost",
  SPAM: "is-spam",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

function formatNumber(value: number) {
  return value.toLocaleString("pt-BR");
}

function formatDecimal(value: number) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

function formatPercent(value: number) {
  return `${formatDecimal(value)}%`;
}

function formatDelta(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${formatDecimal(value)}%`;
}

function clampPercent(value: number) {
  return Math.max(0, Math.min(100, value));
}

function getBarHeight(value: number, maxValue: number) {
  if (!value || !maxValue) {
    return 4;
  }

  return Math.max(8, Math.round((value / maxValue) * 100));
}

export default async function InternalDashboardPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const requestedRange =
    typeof params.days === "string" ? Number(params.days) : undefined;
  const days =
    requestedRange && RANGE_OPTIONS.includes(requestedRange)
      ? requestedRange
      : 30;

  const overview = await getDashboardOverview(days);

  const previousDailyAverage =
    overview.metrics.total.previous / overview.range.days;
  const dailyAverageDelta =
    previousDailyAverage === 0
      ? overview.metrics.averagePerDay > 0
        ? 100
        : 0
      : ((overview.metrics.averagePerDay - previousDailyAverage) /
          previousDailyAverage) *
        100;

  const kpis = [
    {
      label: "Leads no periodo",
      value: formatNumber(overview.metrics.total.value),
      context: `${formatNumber(overview.metrics.total.previous)} no periodo anterior`,
      delta: overview.metrics.total.deltaPercent,
      tone: "emerald",
    },
    {
      label: "Novos leads",
      value: formatNumber(overview.metrics.newLeads.value),
      context: `${formatNumber(overview.metrics.newLeads.previous)} antes`,
      delta: overview.metrics.newLeads.deltaPercent,
      tone: "blue",
    },
    {
      label: "Qualificados",
      value: formatNumber(overview.metrics.qualified.value),
      context: `${formatNumber(overview.metrics.qualified.previous)} antes`,
      delta: overview.metrics.qualified.deltaPercent,
      tone: "violet",
    },
    {
      label: "Convertidos",
      value: formatNumber(overview.metrics.converted.value),
      context: `${formatNumber(overview.metrics.converted.previous)} antes`,
      delta: overview.metrics.converted.deltaPercent,
      tone: "lime",
    },
    {
      label: "Taxa de conversao",
      value: formatPercent(overview.metrics.conversionRate.value),
      context: `${formatPercent(overview.metrics.conversionRate.previous)} antes`,
      delta: overview.metrics.conversionRate.deltaPercent,
      tone: "cyan",
    },
    {
      label: "Sem responsavel",
      value: formatNumber(overview.metrics.unassigned.value),
      context: `${formatNumber(overview.metrics.unassigned.previous)} antes`,
      delta: overview.metrics.unassigned.deltaPercent,
      tone: "orange",
    },
    {
      label: "Media diaria",
      value: formatDecimal(overview.metrics.averagePerDay),
      context: `${formatDecimal(previousDailyAverage)} antes`,
      delta: Number(dailyAverageDelta.toFixed(1)),
      tone: "indigo",
    },
  ];

  const maxDailyTotal = Math.max(overview.series.maxDailyTotal, 1);
  const maxDailyConverted = Math.max(overview.series.maxDailyConverted, 1);

  const topSource = overview.distributions.sources[0];
  const topAssignee = overview.distributions.assignees[0];

  const operationalInsights = [
    overview.metrics.total.value === 0
      ? "Nao houve leads no periodo selecionado. Recomendacao: revisar canais ativos e campanhas de captacao."
      : `${formatNumber(overview.metrics.total.value)} leads captados no periodo. Mantenha foco nas origens com melhor qualidade.`,
    overview.metrics.unassigned.value > 0
      ? `${formatNumber(overview.metrics.unassigned.value)} lead(s) sem responsavel. Priorize distribuicao para reduzir tempo de resposta.`
      : "Todos os leads estao distribuidos para atendimento.",
    topSource
      ? `Origem lider: ${topSource.source} com ${formatNumber(topSource.count)} lead(s) (${formatPercent(topSource.percent)}).`
      : "Sem atribuicao de origem no periodo. Ative UTMs e mapeamento de canal nos formularios.",
    topAssignee
      ? `Responsavel com maior carteira: ${topAssignee.assignee} (${formatNumber(topAssignee.count)} leads).`
      : "Nenhum responsavel com leads no periodo. Defina fila de atribuicao automatica para ganho de SLA.",
    overview.metrics.conversionRate.value > 0
      ? `Taxa de conversao atual em ${formatPercent(overview.metrics.conversionRate.value)}.`
      : "Sem conversoes no periodo. Sugestao: revisar abordagem inicial e tempo de primeiro contato.",
  ];

  return (
    <div className="admin-dashboard-premium">
      <section className="admin-card admin-dashboard-hero">
        <div className="admin-dashboard-hero-main">
          <p className="admin-dashboard-eyebrow">Visao executiva de leads Pluggo</p>
          <h2>Painel estrategico de captacao e conversao</h2>
          <p>
            Acompanhe volume, qualidade e desempenho comercial em tempo real para
            acelerar decisoes do time de atendimento e vendas.
          </p>
          <div className="admin-dashboard-hero-meta">
            <span>
              Periodo atual:{" "}
              <strong>
                {overview.range.from.toLocaleDateString("pt-BR")} ate{" "}
                {overview.range.to.toLocaleDateString("pt-BR")}
              </strong>
            </span>
            <span>
              Comparativo:{" "}
              <strong>
                {overview.range.previousFrom.toLocaleDateString("pt-BR")} ate{" "}
                {overview.range.previousTo.toLocaleDateString("pt-BR")}
              </strong>
            </span>
          </div>
        </div>

        <form method="GET" action="/admin-interno" className="admin-dashboard-range-form">
          <label htmlFor="dashboard-days">Periodo</label>
          <select id="dashboard-days" name="days" defaultValue={String(overview.range.days)}>
            {RANGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                Ultimos {option} dias
              </option>
            ))}
          </select>
          <button type="submit" className="admin-primary-button">
            Atualizar
          </button>
        </form>
      </section>

      <section className="admin-dashboard-kpi-grid" aria-label="Indicadores principais">
        {kpis.map((item) => (
          <article key={item.label} className="admin-dashboard-kpi-card" data-tone={item.tone}>
            <header>
              <p>{item.label}</p>
              <span className={item.delta >= 0 ? "is-positive" : "is-negative"}>
                {formatDelta(item.delta)}
              </span>
            </header>
            <strong>{item.value}</strong>
            <small>{item.context}</small>
          </article>
        ))}
      </section>

      <section className="admin-dashboard-visual-grid">
        <article className="admin-card admin-dashboard-chart-card is-wide">
          <div className="admin-card-header">
            <h3>Volume diario de leads</h3>
            <div className="admin-dashboard-legend">
              <span className="is-total">Total</span>
              <span className="is-converted">Convertidos</span>
            </div>
          </div>
          <div className="admin-dashboard-daily-chart" role="img" aria-label="Grafico diario">
            {overview.series.daily.map((item) => (
              <div key={item.key} className="admin-dashboard-daily-col">
                <div className="admin-dashboard-daily-bars">
                  <span
                    className="admin-dashboard-daily-bar is-total"
                    style={{ height: `${getBarHeight(item.total, maxDailyTotal)}%` }}
                    title={`Total: ${item.total}`}
                  />
                  <span
                    className="admin-dashboard-daily-bar is-converted"
                    style={{ height: `${getBarHeight(item.converted, maxDailyConverted)}%` }}
                    title={`Convertidos: ${item.converted}`}
                  />
                </div>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="admin-dashboard-insights-columns">
        <div className="admin-dashboard-insights-col">
          <article className="admin-card">
            <div className="admin-card-header">
              <h3>Distribuicao por status</h3>
            </div>
            <ul className="admin-dashboard-progress-list">
              {overview.distributions.status.map((item) => (
                <li key={item.status}>
                  <div className="admin-dashboard-progress-head">
                    <span>{INTERNAL_STATUS_LABEL[item.status]}</span>
                    <strong>{formatNumber(item.count)}</strong>
                  </div>
                  <div className="admin-dashboard-progress-track">
                    <span
                      className="admin-dashboard-progress-fill"
                      style={{ width: `${clampPercent(item.percent)}%` }}
                    />
                  </div>
                  <small>{formatPercent(item.percent)}</small>
                </li>
              ))}
            </ul>
          </article>

          <article className="admin-card">
            <div className="admin-card-header">
              <h3>Principais origens</h3>
            </div>
            <ul className="admin-dashboard-ranking-list">
              {overview.distributions.sources.map((item) => (
                <li key={item.source}>
                  <header>
                    <span>{item.source}</span>
                    <strong>{formatNumber(item.count)}</strong>
                  </header>
                  <div className="admin-dashboard-progress-track">
                    <span
                      className="admin-dashboard-progress-fill"
                      style={{ width: `${clampPercent(item.percent)}%` }}
                    />
                  </div>
                </li>
              ))}
              {!overview.distributions.sources.length ? (
                <li className="admin-dashboard-empty">
                  Sem dados de origem no periodo. Ative UTMs nos canais para analise de performance.
                </li>
              ) : null}
            </ul>
          </article>

          <article className="admin-card">
            <div className="admin-card-header">
              <h3>Responsaveis com mais leads</h3>
            </div>
            <ul className="admin-dashboard-ranking-list">
              {overview.distributions.assignees.map((item) => (
                <li key={item.assignee}>
                  <header>
                    <span>{item.assignee}</span>
                    <strong>{formatNumber(item.count)}</strong>
                  </header>
                  <div className="admin-dashboard-progress-track">
                    <span
                      className="admin-dashboard-progress-fill is-assignee"
                      style={{ width: `${clampPercent(item.percent)}%` }}
                    />
                  </div>
                </li>
              ))}
              {!overview.distributions.assignees.length ? (
                <li className="admin-dashboard-empty">
                  Sem distribuicao de responsaveis. Configure atribuicao automatica por fila.
                </li>
              ) : null}
            </ul>
          </article>
        </div>

        <div className="admin-dashboard-insights-col">
          <article className="admin-card admin-dashboard-insight-card">
            <div className="admin-card-header">
              <h3>Radar operacional</h3>
            </div>
            <ul className="admin-dashboard-insight-list">
              {operationalInsights.map((insight, index) => (
                <li key={`${index}-${insight.slice(0, 24)}`}>{insight}</li>
              ))}
            </ul>
          </article>

          <article className="admin-card">
            <div className="admin-card-header">
              <h3>Distribuicao de prioridade</h3>
            </div>
            <ul className="admin-dashboard-progress-list">
              {overview.distributions.priority.map((item) => (
                <li key={item.priority}>
                  <div className="admin-dashboard-progress-head">
                    <span>{INTERNAL_PRIORITY_LABEL[item.priority]}</span>
                    <strong>{formatNumber(item.count)}</strong>
                  </div>
                  <div className="admin-dashboard-progress-track">
                    <span
                      className="admin-dashboard-progress-fill is-priority"
                      style={{ width: `${clampPercent(item.percent)}%` }}
                    />
                  </div>
                  <small>{formatPercent(item.percent)}</small>
                </li>
              ))}
            </ul>
          </article>

          <article className="admin-card">
            <div className="admin-card-header">
              <h3>Campanhas UTM</h3>
            </div>
            <ul className="admin-dashboard-ranking-list">
              {overview.distributions.campaigns.map((item) => (
                <li key={item.label}>
                  <header>
                    <span>{item.label}</span>
                    <strong>{formatNumber(item.count)}</strong>
                  </header>
                  <div className="admin-dashboard-progress-track">
                    <span
                      className="admin-dashboard-progress-fill is-campaign"
                      style={{ width: `${clampPercent(item.percent)}%` }}
                    />
                  </div>
                </li>
              ))}
              {!overview.distributions.campaigns.length ? (
                <li className="admin-dashboard-empty">
                  Sem campanhas mapeadas no periodo. Configure UTM para leitura completa.
                </li>
              ) : null}
            </ul>
          </article>
        </div>
      </section>

      <section className="admin-card">
        <div className="admin-card-header">
          <h3>Leads recentes do periodo</h3>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Empresa</th>
                <th>Origem</th>
                <th>Status</th>
                <th>Responsavel</th>
                <th>Criado em</th>
              </tr>
            </thead>
            <tbody>
              {overview.recentLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>
                    <strong>{lead.name}</strong>
                    <br />
                    <small>{getLeadEmailDisplay(lead.email)}</small>
                  </td>
                  <td>{lead.company || "-"}</td>
                  <td>{lead.source || "Sem origem"}</td>
                  <td>
                    <span
                      className={`admin-dashboard-status-pill ${STATUS_PILL_CLASS[lead.status]}`}
                    >
                      {INTERNAL_STATUS_LABEL[lead.status]}
                    </span>
                  </td>
                  <td>{lead.assignee?.fullName ?? "Nao atribuido"}</td>
                  <td>{lead.createdAt.toLocaleString("pt-BR")}</td>
                </tr>
              ))}
              {!overview.recentLeads.length ? (
                <tr>
                  <td colSpan={6}>Nenhum lead registrado neste periodo.</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
