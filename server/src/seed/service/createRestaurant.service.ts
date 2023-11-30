import { Context } from "@config/prisma/context";

import { type Business } from "@seed/types/restaurants";
import { Prisma } from "@prisma/client";
// export type restaurantInput = {
//   name: string;
//   rating: number;
//   photos: string[];
//   coordinates: Coordinates;
// };

export async function createRestaurant(restaurant: Business, ctx: Context) {
  return await ctx.prisma.restaurant.create({
    data: restaurant,
  });
}

