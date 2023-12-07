import { Restaurant } from "@prisma/client";
import builder from "../../builder";
import { prismaErrorHandler } from "@seed/middleware/prismaError";
import { getSkipVal, getVal, getFirstRecord } from "@api/utils/paginateVal";
builder.queryField('allRestaurants', (t) => t.prismaConnection({
  type: 'Restaurant',
  cursor: 'id',
  defaultSize: 20,
  args: {
    take: t.arg.int({ required: false }),
    cursorId: t.arg.int({ required: false })
  },
  resolve: async (_query, _parent, _args, _context): Promise<Restaurant[] | undefined> => {
    try {
      const firstId = await getFirstRecord(_context.prisma, 'Restaurant');
      const allRestaurants = await _context.prisma.restaurant.findMany({
        ..._query,
        orderBy: [{
          id: 'asc'
        }],
        take: getVal(_args.take, 6),
        skip: getSkipVal(_args.cursorId),
        cursor: {
          id: getVal(_args.cursorId, firstId?.id)
        },
        include: { price: true, category: true, hours: true, location: true }
      });
      return allRestaurants;
    } catch (e: unknown) {
      prismaErrorHandler(e);
    }
  }
}));