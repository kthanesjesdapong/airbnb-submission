import SchemaBuilder from "@pothos/core";
import { PrismaClient, Prisma } from "@prisma/client";

import PrismaPlugin from '@pothos/plugin-prisma';
import RelayPlugin from '@pothos/plugin-relay';

import { Context } from "@types";
import type PrismaTypes from '@pothos/plugin-prisma/generated';

import { DateTimeResolver } from 'graphql-scalars';




const prisma = new PrismaClient({});

const builder = new SchemaBuilder<{
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

builder.addScalarType('Date', DateTimeResolver);



builder.globalConnectionField('totalCount', (t) =>
  t.int({
    nullable: false,
    resolve: (parent) =>
      typeof parent.totalCount === 'function' ? parent.totalCount() : parent.totalCount,
  }));

export default builder;
