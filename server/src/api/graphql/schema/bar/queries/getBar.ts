import builder from "@api/graphql/schema/builder";
import { Bar } from "@prisma/client";
import { errorMessage } from "@api/utils/pothosErrorHandler";

builder.queryField('getBar', (t) => t.prismaField({
  type: 'Bar',
  errors: {},
  args: {
    bar_id: t.arg.int({ required: true }),
  },
  resolve: async (_query, _parent, _args, _context): Promise<Bar> => {
    try {
      const bar = await _context.prisma.bar.findUniqueOrThrow({
        ..._query,
        where: {
          id: _args?.bar_id,
        },
        include: { price: true, category: true, hours: true, location: true }
      });
      if (!bar) {
        throw new Error('Bar not found');
      }
      return bar;
    } catch (e: unknown) {
      errorMessage(e);
      throw e;
    }
  }
}));