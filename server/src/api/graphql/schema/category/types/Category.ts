import builder from "@api/graphql/schema/builder";
import { Category } from "@prisma/client";

builder.prismaNode('Category', {
  id: { resolve: (category: Category) => category.id },
  findUnique: (id) => ({ id: Number.parseInt(id, 10) }),
  fields: (t) => ({
    title: t.exposeString('title'),
    alias: t.exposeString('alias')
  }),
});