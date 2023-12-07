import { Restaurant } from "@prisma/client";
import builder from "../../builder";

builder.queryField('allRestaurants', (t) => t.prismaConnection({
  type: 'Restaurant',
  cursor: 'id',
  defaultSize: 6,
  resolve: async (query, parent, args, context): Promise<Restaurant[]> => {
    const allRestaurants = await context.prisma.restaurant.findMany({
      ...query,
      orderBy: [{
        id: 'asc'
      }],
      include: { category: true, hours: true, location: true }
    });
    return allRestaurants;
  }
}));