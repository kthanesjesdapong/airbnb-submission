import { Context } from "@types";
import { type Business } from "@seed/types/business";
import { Restaurant } from '@prisma/client';
import { Prisma } from "@prisma/client";

export type createRestaurant = (restaurant: Prisma.RestaurantCreateInput, ctx: Context) => Promise<Restaurant>;

export const createRestaurant = async (restaurant: Business, ctx: Context) => {
  try {
    
    const { hours, location, categories, coordinates } = restaurant;
    const { latitude, longitude } = coordinates;
    const formattedHours = hours.length > 0 ? hours[0].open : [{ start: '0', end: '0', day: 0 }];

    return await ctx.prisma.restaurant.create({
      data: {
        name: restaurant.name,
        rating: restaurant.rating,
        photos: restaurant.photos,
        latitude: latitude ?? 0,
        longitude: longitude ?? 0,
        hours: {
          createMany: {
            data: formattedHours
          }
        },
        location: {
          create: {
            address: location.address1 ?? 'N/A',
            city: location.city ?? 'N/A',
            state: location.state ?? 'N/A',
          },
        },
        display_phone: restaurant.display_phone,
        category: {
          create: categories.map((category) => ({
            category: {
              connectOrCreate: {
                create: {
                  title: category.title ?? 'Restaurant',
                  alias: category.alias ?? 'restaurant'
                },
                where: {
                  title: category.title ?? 'Restaurant',
                  alias: category.alias ?? 'restaurant'
                }
              }
            }
          }))
        }
      }
    });
  } catch (e: unknown) {
    console.error(restaurant.name, e);
  }
};