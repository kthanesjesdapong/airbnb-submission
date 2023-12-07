import { prisma } from "@config/prisma/client";
import { Context } from "@types";

const apolloServerContext: Context = {
  prisma
};

export default apolloServerContext;