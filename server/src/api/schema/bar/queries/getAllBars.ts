import { Bar } from "@prisma/client";
import builder from "../../builder";

builder.queryField('allBars', (t) => t.prismaConnection({
  type: 'Bar',
  cursor: 'id',
  defaultSize: 20,
  resolve: async (query, parent, args, context): Promise<Bar[]> => {
    const allBars = await context.prisma.bar.findMany({
      ...query,
      orderBy: [{
        id: 'asc'
      }],
      include: { category: true, hours: true, location: true }
    });
    return allBars;
  }
}));