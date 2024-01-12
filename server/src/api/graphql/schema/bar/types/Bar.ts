import builder from "@api/graphql/schema/builder";

builder.prismaObject('Bar', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    name: t.exposeString('name'),
    rating: t.exposeFloat('rating'),
    price: t.relatedConnection('price', {
      cursor: 'barName_priceStr',
      args: { barName_locationAddress: t.arg.stringList() }
    }),
    photos: t.exposeStringList(
      'photos'
    ),
    latitude: t.exposeFloat('latitude'),
    longitude: t.exposeFloat('longitude'),
    display_phone: t.exposeString('display_phone', { nullable: true }),
    hours: t.relatedConnection('hours', {
      cursor: 'id',
      args: { name: t.arg.string() }
    }),
    location: t.relatedConnection('location', {
      cursor: 'barName_locationAddress',
      args: { barName_locationAddress: t.arg.stringList() }
    }),
    category: t.relatedConnection('category', {
      cursor: 'barName_categoryAlias',
      args: { barName_categoryAlias: t.arg.stringList() }
    })
  })
});