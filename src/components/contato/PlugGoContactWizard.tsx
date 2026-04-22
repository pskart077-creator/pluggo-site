"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  CONTACT_WIZARD_STEPS,
  LOSS_STAGE_OPTIONS,
  MAIN_PAIN_OPTIONS,
  OPERATION_MODEL_OPTIONS,
  REVENUE_OPTIONS,
  SALES_CHANNEL_OPTIONS,
  SEGMENT_OPTIONS,
  TICKET_OPTIONS,
  TRANSACTION_OPTIONS,
  URGENCY_OPTIONS,
} from "@/components/contato/pluggo-contact-wizard.data";
import type {
  ContactWizardData,
  ContactWizardErrors,
  ContactWizardStep,
  OptionItem,
} from "@/components/contato/pluggo-contact-wizard.types";

const TOTAL_STEPS = CONTACT_WIZARD_STEPS.length;
const CONTACT_WIZARD_STORAGE_KEY = "pluggo-contact-wizard:v2";

const INITIAL_DATA: ContactWizardData = {
  name: "",
  whatsapp: "",
  company: "",
  website: "",
  segment: "",
  salesChannel: "",
  operationModel: "",
  transactionsVolume: "",
  revenueVolume: "",
  ticketAverage: "",
  mainPain: "",
  lossStage: "",
  urgency: "",
  corporateEmail: "",
  improvementGoal: "",
};

const styles = {
  section: "pluggo-contact-wizard__section",
  container: "pluggo-contact-wizard__container",
  card: "pluggo-contact-wizard__card",
  header: "pluggo-contact-wizard__header",
  badge: "pluggo-contact-wizard__badge",
  title: "pluggo-contact-wizard__title",
  subtitle: "pluggo-contact-wizard__subtitle",
  progressWrap: "pluggo-contact-wizard__progress-wrap",
  progressMeta: "pluggo-contact-wizard__progress-meta",
  progressTrack: "pluggo-contact-wizard__progress-track",
  progressFill: "pluggo-contact-wizard__progress-fill",
  progressSteps: "pluggo-contact-wizard__progress-steps",
  progressStep: "pluggo-contact-wizard__progress-step",
  progressStepDone: "pluggo-contact-wizard__progress-step--done",
  progressStepDot: "pluggo-contact-wizard__progress-step-dot",
  progressStepLabel: "pluggo-contact-wizard__progress-step-label",
  feedback: "pluggo-contact-wizard__feedback",
  feedbackSuccess: "pluggo-contact-wizard__feedback--success",
  feedbackError: "pluggo-contact-wizard__feedback--error",
  form: "pluggo-contact-wizard__form",
  stepPanel: "pluggo-contact-wizard__step-panel",
  fieldsGrid: "pluggo-contact-wizard__fields-grid",
  fieldStack: "pluggo-contact-wizard__field-stack",
  label: "pluggo-contact-wizard__label",
  input: "pluggo-contact-wizard__input",
  textarea: "pluggo-contact-wizard__textarea",
  inputInvalid: "pluggo-contact-wizard__input--invalid",
  errorText: "pluggo-contact-wizard__error-text",
  choiceFieldset: "pluggo-contact-wizard__choice-fieldset",
  choiceLegend: "pluggo-contact-wizard__choice-legend",
  choiceGrid: "pluggo-contact-wizard__choice-grid",
  choiceCard: "pluggo-contact-wizard__choice-card",
  choiceCardSelected: "pluggo-contact-wizard__choice-card--selected",
  choiceRadio: "pluggo-contact-wizard__choice-radio",
  choiceLabel: "pluggo-contact-wizard__choice-label",
  footer: "pluggo-contact-wizard__footer",
  helperText: "pluggo-contact-wizard__helper-text",
  buttonRow: "pluggo-contact-wizard__button-row",
  backButton: "pluggo-contact-wizard__button-back",
  nextButton: "pluggo-contact-wizard__button-next",
  submitButton: "pluggo-contact-wizard__button-submit",
  buttonDisabled: "pluggo-contact-wizard__button--disabled",
} as const;

