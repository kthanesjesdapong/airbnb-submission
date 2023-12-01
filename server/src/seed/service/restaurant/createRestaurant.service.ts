import { Context } from "@config/prisma/context";
import { type Business } from "@seed/types/business";
import { Restaurant } from '@prisma/client';

export type createRestaurant = (restaurant: Business, ctx: Context) => Promise<Restaurant>;

export const createRestaurant = async (restaurant: Business, ctx: Context) => {
  return await ctx.prisma.restaurant.create({
    data: restaurant
  });
};
