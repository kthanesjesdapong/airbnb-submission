// @ts-nocheck
import { Prisma } from '.prisma/client';

import { builder } from '../../../../builder';

type Filters = {
  string: Prisma.StringFieldUpdateOperationsInput;
  nullableString: Prisma.NullableStringFieldUpdateOperationsInput;
  dateTime: Prisma.DateTimeFieldUpdateOperationsInput;
  nullableDateTime: Prisma.NullableDateTimeFieldUpdateOperationsInput;
  int: Prisma.IntFieldUpdateOperationsInput;
  nullableInt: Prisma.NullableIntFieldUpdateOperationsInput;
  bool: Prisma.BoolFieldUpdateOperationsInput;
  nullableBool: Prisma.NullableBoolFieldUpdateOperationsInput;
  bigInt: Prisma.BigIntFieldUpdateOperationsInput;
  nullableBigInt: Prisma.NullableBigIntFieldUpdateOperationsInput;
  bytes: Prisma.BytesFieldUpdateOperationsInput;
  nullableBytes: Prisma.NullableBytesFieldUpdateOperationsInput;
  float: Prisma.FloatFieldUpdateOperationsInput;
  nullableFloat: Prisma.NullableFloatFieldUpdateOperationsInput;
  decimal: Prisma.DecimalFieldUpdateOperationsInput;
  nullableDecimal: Prisma.NullableDecimalFieldUpdateOperationsInput;
};

type ApplyFilters<InputField> = {
  [F in keyof Filters]: 0 extends 1 & Filters[F]
    ? never
    : Filters[F] extends InputField
    ? Filters[F]
    : never;
}[keyof Filters];

type PrismaUpdateOperationsInputFilter<T extends object> = {
  [K in keyof T]: [ApplyFilters<T[K]>] extends [never] ? T[K] : ApplyFilters<T[K]>
};

export const Json = builder.scalarType('Json', {
  serialize: (value) => value,
});

export const TransactionIsolationLevel = builder.enumType('TransactionIsolationLevel', {
  values: ["ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"] as const,
});

export const RestaurantScalarFieldEnum = builder.enumType('RestaurantScalarFieldEnum', {
  values: ["id","name","rating","photos","coordinates","hours","location","display_phone","categories"] as const,
});

export const BarScalarFieldEnum = builder.enumType('BarScalarFieldEnum', {
  values: ["id","name","rating","photos","coordinates","hours","location","display_phone","categories"] as const,
});

export const SortOrder = builder.enumType('SortOrder', {
  values: ["asc","desc"] as const,
});

export const JsonNullValueInput = builder.enumType('JsonNullValueInput', {
  values: ["JsonNull"] as const,
});

export const QueryMode = builder.enumType('QueryMode', {
  values: ["default","insensitive"] as const,
});

export const JsonNullValueFilter = builder.enumType('JsonNullValueFilter', {
  values: ["DbNull","JsonNull","AnyNull"] as const,
});

export const RestaurantWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RestaurantWhereInput]}),
  OR: t.field({"required":false,"type":[RestaurantWhereInput]}),
  NOT: t.field({"required":false,"type":[RestaurantWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  rating: t.field({"required":false,"type":FloatFilter}),
  photos: t.field({"required":false,"type":StringNullableListFilter}),
  coordinates: t.field({"required":false,"type":JsonFilter}),
  hours: t.field({"required":false,"type":JsonNullableListFilter}),
  location: t.field({"required":false,"type":JsonFilter}),
  display_phone: t.field({"required":false,"type":StringFilter}),
  categories: t.field({"required":false,"type":JsonNullableListFilter}),
});
export const RestaurantWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantWhereInput>>('RestaurantWhereInput').implement({
  fields: RestaurantWhereInputFields,
});

export const RestaurantOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
  photos: t.field({"required":false,"type":SortOrder}),
  coordinates: t.field({"required":false,"type":SortOrder}),
  hours: t.field({"required":false,"type":SortOrder}),
  location: t.field({"required":false,"type":SortOrder}),
  display_phone: t.field({"required":false,"type":SortOrder}),
  categories: t.field({"required":false,"type":SortOrder}),
});
export const RestaurantOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantOrderByWithRelationInput>>('RestaurantOrderByWithRelationInput').implement({
  fields: RestaurantOrderByWithRelationInputFields,
});

