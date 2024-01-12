import builder from "@api/graphql/schema/builder";

builder.prismaNode('PricesOnBar', {
  id: { field: 'barName_priceStr' },
  fields: (t) => ({
    restaurantName: t.exposeString('barName'),
    priceStr: t.exposeString('priceStr')
  })
});