function cx(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

function toStep(value: number): ContactWizardStep {
  return Math.min(Math.max(value, 0), TOTAL_STEPS - 1) as ContactWizardStep;
}

function normalizeWebsite(input: string) {
  const cleaned = input.trim();
  if (!cleaned) {
    return "";
  }

  if (/^https?:\/\//i.test(cleaned)) {
    return cleaned;
  }

  return `https://${cleaned}`;
}

function isValidWebsite(input: string) {
  const normalized = normalizeWebsite(input);
  if (!normalized) {
    return false;
  }

  try {
    const url = new URL(normalized);
    return Boolean(url.hostname && url.hostname.includes("."));
  } catch {
    return false;
  }
}

function isValidEmail(input: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim());
}

function isValidWhatsapp(input: string) {
  const digitsOnly = input.replace(/\D/g, "");
  return digitsOnly.length >= 10 && digitsOnly.length <= 13;
}

function optionLabel(options: OptionItem[], value: string) {
  return options.find((option) => option.value === value)?.label ?? value;
}

function buildLeadMessage(data: ContactWizardData) {
  const website = normalizeWebsite(data.website);
  const lines = [
    "Diagnóstico comercial PlugGo - formulário multi-step.",
    "",
    "Identificação",
    `- Nome: ${data.name.trim()}`,
    `- WhatsApp: ${data.whatsapp.trim()}`,
    `- Empresa: ${data.company.trim()}`,
    `- Site: ${website || "Não informado."}`,
    "",
    "Operação",
    `- Segmento: ${optionLabel(SEGMENT_OPTIONS, data.segment)}`,
    `- Como vende hoje: ${optionLabel(SALES_CHANNEL_OPTIONS, data.salesChannel)}`,
    `- Modelo da operação: ${optionLabel(OPERATION_MODEL_OPTIONS, data.operationModel)}`,
    "",
    "Volume",
    `- Pedidos/transações por mês: ${optionLabel(TRANSACTION_OPTIONS, data.transactionsVolume)}`,
    `- Faturamento mensal: ${optionLabel(REVENUE_OPTIONS, data.revenueVolume)}`,
    `- Ticket médio: ${optionLabel(TICKET_OPTIONS, data.ticketAverage)}`,
    "",
    "Dor principal",
    `- Principal dor: ${optionLabel(MAIN_PAIN_OPTIONS, data.mainPain)}`,
    `- Etapa com maior perda: ${optionLabel(LOSS_STAGE_OPTIONS, data.lossStage)}`,
    `- Urgência: ${optionLabel(URGENCY_OPTIONS, data.urgency)}`,
    "",
    `Objetivo em uma frase: ${data.improvementGoal.trim() || "Não informado."}`,
  ];

  return lines.join("\n");
}

function buildPartialLeadMessage(data: ContactWizardData) {
  return [
    "Captura inicial do formulário multi-step da PlugGo.",
    "",
    `- Nome: ${data.name.trim()}`,
    `- WhatsApp: ${data.whatsapp.trim()}`,
    "",
    "Fluxo salvo após a etapa 1.",
  ].join("\n");
}

function buildLeadTags(data: ContactWizardData) {
  const tags = [
    `segmento-${data.segment}`,
    `canal-${data.salesChannel}`,
    `modelo-${data.operationModel}`,
    `volume-${data.transactionsVolume}`,
    `faturamento-${data.revenueVolume}`,
    `ticket-${data.ticketAverage}`,
    `dor-${data.mainPain}`,
    `perda-${data.lossStage}`,
    `urgencia-${data.urgency}`,
  ];

  return Array.from(new Set(tags.map((tag) => tag.trim()).filter(Boolean))).slice(0, 20);
}

