import builder from "@api/schema/builder";
import { prismaErrorHandler } from "@seed/middleware/prismaError";

builder.queryField('getBar', (t) => t.prismaField({
  type: 'Bar',
  args: {
    bar_id: t.arg.int({ required: true }),
  },
  resolve: async (_query, _parent, _args, _context) => {
    try {
      const restaurant = await _context.prisma.bar.findUnique({
        ..._query,
        where: {
          id: _args?.bar_id,
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