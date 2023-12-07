import builder from "@api/schema/builder";

builder.prismaNode('BarLocation', {
  id: { field: 'barName_locationAddress' },
  fields: (t) => ({
    restaurantName: t.exposeString('barName'),
    locationAddress: t.exposeString('locationAddress')
  })
});