export const RestaurantWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  AND: t.field({"required":false,"type":[RestaurantWhereInput]}),
  OR: t.field({"required":false,"type":[RestaurantWhereInput]}),
  NOT: t.field({"required":false,"type":[RestaurantWhereInput]}),
  name: t.field({"required":false,"type":StringFilter}),
  rating: t.field({"required":false,"type":FloatFilter}),
  photos: t.field({"required":false,"type":StringNullableListFilter}),
  coordinates: t.field({"required":false,"type":JsonFilter}),
  hours: t.field({"required":false,"type":JsonNullableListFilter}),
  location: t.field({"required":false,"type":JsonFilter}),
  display_phone: t.field({"required":false,"type":StringFilter}),
  categories: t.field({"required":false,"type":JsonNullableListFilter}),
});
export const RestaurantWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantWhereUniqueInput>>('RestaurantWhereUniqueInput').implement({
  fields: RestaurantWhereUniqueInputFields,
});

export const RestaurantOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
  photos: t.field({"required":false,"type":SortOrder}),
  coordinates: t.field({"required":false,"type":SortOrder}),
  hours: t.field({"required":false,"type":SortOrder}),
  location: t.field({"required":false,"type":SortOrder}),
  display_phone: t.field({"required":false,"type":SortOrder}),
  categories: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":RestaurantCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":RestaurantAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":RestaurantMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":RestaurantMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":RestaurantSumOrderByAggregateInput}),
});
export const RestaurantOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantOrderByWithAggregationInput>>('RestaurantOrderByWithAggregationInput').implement({
  fields: RestaurantOrderByWithAggregationInputFields,
});

export const RestaurantScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RestaurantScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[RestaurantScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[RestaurantScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  name: t.field({"required":false,"type":StringWithAggregatesFilter}),
  rating: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  photos: t.field({"required":false,"type":StringNullableListFilter}),
  coordinates: t.field({"required":false,"type":JsonWithAggregatesFilter}),
  hours: t.field({"required":false,"type":JsonNullableListFilter}),
  location: t.field({"required":false,"type":JsonWithAggregatesFilter}),
  display_phone: t.field({"required":false,"type":StringWithAggregatesFilter}),
  categories: t.field({"required":false,"type":JsonNullableListFilter}),
});
export const RestaurantScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantScalarWhereWithAggregatesInput>>('RestaurantScalarWhereWithAggregatesInput').implement({
  fields: RestaurantScalarWhereWithAggregatesInputFields,
});

export const BarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[BarWhereInput]}),
  OR: t.field({"required":false,"type":[BarWhereInput]}),
  NOT: t.field({"required":false,"type":[BarWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  rating: t.field({"required":false,"type":FloatFilter}),
  photos: t.field({"required":false,"type":StringNullableListFilter}),
  coordinates: t.field({"required":false,"type":JsonFilter}),
  hours: t.field({"required":false,"type":JsonNullableListFilter}),
  location: t.field({"required":false,"type":JsonFilter}),
  display_phone: t.field({"required":false,"type":StringFilter}),
  categories: t.field({"required":false,"type":JsonNullableListFilter}),
});
export const BarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarWhereInput>>('BarWhereInput').implement({
  fields: BarWhereInputFields,
});

export const BarOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
  photos: t.field({"required":false,"type":SortOrder}),
  coordinates: t.field({"required":false,"type":SortOrder}),
  hours: t.field({"required":false,"type":SortOrder}),
  location: t.field({"required":false,"type":SortOrder}),
  display_phone: t.field({"required":false,"type":SortOrder}),
  categories: t.field({"required":false,"type":SortOrder}),
});
export const BarOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarOrderByWithRelationInput>>('BarOrderByWithRelationInput').implement({
  fields: BarOrderByWithRelationInputFields,
});

