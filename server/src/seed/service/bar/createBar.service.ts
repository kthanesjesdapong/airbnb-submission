import { Context } from "@config/prisma/context";
import { type Business } from "@seed/types/business";
import { Bar } from '@prisma/client';

export type createBar = (bar: Business, ctx: Context) => Promise<Bar>;

export const createBar = async (bar: Business, ctx: Context) => {
  return await ctx.prisma.bar.create({
    data: bar
  });
};