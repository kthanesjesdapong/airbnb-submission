import builder from "@api/graphql/schema/builder";

builder.prismaNode('BarLocation', {
  id: { field: 'barName_locationAddress' },
  fields: (t) => ({
    restaurantName: t.exposeString('barName'),
    locationAddress: t.exposeString('locationAddress')
  })
});