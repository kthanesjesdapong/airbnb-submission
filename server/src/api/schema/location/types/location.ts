import builder from "@api/schema/builder";
import { Location } from "@prisma/client";


export const LocationNode = builder.prismaNode('Location', {
  id: { resolve: (location: Location) => location.id },
  findUnique: ((id) => ({ id: Number.parseInt(id, 10) })),
  fields: (t) => ({
    address: t.exposeString('address'),
    city: t.exposeString('city'),
    state: t.exposeString('state')
  }),
});