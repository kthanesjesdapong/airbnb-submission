import builder from "../../builder";
import { Restaurant } from "@prisma/client";


builder.prismaNode('Restaurant', {
  id: { resolve: (restaurant: Restaurant) => restaurant.id },
  findUnique: (id) => ({ id: Number.parseInt(id, 10) }),
  fields: (t) => ({
    name: t.exposeString('name'),
    rating: t.exposeFloat('rating'),
    price: t.relatedConnection('price', {
      cursor: 'restaurantName_priceStr',
      args: { estaurantName_priceStr: t.arg.stringList() }
    }),
    photos: t.exposeStringList(
      'photos'
    ),
    latitude: t.exposeFloat('latitude'),
    longitude: t.exposeFloat('longitude'),
    display_phone: t.exposeString('display_phone', { nullable: true }),
    hours: t.relatedConnection('hours', {
      cursor: 'id',
      args: { name: t.arg.string() }
    }),
    location: t.relatedConnection('location', {
      cursor: 'restaurantName_locationAddress',
      args: { restaurantName_locationAddress: t.arg.stringList() }
    }),
    category: t.relatedConnection('category', {
      cursor: 'restaurantName_categoryAlias',
      args: { restaurantName_categoryAlias: t.arg.stringList() }
    })
  })
});

