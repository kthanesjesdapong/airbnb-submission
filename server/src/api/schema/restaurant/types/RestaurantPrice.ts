import builder from "@api/schema/builder";

builder.prismaNode('PricesOnRestaurant', {
  id: { field: 'restaurantName_priceStr' },
  fields: (t) => ({
    restaurantName: t.exposeString('restaurantName'),
    priceStr: t.exposeString('priceStr')
  })
});