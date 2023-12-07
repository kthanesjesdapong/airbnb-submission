import { Bar } from "@prisma/client";
import builder from "../../builder";
import { prismaErrorHandler } from "@seed/middleware/prismaError";
import { getSkipVal, getVal, getFirstRecord } from "@api/utils/paginateVal";



builder.queryField('allBars', (t) => t.prismaConnection({
  type: 'Bar',
  cursor: 'id',
  defaultSize: 20,
  args: {
    take: t.arg.int({ required: false }),
    cursorId: t.arg.int({ required: false })
  },
  resolve: async (_query, _parent, _args, _context): Promise<Bar[] | undefined> => {
    try {
      const firstId = await getFirstRecord(_context.prisma, 'Bar');
      const allBars = await _context.prisma.bar.findMany({
        ..._query,
        orderBy: [{
          id: 'asc'
        }],
        take: getVal(_args.take, 6),
        cursor: {
          id: getVal(_args.cursorId, firstId?.id)
        },
        skip: getSkipVal(_args.cursorId),
        include: { price: true, category: true, hours: true, location: true }
      });
      return allBars;
    } catch (e: unknown) {
      prismaErrorHandler(e);
    }
  }
}));