import SchemaBuilder from "@pothos/core";
import { PrismaClient, Prisma } from "@prisma/client";

import PrismaPlugin from '@pothos/plugin-prisma';
import RelayPlugin from '@pothos/plugin-relay';

import { Context } from "@types";
import type PrismaTypes from '@pothos/plugin-prisma/generated';




const prisma = new PrismaClient({});

const builder = new SchemaBuilder<{
  Context: Context;
  PrismaTypes: PrismaTypes;
  Connection: {
    totalCount: number | (() => number | Promise<number>);
  };
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'ID',
  },
  prisma: {
    client: prisma,
    dmmf: Prisma.dmmf,
    filterConnectionTotalCount: true,
    onUnusedQuery: process.env.NODE_ENV === 'production' ? null : 'warn',
  },
});

builder.globalConnectionField('totalCount', (t) =>
  t.int({
    nullable: false,
    resolve: (parent) =>
      typeof parent.totalCount === 'function' ? parent.totalCount() : parent.totalCount,
  }));

export default builder;
