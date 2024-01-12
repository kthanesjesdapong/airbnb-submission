import builder from "@api/graphql/schema/builder";

builder.prismaNode('CategoriesOnRestaurants', {
  id: { field: 'restaurantName_categoryAlias' },
  fields: (t) => ({
    restaurantName: t.exposeString('restaurantName'),
    categoryAlias: t.exposeString('categoryAlias')
  })
});