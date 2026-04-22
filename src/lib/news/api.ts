import { ZodError } from "zod";
import { Prisma } from "@prisma/client";

export class ApiError extends Error {
  status: number;
  code: string;
  details?: unknown;

  constructor(status: number, code: string, message: string, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export function ok<T>(data: T, init?: ResponseInit) {
  return Response.json(
    {
      success: true,
      data,
    },
    init,
  );
}

export function fail(
  status: number,
  code: string,
  message: string,
  details?: unknown,
  init?: ResponseInit,
) {
  return Response.json(
    {
      success: false,
      error: {
        code,
        message,
        ...(details ? { details } : {}),
      },
    },
    {
      status,
      ...init,
    },
  );
}

export function fromUnknownError(error: unknown) {
  if (error instanceof ApiError) {
    return fail(error.status, error.code, error.message, error.details);
  }

  if (error instanceof ZodError) {
    return fail(400, "VALIDATION_ERROR", "Dados invalidos.", error.flatten());
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return fail(400, "DATABASE_VALIDATION_ERROR", "Dados invalidos para persistencia.");
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return fail(409, "CONFLICT", "Ja existe um registro com os mesmos dados.");
    }

    if (error.code === "P2003") {
      return fail(
        409,
        "RELATION_CONFLICT",
        "Categoria ou tags invalidas para esta noticia.",
      );
    }

    if (error.code === "P2025") {
      return fail(404, "NOT_FOUND", "Registro nao encontrado.");
    }

    return fail(500, "DATABASE_ERROR", "Falha ao salvar dados no banco.");
  }

  if (error instanceof Error) {
    if (/unique constraint failed/i.test(error.message)) {
      return fail(409, "CONFLICT", "Ja existe um registro com os mesmos dados.");
    }

    if (/foreign key constraint failed/i.test(error.message)) {
      return fail(
        409,
        "RELATION_CONFLICT",
        "Categoria ou tags invalidas para esta noticia.",
      );
    }

    if (/record to update not found|record not found/i.test(error.message)) {
      return fail(404, "NOT_FOUND", "Registro nao encontrado.");
    }

    return fail(500, "INTERNAL_ERROR", "Erro interno de servidor.");
  }

  return fail(500, "INTERNAL_ERROR", "Erro interno de servidor.");
}

export async function parseJsonBody<T = unknown>(request: Request, maxChars = 1_000_000) {
  const raw = await request.text();
  if (raw.length > maxChars) {
    throw new ApiError(413, "PAYLOAD_TOO_LARGE", "Payload excede o limite permitido.");
  }

  if (!raw.trim()) {
    return {} as T;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    throw new ApiError(400, "INVALID_JSON", "JSON invalido.");
  }
}
