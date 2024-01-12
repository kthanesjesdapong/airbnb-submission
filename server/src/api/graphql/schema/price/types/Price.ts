import builder from "@api/graphql/schema/builder";
import { Price } from "@prisma/client";

builder.prismaNode('Price', {
  id: { resolve: (price: Price) => price.id },
  findUnique: ((id) => ({ id: Number.parseInt(id, 10) })),
  fields: (t) => ({
    price: t.exposeString('price')
  }),
});