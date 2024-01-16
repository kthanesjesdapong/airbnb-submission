import builder from "@api/graphql/schema/builder";
import { UserProfile } from "@prisma/client";

builder.prismaNode('UserProfile', {
  id: { resolve: (userProfile: UserProfile) => userProfile.id },
  findUnique: ((id) => ({ id: Number.parseInt(id, 10) })),
  fields: (t) => ({
    userName: t.exposeString('userName'),
    firstName: t.exposeString('firstName'),
    lastName: t.exposeString('lastName'),
  }),
});