import builder from "@api/schema/builder";

builder.prismaNode('CategoriesOnBars', {
  id: { field: 'barName_categoryAlias' },
  fields: (t) => ({
    restaurantName: t.exposeString('barName'),
    categoryAlias: t.exposeString('categoryAlias')
  })
});