function validateStep(step: ContactWizardStep, data: ContactWizardData): ContactWizardErrors {
  const errors: ContactWizardErrors = {};

  if (step === 0) {
    if (!data.name.trim()) {
      errors.name = "Informe seu nome.";
    }
    if (!data.whatsapp.trim()) {
      errors.whatsapp = "Informe o WhatsApp.";
    } else if (!isValidWhatsapp(data.whatsapp)) {
      errors.whatsapp = "Informe um WhatsApp válido com DDD.";
    }
  }

  if (step === 1) {
    if (!data.company.trim()) {
      errors.company = "Informe o nome da empresa.";
    }
    if (data.website.trim() && !isValidWebsite(data.website)) {
      errors.website = "Informe um site válido.";
    }
    if (!data.segment) {
      errors.segment = "Selecione o segmento.";
    }
    if (!data.salesChannel) {
      errors.salesChannel = "Selecione como você vende hoje.";
    }
    if (!data.operationModel) {
      errors.operationModel = "Selecione o modelo da operação.";
    }
  }

  if (step === 2) {
    if (!data.transactionsVolume) {
      errors.transactionsVolume = "Selecione o volume de pedidos/transações.";
    }
    if (!data.revenueVolume) {
      errors.revenueVolume = "Selecione o faturamento mensal.";
    }
    if (!data.ticketAverage) {
      errors.ticketAverage = "Selecione o ticket médio.";
    }
  }

  if (step === 3) {
    if (!data.mainPain) {
      errors.mainPain = "Selecione a principal dor.";
    }
    if (!data.lossStage) {
      errors.lossStage = "Selecione a etapa com maior perda.";
    }
    if (!data.urgency) {
      errors.urgency = "Selecione a urgência.";
    }
  }

  if (step === 4) {
    if (!data.corporateEmail.trim()) {
      errors.corporateEmail = "Informe o e-mail corporativo.";
    } else if (!isValidEmail(data.corporateEmail)) {
      errors.corporateEmail = "Informe um e-mail válido.";
    }
  }

  return errors;
}

function validateAllSteps(data: ContactWizardData) {
  const steps: ContactWizardStep[] = [0, 1, 2, 3, 4];
  const errors: ContactWizardErrors = {};
  let firstInvalidStep: ContactWizardStep | null = null;

  for (const step of steps) {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0 && firstInvalidStep === null) {
      firstInvalidStep = step;
    }
    Object.assign(errors, stepErrors);
  }

  return { errors, firstInvalidStep };
}

type ChoiceGroupProps = {
  disabled: boolean;
  error?: string;
  legend: string;
  options: OptionItem[];
  value: string;
  onChange: (nextValue: string) => void;
};

function ChoiceGroup({ disabled, error, legend, options, value, onChange }: ChoiceGroupProps) {
  return (
    <fieldset className={styles.choiceFieldset}>
      <legend className={styles.choiceLegend}>{legend}</legend>
      <div className={styles.choiceGrid}>
        {options.map((option) => (
          <label
            key={option.value}
            className={cx(
              styles.choiceCard,
              value === option.value && styles.choiceCardSelected,
            )}
          >
            <input
              className={styles.choiceRadio}
              type="radio"
              name={legend}
              value={option.value}
              checked={value === option.value}
              disabled={disabled}
              onChange={() => onChange(option.value)}
            />
            <span className={styles.choiceLabel}>{option.label}</span>
          </label>
        ))}
      </div>
      {error ? <p className={styles.errorText}>{error}</p> : null}
    </fieldset>
  );
}

