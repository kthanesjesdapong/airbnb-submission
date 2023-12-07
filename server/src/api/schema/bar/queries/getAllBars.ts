import { Bar } from "@prisma/client";
import builder from "../../builder";

builder.queryField('allBars', (t) => t.prismaConnection({
  type: 'Bar',
  cursor: 'id',
  defaultSize: 6,
  args: {
    skip: t.arg.int({ required: false }),
    take: t.arg.int({ required: false })
  },
  resolve: async (_query, _parent, _args, _context): Promise<Bar[] | undefined> => {
    try {
      const allBars = await _context.prisma.bar.findMany({
        // skip: _args.skip,
        // take: _args.take,
        ..._query,
        orderBy: [{
          id: 'asc'
        }],
        include: { price: true, category: true, hours: true, location: true }
      });

      return allBars;
    } catch (e: unknown) {
      console.error(e);
    }
  }
}));