import builder from "@api/graphql/schema/builder";

builder.prismaNode('UsersLikedRestaurants', {
  id: { field: 'restaurantName_userId' },
  fields: (t) => ({
    restaurantName: t.exposeString('restaurantName'),
    userId: t.exposeInt('userId')
  })
});