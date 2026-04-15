import { PrismaClient } from "@prisma/client";

declare global {
  var __pluggoPrisma__: PrismaClient | undefined;
}

export const prisma =
  globalThis.__pluggoPrisma__ ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.__pluggoPrisma__ = prisma;
}