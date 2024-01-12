import builder from "@api/graphql/schema/builder";

builder.prismaNode('UsersLikedBars', {
  id: { field: 'barName_userId' },
  fields: (t) => ({
    restaurantName: t.exposeString('barName'),
    userId: t.exposeInt('userId')
  })
});