import { Context } from "@types";
import { type Business } from "@seed/types/business";
import { Bar } from '@prisma/client';
import { Prisma } from "@prisma/client";

export type createBar = (bar: Prisma.BarCreateInput, ctx: Context) => Promise<Bar>;

export const createBar = async (bar: Business, ctx: Context) => {
  try {
    const { hours, location, categories, coordinates } = bar;
    const { latitude, longitude } = coordinates;
    const formattedHours = hours.length > 0 ? hours[0].open : [{ start: '0', end: '0', day: 0 }];

    return await ctx.prisma.bar.create({
      data: {
        name: bar.name,
        rating: bar.rating,
        photos: bar.photos,
        latitude: latitude ?? 0,
        longitude: longitude ?? 0,
        hours: { createMany: { data: formattedHours } },
        location: {
          create: {
            address: location.address1 ?? 'N/A',
            city: location.city ?? 'N/A',
            state: location.state ?? 'N/A',
          }
        },
        display_phone: bar.display_phone,
        category: {
          create: categories.map((category) => ({
            category: {
              connectOrCreate: {
                create: {
                  title: category.title ?? 'Bar',
                  alias: category.alias ?? 'bar'
                },
                where: {
                  title: category.title ?? 'Bar',
                  alias: category.alias ?? 'bar'
                }
              }
            }
          }))
        }
      }
    });
  } catch (e: unknown) {
    // console.error(bar.latitude, bar.longitude, 'THIS IS IN 53, latitude and longitude', e);
  }
};