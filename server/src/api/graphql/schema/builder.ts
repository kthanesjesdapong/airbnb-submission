import SchemaBuilder from "@pothos/core";

import { PrismaClient, Prisma } from "@prisma/client";

import RelayPlugin from '@pothos/plugin-relay';
import ScopeAuthPlugin from '@pothos/plugin-scope-auth';
import PrismaPlugin from '@pothos/plugin-prisma';
import ErrorsPlugin from '@pothos/plugin-errors';
import ValidationPlugin from '@pothos/plugin-validation';

import type { SchemaBuilderType } from "@types";


//Admin
const prisma = new PrismaClient({});

const builder = new SchemaBuilder<SchemaBuilderType>({
  plugins: [ValidationPlugin, PrismaPlugin, ErrorsPlugin, ScopeAuthPlugin, RelayPlugin],
  validationOptions: {
    validationError: (zodError, _args, _context, _info) => {


      const errorMsgList = zodError.errors.map((error) => `${error.path}:${error.message}`).join(', ');
      return errorMsgList;

    }
  },
  errorOptions: {
    defaultTypes: [Error]
  },
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'ID',
  },
  authScopes: (context) => ({
    public: !!context.role,
    user: context.role === 'USER',
    admin: context.role === 'ADMIN'
  }),
  // scopeAuthOptions: {
  //   authorizeOnSubscribe: true,
  // },
  prisma: {
    client: prisma,
    dmmf: Prisma.dmmf,
    filterConnectionTotalCount: true,
    onUnusedQuery: process.env.NODE_ENV === 'production' ? null : 'warn',
  },
});

export default builder

