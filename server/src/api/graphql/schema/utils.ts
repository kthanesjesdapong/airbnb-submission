import builder from "./builder";

builder.globalConnectionField('totalCount', (t: { int: (arg0: { nullable: boolean; resolve: (parent: any) => any; }) => any; }) =>
  t.int({
    nullable: false,
    resolve: (parent: any) =>
      typeof parent.totalCount === 'function' ? parent.totalCount() : parent.totalCount,
  }));