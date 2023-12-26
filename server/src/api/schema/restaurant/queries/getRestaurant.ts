import builder from "@api/schema/builder";
import { prismaErrorHandler } from "@seed/middleware/prismaError";

builder.queryField('getRestaurant', (t) => t.prismaField({
  type: 'Restaurant',
  args: {
    restaurant_id: t.arg.int({ required: true }),
  },
  resolve: async (_query, _parent, _args, _context) => {
    try {
      const restaurant = await _context.prisma.restaurant.findUnique({
        ..._query,
        where: {
          id: _args?.restaurant_id,
        },
        include: { price: true, category: true, hours: true, location: true }
      });
      if (!restaurant) {
        throw new Error('Restaurant not found');
      }
      return restaurant;
    } catch (e: unknown) {
      prismaErrorHandler(e);
    }
  }
}));