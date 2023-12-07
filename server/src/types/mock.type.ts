import { PrismaClient } from "@prisma/client";
import { DeepMockProxy } from "jest-mock-extended";

export type MockContext = {
  prisma: DeepMockProxy<PrismaClient>;
};
