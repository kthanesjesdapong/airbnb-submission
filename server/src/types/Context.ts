import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";

export type Context = {
  prisma: PrismaClient;
  user?: User | null;
  role: string;
};
