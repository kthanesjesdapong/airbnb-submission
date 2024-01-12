import builder from "@api/graphql/schema/builder";
import { RestaurantHours } from "@prisma/client";

builder.prismaNode('RestaurantHours', {
  id: { resolve: (restaurantHours: RestaurantHours) => restaurantHours.id },
  findUnique: (id) => ({ id: Number.parseInt(id, 10) }),
  fields: (t) => ({
    start: t.exposeString('start'),
    end: t.exposeString('end'),
    day: t.exposeInt('day'),
    restaurantName: t.exposeString('restaurantName'),
  })
});