export const BarWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  AND: t.field({"required":false,"type":[BarWhereInput]}),
  OR: t.field({"required":false,"type":[BarWhereInput]}),
  NOT: t.field({"required":false,"type":[BarWhereInput]}),
  name: t.field({"required":false,"type":StringFilter}),
  rating: t.field({"required":false,"type":FloatFilter}),
  photos: t.field({"required":false,"type":StringNullableListFilter}),
  coordinates: t.field({"required":false,"type":JsonFilter}),
  hours: t.field({"required":false,"type":JsonNullableListFilter}),
  location: t.field({"required":false,"type":JsonFilter}),
  display_phone: t.field({"required":false,"type":StringFilter}),
  categories: t.field({"required":false,"type":JsonNullableListFilter}),
});
export const BarWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarWhereUniqueInput>>('BarWhereUniqueInput').implement({
  fields: BarWhereUniqueInputFields,
});

export const BarOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
  photos: t.field({"required":false,"type":SortOrder}),
  coordinates: t.field({"required":false,"type":SortOrder}),
  hours: t.field({"required":false,"type":SortOrder}),
  location: t.field({"required":false,"type":SortOrder}),
  display_phone: t.field({"required":false,"type":SortOrder}),
  categories: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":BarCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":BarAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":BarMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":BarMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":BarSumOrderByAggregateInput}),
});
export const BarOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarOrderByWithAggregationInput>>('BarOrderByWithAggregationInput').implement({
  fields: BarOrderByWithAggregationInputFields,
});

export const BarScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[BarScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[BarScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[BarScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  name: t.field({"required":false,"type":StringWithAggregatesFilter}),
  rating: t.field({"required":false,"type":FloatWithAggregatesFilter}),
  photos: t.field({"required":false,"type":StringNullableListFilter}),
  coordinates: t.field({"required":false,"type":JsonWithAggregatesFilter}),
  hours: t.field({"required":false,"type":JsonNullableListFilter}),
  location: t.field({"required":false,"type":JsonWithAggregatesFilter}),
  display_phone: t.field({"required":false,"type":StringWithAggregatesFilter}),
  categories: t.field({"required":false,"type":JsonNullableListFilter}),
});
export const BarScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarScalarWhereWithAggregatesInput>>('BarScalarWhereWithAggregatesInput').implement({
  fields: BarScalarWhereWithAggregatesInputFields,
});

export const RestaurantCreateInputFields = (t: any) => ({
  name: t.string({"required":true}),
  rating: t.float({"required":true}),
  photos: t.stringList({"required":false}),
  coordinates: t.field({"required":true,"type":Json}),
  hours: t.field({"required":false,"type":[Json]}),
  location: t.field({"required":true,"type":Json}),
  display_phone: t.string({"required":true}),
  categories: t.field({"required":false,"type":[Json]}),
});
export const RestaurantCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantCreateInput>>('RestaurantCreateInput').implement({
  fields: RestaurantCreateInputFields,
});

export const RestaurantUpdateInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  rating: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  photos: t.stringList({"required":false}),
  coordinates: t.field({"required":false,"type":Json}),
  hours: t.field({"required":false,"type":[Json]}),
  location: t.field({"required":false,"type":Json}),
  display_phone: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  categories: t.field({"required":false,"type":[Json]}),
});
export const RestaurantUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantUpdateInput>>('RestaurantUpdateInput').implement({
  fields: RestaurantUpdateInputFields,
});

export const RestaurantCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  name: t.string({"required":true}),
  rating: t.float({"required":true}),
  photos: t.stringList({"required":false}),
  coordinates: t.field({"required":true,"type":Json}),
  hours: t.field({"required":false,"type":[Json]}),
  location: t.field({"required":true,"type":Json}),
  display_phone: t.string({"required":true}),
  categories: t.field({"required":false,"type":[Json]}),
});
export const RestaurantCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantCreateManyInput>>('RestaurantCreateManyInput').implement({
  fields: RestaurantCreateManyInputFields,
});

export const RestaurantUpdateManyMutationInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  rating: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  photos: t.stringList({"required":false}),
  coordinates: t.field({"required":false,"type":Json}),
  hours: t.field({"required":false,"type":[Json]}),
  location: t.field({"required":false,"type":Json}),
  display_phone: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  categories: t.field({"required":false,"type":[Json]}),
});
export const RestaurantUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantUpdateManyMutationInput>>('RestaurantUpdateManyMutationInput').implement({
  fields: RestaurantUpdateManyMutationInputFields,
});

export const BarCreateInputFields = (t: any) => ({
  name: t.string({"required":true}),
  rating: t.float({"required":true}),
  photos: t.stringList({"required":false}),
  coordinates: t.field({"required":true,"type":Json}),
  hours: t.field({"required":false,"type":[Json]}),
  location: t.field({"required":true,"type":Json}),
  display_phone: t.string({"required":true}),
  categories: t.field({"required":false,"type":[Json]}),
});
export const BarCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarCreateInput>>('BarCreateInput').implement({
  fields: BarCreateInputFields,
});

export const BarUpdateInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  rating: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  photos: t.stringList({"required":false}),
  coordinates: t.field({"required":false,"type":Json}),
  hours: t.field({"required":false,"type":[Json]}),
  location: t.field({"required":false,"type":Json}),
  display_phone: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  categories: t.field({"required":false,"type":[Json]}),
});
export const BarUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarUpdateInput>>('BarUpdateInput').implement({
  fields: BarUpdateInputFields,
});

export const BarCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  name: t.string({"required":true}),
  rating: t.float({"required":true}),
  photos: t.stringList({"required":false}),
  coordinates: t.field({"required":true,"type":Json}),
  hours: t.field({"required":false,"type":[Json]}),
  location: t.field({"required":true,"type":Json}),
  display_phone: t.string({"required":true}),
  categories: t.field({"required":false,"type":[Json]}),
});
export const BarCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarCreateManyInput>>('BarCreateManyInput').implement({
  fields: BarCreateManyInputFields,
});

export const BarUpdateManyMutationInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  rating: t.field({"required":false,"type":FloatFieldUpdateOperationsInput}),
  photos: t.stringList({"required":false}),
  coordinates: t.field({"required":false,"type":Json}),
  hours: t.field({"required":false,"type":[Json]}),
  location: t.field({"required":false,"type":Json}),
  display_phone: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  categories: t.field({"required":false,"type":[Json]}),
});
export const BarUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarUpdateManyMutationInput>>('BarUpdateManyMutationInput').implement({
  fields: BarUpdateManyMutationInputFields,
});

export const IntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFilter>>('IntFilter').implement({
  fields: IntFilterFields,
});

export const StringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFilter>>('StringFilter').implement({
  fields: StringFilterFields,
});

export const FloatFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatFilter}),
});
export const FloatFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatFilter>>('FloatFilter').implement({
  fields: FloatFilterFields,
});

export const StringNullableListFilterFields = (t: any) => ({
  equals: t.stringList({"required":false}),
  has: t.string({"required":false}),
  hasEvery: t.stringList({"required":false}),
  hasSome: t.stringList({"required":false}),
  isEmpty: t.boolean({"required":false}),
});
export const StringNullableListFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableListFilter>>('StringNullableListFilter').implement({
  fields: StringNullableListFilterFields,
});

