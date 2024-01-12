import builder from "@api/graphql/schema/builder";
import { Token } from '../constructors/Token';

export const AccessToken = builder.objectType(Token, {
  name: 'AccessToken',
  description: 'JWT ACCESS TOKEN',
  fields: (t) => ({
    token: t.exposeString('token', { nullable: true })
  })
});

builder.prismaObject('Token', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    createdAt: t.expose('createdAt', {
      type: 'Date',
    }),
    updatedAt: t.expose('updatedAt', {
      type: 'Date',
    }),
    type: t.exposeString('type'),
    valid: t.exposeBoolean('valid'),
    expiration: t.expose('expiration', {
      type: 'Date',
    }),
    userId: t.exposeInt('userId')
  })
});