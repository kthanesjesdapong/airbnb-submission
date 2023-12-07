import builder from "@api/schema/builder";
import { BarHours } from "@prisma/client";

builder.prismaNode('BarHours', {
  id: { resolve: (barHours: BarHours) => barHours.id },
  findUnique: (id) => ({ id: Number.parseInt(id, 10) }),
  fields: (t) => ({
    start: t.exposeString('start'),
    end: t.exposeString('end'),
    restaurantName: t.exposeString('barName'),
  })
});