
import builder from './builder';

export * from './restaurant';
export * from './bar';
export * from './location';
export * from './category';
export * from './price';

builder.queryType({});
// builder.mutationType({});

export const schema = builder.toSchema();
