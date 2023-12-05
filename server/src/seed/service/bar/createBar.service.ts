import { Context } from "@types";
import { type Business } from "@seed/types/business";
import { Bar, Prisma } from '@prisma/client';


export type createBar = (bar: Prisma.BarCreateInput, ctx: Context) => Promise<Bar>;

export const createBar = async (bar: Business, ctx: Context) => {
  try {
    const { coordinates, hours, location, categories } = bar;
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
            location: {
              connectOrCreate: {
                where: {
                  address: location.address1 ?? '',
                  city: location.city ?? '',
                  state: location.state ?? '',
                },
                create: {
                  address: location.address1 ?? '',
                  city: location.city ?? '',
                  state: location.state ?? '',
                }
              }
            }
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
    console.error(bar.name, e);
  }
};