export function PlugGoContactWizard() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [step, setStep] = useState<ContactWizardStep>(0);
  const [data, setData] = useState<ContactWizardData>(INITIAL_DATA);
  const [errors, setErrors] = useState<ContactWizardErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSavingInitialLead, setIsSavingInitialLead] = useState(false);
  const [capturedLeadId, setCapturedLeadId] = useState<string | null>(null);
  const [submitFeedback, setSubmitFeedback] = useState<{
    kind: "success" | "error";
    message: string;
  } | null>(null);

  const progress = useMemo(() => ((step + 1) / TOTAL_STEPS) * 100, [step]);
  const currentStepMeta = CONTACT_WIZARD_STEPS[step];
  const shouldShowProgress = step > 0;
  const isBusy = isSubmitting || isSavingInitialLead;

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(CONTACT_WIZARD_STORAGE_KEY);
      if (!raw) {
        return;
      }

      const parsed = JSON.parse(raw) as {
        leadId?: string;
        step?: number;
        data?: Partial<ContactWizardData>;
      };

      if (parsed.data) {
        setData((current) => ({
          ...current,
          ...parsed.data,
        }));
      }

      if (typeof parsed.step === "number") {
        setStep(toStep(parsed.step));
      }

      if (typeof parsed.leadId === "string" && parsed.leadId.trim()) {
        setCapturedLeadId(parsed.leadId);
      }
    } catch {
      window.localStorage.removeItem(CONTACT_WIZARD_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        CONTACT_WIZARD_STORAGE_KEY,
        JSON.stringify({
          leadId: capturedLeadId,
          step,
          data,
        }),
      );
    } catch {
      // Non-blocking persistence for resume behavior.
    }
  }, [capturedLeadId, data, step]);

  function setField<Key extends keyof ContactWizardData>(field: Key, value: ContactWizardData[Key]) {
    setData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  function handleBack() {
    setSubmitFeedback(null);
    setStep((current) => toStep(current - 1));
  }

  async function persistInitialLead() {
    setIsSavingInitialLead(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name.trim(),
          phone: data.whatsapp.trim(),
          source: "site-contato-multistep-inicial",
          sourcePage: pathname || "/contato",
          campaign: "captura-inicial",
          utm_source: searchParams.get("utm_source") || undefined,
          utm_medium: searchParams.get("utm_medium") || undefined,
          utm_campaign: searchParams.get("utm_campaign") || undefined,
          utm_content: searchParams.get("utm_content") || undefined,
          utm_term: searchParams.get("utm_term") || undefined,
          message: buildPartialLeadMessage(data),
          tags: ["captura-inicial", "fluxo-multistep"],
          captureStage: "partial",
          existingLeadId: capturedLeadId || undefined,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | {
            success?: boolean;
            data?: {
              id?: string;
            };
            error?: {
              message?: string;
            };
          }
        | null;

      if (!response.ok || !result?.success || !result.data?.id) {
        setSubmitFeedback({
          kind: "error",
          message:
            result?.error?.message ||
            "Não foi possível salvar o contato inicial. Tente novamente.",
        });
        return false;
      }

      setCapturedLeadId(result.data.id);
      return true;
    } catch {
      setSubmitFeedback({
        kind: "error",
        message: "Falha ao salvar o contato inicial. Verifique sua conexão e tente novamente.",
      });
      return false;
    } finally {
      setIsSavingInitialLead(false);
    }
  }

  async function handleNext() {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors((current) => ({
        ...current,
        ...stepErrors,
      }));
      return;
    }

    if (step === 0) {
      const captured = await persistInitialLead();
      if (!captured) {
        return;
      }
    }

    setSubmitFeedback(null);
    setStep((current) => toStep(current + 1));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    const { errors: allErrors, firstInvalidStep } = validateAllSteps(data);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      if (firstInvalidStep !== null) {
        setStep(firstInvalidStep);
      }
      setSubmitFeedback({
        kind: "error",
        message: "Revise os campos obrigatórios para continuar.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitFeedback(null);

    try {
      const payload = {
        name: data.name.trim(),
        email: data.corporateEmail.trim().toLowerCase(),
        phone: data.whatsapp.trim(),
        company: data.company.trim(),
        source: "site-contato-multistep",
        sourcePage: pathname || "/contato",
        campaign: "solicitar-diagnostico",
        utm_source: searchParams.get("utm_source") || undefined,
        utm_medium: searchParams.get("utm_medium") || undefined,
        utm_campaign: searchParams.get("utm_campaign") || undefined,
        utm_content: searchParams.get("utm_content") || undefined,
        utm_term: searchParams.get("utm_term") || undefined,
        message: buildLeadMessage(data),
        tags: buildLeadTags(data),
        captureStage: "complete" as const,
        existingLeadId: capturedLeadId || undefined,
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | {
            success?: boolean;
            error?: {
              message?: string;
            };
          }
        | null;

      if (!response.ok || !result?.success) {
        setSubmitFeedback({
          kind: "error",
          message:
            result?.error?.message ||
            "Não foi possível enviar seu diagnóstico. Tente novamente em instantes.",
        });
        return;
      }

      setData(INITIAL_DATA);
      setErrors({});
      setStep(0);
      setCapturedLeadId(null);
      window.localStorage.removeItem(CONTACT_WIZARD_STORAGE_KEY);
      setSubmitFeedback({
        kind: "success",
        message:
          "Recebemos seu pedido de diagnóstico. Nosso time vai retornar em breve pelo seu contato.",
      });
    } catch {
      setSubmitFeedback({
        kind: "error",
        message: "Falha de conexão. Verifique sua internet e tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <header className={styles.header}>
            <span className={styles.badge}>Diagnóstico comercial PlugGo</span>
            <h2 className={styles.title}>{currentStepMeta.title}</h2>
            <p className={styles.subtitle}>{currentStepMeta.subtitle}</p>
          </header>

          {shouldShowProgress ? (
            <div className={styles.progressWrap}>
              <div className={styles.progressMeta}>
                <span>
                  Passo <strong>{step + 1}</strong> de <strong>{TOTAL_STEPS}</strong>
                </span>
                <span>{Math.round(progress)}% completo</span>
              </div>

              <div className={styles.progressTrack} aria-hidden="true">
                <div className={styles.progressFill} style={{ width: `${progress}%` }} />
              </div>

              <ol className={styles.progressSteps}>
                {CONTACT_WIZARD_STEPS.map((_, index) => (
                  <li
                    key={index}
                    className={cx(
                      styles.progressStep,
                      index <= step && styles.progressStepDone,
                    )}
                  >
                    <span className={styles.progressStepDot} />
                    <span className={styles.progressStepLabel}>Etapa {index + 1}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          {submitFeedback ? (
            <p
              className={cx(
                styles.feedback,
                submitFeedback.kind === "success" ? styles.feedbackSuccess : styles.feedbackError,
              )}
            >
              {submitFeedback.message}
            </p>
          ) : null}

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div key={step} className={styles.stepPanel}>
              {step === 0 ? (
                <div className={styles.fieldsGrid}>
                  <div className={styles.fieldStack}>
                    <label className={styles.label} htmlFor="wizard-name">
                      Nome
                    </label>
                    <input
                      id="wizard-name"
                      className={cx(styles.input, errors.name && styles.inputInvalid)}
                      value={data.name}
                      disabled={isBusy}
                      maxLength={120}
                      placeholder="Seu nome"
                      onChange={(event) => setField("name", event.target.value)}
                    />
                    {errors.name ? <p className={styles.errorText}>{errors.name}</p> : null}
                  </div>

                  <div className={styles.fieldStack}>
                    <label className={styles.label} htmlFor="wizard-whatsapp">
                      WhatsApp
                    </label>
                    <input
                      id="wizard-whatsapp"
                      className={cx(styles.input, errors.whatsapp && styles.inputInvalid)}
                      value={data.whatsapp}
                      disabled={isBusy}
                      maxLength={32}
                      placeholder="(11) 99999-9999"
                      onChange={(event) => setField("whatsapp", event.target.value)}
                    />
                    {errors.whatsapp ? <p className={styles.errorText}>{errors.whatsapp}</p> : null}
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div className={styles.fieldsGrid}>
                  <div className={styles.fieldStack}>
                    <label className={styles.label} htmlFor="wizard-company">
                      Empresa
                    </label>
                    <input
                      id="wizard-company"
                      className={cx(styles.input, errors.company && styles.inputInvalid)}
                      value={data.company}
                      disabled={isBusy}
                      maxLength={160}
                      placeholder="Nome da empresa"
                      onChange={(event) => setField("company", event.target.value)}
                    />
                    {errors.company ? <p className={styles.errorText}>{errors.company}</p> : null}
                  </div>

                  <div className={styles.fieldStack}>
                    <label className={styles.label} htmlFor="wizard-website">
                      Site da empresa (opcional)
                    </label>
                    <input
                      id="wizard-website"
                      className={cx(styles.input, errors.website && styles.inputInvalid)}
                      value={data.website}
                      disabled={isBusy}
                      maxLength={300}
                      placeholder="www.suaempresa.com.br"
                      onChange={(event) => setField("website", event.target.value)}
                    />
                    {errors.website ? <p className={styles.errorText}>{errors.website}</p> : null}
                  </div>
                  <ChoiceGroup
                    legend="Segmento da empresa"
                    options={SEGMENT_OPTIONS}
                    value={data.segment}
                    error={errors.segment}
                    disabled={isBusy}
                    onChange={(nextValue) => setField("segment", nextValue)}
                  />

                  <ChoiceGroup
                    legend="Como vende hoje?"
                    options={SALES_CHANNEL_OPTIONS}
                    value={data.salesChannel}
                    error={errors.salesChannel}
                    disabled={isBusy}
                    onChange={(nextValue) => setField("salesChannel", nextValue)}
                  />

                  <ChoiceGroup
                    legend="Modelo da operação"
                    options={OPERATION_MODEL_OPTIONS}
                    value={data.operationModel}
                    error={errors.operationModel}
                    disabled={isBusy}
                    onChange={(nextValue) => setField("operationModel", nextValue)}
                  />
                </div>
              ) : null}

              {step === 2 ? (
                <div className={styles.fieldsGrid}>
                  <ChoiceGroup
                    legend="Pedidos/transações por mês"
                    options={TRANSACTION_OPTIONS}
                    value={data.transactionsVolume}
                    error={errors.transactionsVolume}
                    disabled={isBusy}
                    onChange={(nextValue) => setField("transactionsVolume", nextValue)}
                  />

                  <ChoiceGroup
                    legend="Faturamento mensal aproximado"
                    options={REVENUE_OPTIONS}
                    value={data.revenueVolume}
                    error={errors.revenueVolume}
                    disabled={isBusy}
                    onChange={(nextValue) => setField("revenueVolume", nextValue)}
                  />

                  <ChoiceGroup
                    legend="Ticket médio"
                    options={TICKET_OPTIONS}
                    value={data.ticketAverage}
                    error={errors.ticketAverage}
                    disabled={isBusy}
                    onChange={(nextValue) => setField("ticketAverage", nextValue)}
                  />
                </div>
              ) : null}

              {step === 3 ? (
                <div className={styles.fieldsGrid}>
                  <ChoiceGroup
                    legend="Qual é a principal dor hoje?"
                    options={MAIN_PAIN_OPTIONS}
                    value={data.mainPain}
                    error={errors.mainPain}
                    disabled={isBusy}
                    onChange={(nextValue) => setField("mainPain", nextValue)}
                  />

                  <ChoiceGroup
                    legend="Em qual etapa você mais perde clientes?"
                    options={LOSS_STAGE_OPTIONS}
                    value={data.lossStage}
                    error={errors.lossStage}
                    disabled={isBusy}
                    onChange={(nextValue) => setField("lossStage", nextValue)}
                  />

                  <ChoiceGroup
                    legend="Urgência"
                    options={URGENCY_OPTIONS}
                    value={data.urgency}
                    error={errors.urgency}
                    disabled={isBusy}
                    onChange={(nextValue) => setField("urgency", nextValue)}
                  />
                </div>
              ) : null}

              {step === 4 ? (
                <div className={styles.fieldsGrid}>
                  <div className={styles.fieldStack}>
                    <label className={styles.label} htmlFor="wizard-corporate-email">
                      E-mail corporativo
                    </label>
                    <input
                      id="wizard-corporate-email"
                      className={cx(styles.input, errors.corporateEmail && styles.inputInvalid)}
                      value={data.corporateEmail}
                      disabled={isBusy}
                      type="email"
                      maxLength={254}
                      placeholder="voce@empresa.com.br"
                      onChange={(event) => setField("corporateEmail", event.target.value)}
                    />
                    {errors.corporateEmail ? (
                      <p className={styles.errorText}>{errors.corporateEmail}</p>
                    ) : null}
                  </div>

                  <div className={styles.fieldStack}>
                    <label className={styles.label} htmlFor="wizard-improvement-goal">
                      Conte em uma frase o que você quer melhorar (opcional)
                    </label>
                    <textarea
                      id="wizard-improvement-goal"
                      className={styles.textarea}
                      value={data.improvementGoal}
                      disabled={isBusy}
                      maxLength={500}
                      placeholder="Ex.: reduzir abandono no checkout e elevar aprovação de pagamento."
                      onChange={(event) => setField("improvementGoal", event.target.value)}
                    />
                  </div>
                </div>
              ) : null}
            </div>

            <footer className={styles.footer}>

              <div className={styles.buttonRow}>
                {step > 0 ? (
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={handleBack}
                    disabled={isBusy}
                  >
                    Voltar
                  </button>
                ) : (
                  <span />
                )}

                {step < toStep(TOTAL_STEPS - 1) ? (
                  <button
                    type="button"
                    className={styles.nextButton}
                    onClick={() => {
                      void handleNext();
                    }}
                    disabled={isBusy}
                  >
                    {isSavingInitialLead && step === 0 ? "Salvando..." : "Continuar"}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isBusy}
                  >
                    {isSubmitting ? "Enviando..." : "Solicitar diagnóstico"}
                  </button>
                )}
              </div>
            </footer>
          </form>
        </div>
      </div>
    </section>
  );
}