export const JsonFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Json}),
  path: t.stringList({"required":false}),
  string_contains: t.string({"required":false}),
  string_starts_with: t.string({"required":false}),
  string_ends_with: t.string({"required":false}),
  array_contains: t.field({"required":false,"type":Json}),
  array_starts_with: t.field({"required":false,"type":Json}),
  array_ends_with: t.field({"required":false,"type":Json}),
  lt: t.field({"required":false,"type":Json}),
  lte: t.field({"required":false,"type":Json}),
  gt: t.field({"required":false,"type":Json}),
  gte: t.field({"required":false,"type":Json}),
  not: t.field({"required":false,"type":Json}),
});
export const JsonFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.JsonFilter>>('JsonFilter').implement({
  fields: JsonFilterFields,
});

export const JsonNullableListFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":[Json]}),
  has: t.field({"required":false,"type":Json}),
  hasEvery: t.field({"required":false,"type":[Json]}),
  hasSome: t.field({"required":false,"type":[Json]}),
  isEmpty: t.boolean({"required":false}),
});
export const JsonNullableListFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.JsonNullableListFilter>>('JsonNullableListFilter').implement({
  fields: JsonNullableListFilterFields,
});

export const RestaurantCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
  photos: t.field({"required":false,"type":SortOrder}),
  coordinates: t.field({"required":false,"type":SortOrder}),
  hours: t.field({"required":false,"type":SortOrder}),
  location: t.field({"required":false,"type":SortOrder}),
  display_phone: t.field({"required":false,"type":SortOrder}),
  categories: t.field({"required":false,"type":SortOrder}),
});
export const RestaurantCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantCountOrderByAggregateInput>>('RestaurantCountOrderByAggregateInput').implement({
  fields: RestaurantCountOrderByAggregateInputFields,
});

export const RestaurantAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
});
export const RestaurantAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantAvgOrderByAggregateInput>>('RestaurantAvgOrderByAggregateInput').implement({
  fields: RestaurantAvgOrderByAggregateInputFields,
});

export const RestaurantMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
  display_phone: t.field({"required":false,"type":SortOrder}),
});
export const RestaurantMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantMaxOrderByAggregateInput>>('RestaurantMaxOrderByAggregateInput').implement({
  fields: RestaurantMaxOrderByAggregateInputFields,
});

export const RestaurantMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
  display_phone: t.field({"required":false,"type":SortOrder}),
});
export const RestaurantMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantMinOrderByAggregateInput>>('RestaurantMinOrderByAggregateInput').implement({
  fields: RestaurantMinOrderByAggregateInputFields,
});

export const RestaurantSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
});
export const RestaurantSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantSumOrderByAggregateInput>>('RestaurantSumOrderByAggregateInput').implement({
  fields: RestaurantSumOrderByAggregateInputFields,
});

export const IntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntWithAggregatesFilter>>('IntWithAggregatesFilter').implement({
  fields: IntWithAggregatesFilterFields,
});

export const StringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringWithAggregatesFilter>>('StringWithAggregatesFilter').implement({
  fields: StringWithAggregatesFilterFields,
});

export const FloatWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedFloatFilter}),
  _min: t.field({"required":false,"type":NestedFloatFilter}),
  _max: t.field({"required":false,"type":NestedFloatFilter}),
});
export const FloatWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatWithAggregatesFilter>>('FloatWithAggregatesFilter').implement({
  fields: FloatWithAggregatesFilterFields,
});

export const JsonWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Json}),
  path: t.stringList({"required":false}),
  string_contains: t.string({"required":false}),
  string_starts_with: t.string({"required":false}),
  string_ends_with: t.string({"required":false}),
  array_contains: t.field({"required":false,"type":Json}),
  array_starts_with: t.field({"required":false,"type":Json}),
  array_ends_with: t.field({"required":false,"type":Json}),
  lt: t.field({"required":false,"type":Json}),
  lte: t.field({"required":false,"type":Json}),
  gt: t.field({"required":false,"type":Json}),
  gte: t.field({"required":false,"type":Json}),
  not: t.field({"required":false,"type":Json}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedJsonFilter}),
  _max: t.field({"required":false,"type":NestedJsonFilter}),
});
export const JsonWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.JsonWithAggregatesFilter>>('JsonWithAggregatesFilter').implement({
  fields: JsonWithAggregatesFilterFields,
});

