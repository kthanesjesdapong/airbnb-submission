import builder from '@api/graphql/schema/builder';
import { Role } from '@prisma/client';

builder.enumType(Role, { name: 'Role' });

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeInt('id', { nullable: true }),
    email: t.exposeString('email', { nullable: true }),
    createdAt: t.expose('createdAt', {
      type: 'Date',
      nullable: true
    }),
    role: t.expose('role', {
      type: Role,
      nullable: true
    }),
    tokens: t.relation('tokens')
  })
});