
import builder from './builder';

export * from './restaurant';
export * from './bar';
export * from './location';
export * from './category';


builder.queryType({});
// builder.mutationType({});

export const schema = builder.toSchema();
