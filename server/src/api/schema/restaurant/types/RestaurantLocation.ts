import builder from "@api/schema/builder";

builder.prismaNode('RestaurantLocation', {
  id: { field: 'restaurantName_locationAddress' },
  fields: (t) => ({
    restaurantName: t.exposeString('restaurantName'),
    locationAddress: t.exposeString('locationAddress')
  })
});