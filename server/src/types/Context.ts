import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";

export type Context = {
  prisma: PrismaClient;
  user?: User | null;
  loggedIn?: boolean;
  role: string;
};
