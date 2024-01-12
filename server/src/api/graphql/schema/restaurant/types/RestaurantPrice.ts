import builder from "@api/graphql/schema/builder";

builder.prismaNode('PricesOnRestaurant', {
  id: { field: 'restaurantName_priceStr' },
  fields: (t) => ({
    restaurantName: t.exposeString('restaurantName'),
    priceStr: t.exposeString('priceStr')
  })
});