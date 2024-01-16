import { Context } from "@types";
import type PrismaTypes from "@pothos/plugin-prisma/generated";

export type SchemaBuilderType = {
  Context: Context;
  PrismaTypes: PrismaTypes;
  Connection: {
    totalCount: number | (() => number | Promise<number>);
  };
  Scalars: {
    Date: {
      Input: Date,
      Output: Date;
    };
  };
  AuthScopes: {
    public: boolean;
    user: boolean;
    admin: boolean;
    loggedIn: boolean;
  };
};