import SchemaBuilder from "@pothos/core";

import PrismaPlugin from '@pothos/plugin-prisma';
import RelayPlugin from '@pothos/plugin-relay';

import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { Scalars } from 'prisma-generator-pothos-codegen';
import { Prisma } from "@prisma/client";

import { Context } from "@types";

import { prisma } from '$prisma/client';

export const builder = new SchemaBuilder<{
  Context: Context;
  Scalars: Scalars<Prisma.Decimal, Prisma.InputJsonValue | null, Prisma.InputJsonValue>; // required to define correct types for created scalars.
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'ID'
  },
  prisma: {
    client: prisma,
    dmmf: Prisma.dmmf
  }
});

builder.queryType({});
builder.mutationType({})

