import builder from "@api/schema/builder";
import { RestaurantHours } from "@prisma/client";

builder.prismaNode('RestaurantHours', {
  id: { resolve: (restaurantHours: RestaurantHours) => restaurantHours.id },
  findUnique: (id) => ({ id: Number.parseInt(id, 10) }),
  fields: (t) => ({
    start: t.exposeString('start'),
    end: t.exposeString('end'),
    restaurantName: t.exposeString('restaurantName'),
  })
});