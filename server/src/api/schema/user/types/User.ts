import builder from '@api/schema/builder';
import { Role } from '@prisma/client';

builder.enumType(Role, { name: 'Role' });

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    email: t.exposeString('email'),
    createdAt: t.expose('createdAt', {
      type: 'Date'
    }),
    role: t.expose('role', {
      type: Role,
    })
  })
});