export const BarCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
  photos: t.field({"required":false,"type":SortOrder}),
  coordinates: t.field({"required":false,"type":SortOrder}),
  hours: t.field({"required":false,"type":SortOrder}),
  location: t.field({"required":false,"type":SortOrder}),
  display_phone: t.field({"required":false,"type":SortOrder}),
  categories: t.field({"required":false,"type":SortOrder}),
});
export const BarCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarCountOrderByAggregateInput>>('BarCountOrderByAggregateInput').implement({
  fields: BarCountOrderByAggregateInputFields,
});

export const BarAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
});
export const BarAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarAvgOrderByAggregateInput>>('BarAvgOrderByAggregateInput').implement({
  fields: BarAvgOrderByAggregateInputFields,
});

export const BarMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
  display_phone: t.field({"required":false,"type":SortOrder}),
});
export const BarMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarMaxOrderByAggregateInput>>('BarMaxOrderByAggregateInput').implement({
  fields: BarMaxOrderByAggregateInputFields,
});

export const BarMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
  display_phone: t.field({"required":false,"type":SortOrder}),
});
export const BarMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarMinOrderByAggregateInput>>('BarMinOrderByAggregateInput').implement({
  fields: BarMinOrderByAggregateInputFields,
});

export const BarSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  rating: t.field({"required":false,"type":SortOrder}),
});
export const BarSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarSumOrderByAggregateInput>>('BarSumOrderByAggregateInput').implement({
  fields: BarSumOrderByAggregateInputFields,
});

export const RestaurantCreatephotosInputFields = (t: any) => ({
  set: t.stringList({"required":true}),
});
export const RestaurantCreatephotosInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantCreatephotosInput>>('RestaurantCreatephotosInput').implement({
  fields: RestaurantCreatephotosInputFields,
});

export const RestaurantCreatehoursInputFields = (t: any) => ({
  set: t.field({"required":true,"type":[Json]}),
});
export const RestaurantCreatehoursInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantCreatehoursInput>>('RestaurantCreatehoursInput').implement({
  fields: RestaurantCreatehoursInputFields,
});

export const RestaurantCreatecategoriesInputFields = (t: any) => ({
  set: t.field({"required":true,"type":[Json]}),
});
export const RestaurantCreatecategoriesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantCreatecategoriesInput>>('RestaurantCreatecategoriesInput').implement({
  fields: RestaurantCreatecategoriesInputFields,
});

export const StringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const StringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>>('StringFieldUpdateOperationsInput').implement({
  fields: StringFieldUpdateOperationsInputFields,
});

export const FloatFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.float({"required":false}),
  increment: t.float({"required":false}),
  decrement: t.float({"required":false}),
  multiply: t.float({"required":false}),
  divide: t.float({"required":false}),
});
export const FloatFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatFieldUpdateOperationsInput>>('FloatFieldUpdateOperationsInput').implement({
  fields: FloatFieldUpdateOperationsInputFields,
});

export const RestaurantUpdatephotosInputFields = (t: any) => ({
  set: t.stringList({"required":false}),
  push: t.stringList({"required":false}),
});
export const RestaurantUpdatephotosInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantUpdatephotosInput>>('RestaurantUpdatephotosInput').implement({
  fields: RestaurantUpdatephotosInputFields,
});

export const RestaurantUpdatehoursInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[Json]}),
  push: t.field({"required":false,"type":Json}),
});
export const RestaurantUpdatehoursInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantUpdatehoursInput>>('RestaurantUpdatehoursInput').implement({
  fields: RestaurantUpdatehoursInputFields,
});

export const RestaurantUpdatecategoriesInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[Json]}),
  push: t.field({"required":false,"type":Json}),
});
export const RestaurantUpdatecategoriesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RestaurantUpdatecategoriesInput>>('RestaurantUpdatecategoriesInput').implement({
  fields: RestaurantUpdatecategoriesInputFields,
});

export const IntFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.int({"required":false}),
  increment: t.int({"required":false}),
  decrement: t.int({"required":false}),
  multiply: t.int({"required":false}),
  divide: t.int({"required":false}),
});
export const IntFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFieldUpdateOperationsInput>>('IntFieldUpdateOperationsInput').implement({
  fields: IntFieldUpdateOperationsInputFields,
});

export const BarCreatephotosInputFields = (t: any) => ({
  set: t.stringList({"required":true}),
});
export const BarCreatephotosInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarCreatephotosInput>>('BarCreatephotosInput').implement({
  fields: BarCreatephotosInputFields,
});

export const BarCreatehoursInputFields = (t: any) => ({
  set: t.field({"required":true,"type":[Json]}),
});
export const BarCreatehoursInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarCreatehoursInput>>('BarCreatehoursInput').implement({
  fields: BarCreatehoursInputFields,
});

export const BarCreatecategoriesInputFields = (t: any) => ({
  set: t.field({"required":true,"type":[Json]}),
});
export const BarCreatecategoriesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarCreatecategoriesInput>>('BarCreatecategoriesInput').implement({
  fields: BarCreatecategoriesInputFields,
});

export const BarUpdatephotosInputFields = (t: any) => ({
  set: t.stringList({"required":false}),
  push: t.stringList({"required":false}),
});
export const BarUpdatephotosInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarUpdatephotosInput>>('BarUpdatephotosInput').implement({
  fields: BarUpdatephotosInputFields,
});

export const BarUpdatehoursInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[Json]}),
  push: t.field({"required":false,"type":Json}),
});
export const BarUpdatehoursInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarUpdatehoursInput>>('BarUpdatehoursInput').implement({
  fields: BarUpdatehoursInputFields,
});

export const BarUpdatecategoriesInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[Json]}),
  push: t.field({"required":false,"type":Json}),
});
export const BarUpdatecategoriesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BarUpdatecategoriesInput>>('BarUpdatecategoriesInput').implement({
  fields: BarUpdatecategoriesInputFields,
});

export const NestedIntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>>('NestedIntFilter').implement({
  fields: NestedIntFilterFields,
});

export const NestedStringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringFilter>>('NestedStringFilter').implement({
  fields: NestedStringFilterFields,
});

export const NestedFloatFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatFilter}),
});
export const NestedFloatFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatFilter>>('NestedFloatFilter').implement({
  fields: NestedFloatFilterFields,
});

export const NestedIntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntWithAggregatesFilter>>('NestedIntWithAggregatesFilter').implement({
  fields: NestedIntWithAggregatesFilterFields,
});

export const NestedStringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringWithAggregatesFilter>>('NestedStringWithAggregatesFilter').implement({
  fields: NestedStringWithAggregatesFilterFields,
});

export const NestedFloatWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedFloatFilter}),
  _min: t.field({"required":false,"type":NestedFloatFilter}),
  _max: t.field({"required":false,"type":NestedFloatFilter}),
});
export const NestedFloatWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatWithAggregatesFilter>>('NestedFloatWithAggregatesFilter').implement({
  fields: NestedFloatWithAggregatesFilterFields,
});

export const NestedJsonFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Json}),
  path: t.stringList({"required":false}),
  string_contains: t.string({"required":false}),
  string_starts_with: t.string({"required":false}),
  string_ends_with: t.string({"required":false}),
  array_contains: t.field({"required":false,"type":Json}),
  array_starts_with: t.field({"required":false,"type":Json}),
  array_ends_with: t.field({"required":false,"type":Json}),
  lt: t.field({"required":false,"type":Json}),
  lte: t.field({"required":false,"type":Json}),
  gt: t.field({"required":false,"type":Json}),
  gte: t.field({"required":false,"type":Json}),
  not: t.field({"required":false,"type":Json}),
});
export const NestedJsonFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedJsonFilter>>('NestedJsonFilter').implement({
  fields: NestedJsonFilterFields,
});