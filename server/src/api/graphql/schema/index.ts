
import builder from './builder';
import './types';
import './utils';

export * from './restaurant';
export * from './bar';
export * from './location';
export * from './category';
export * from './price';
export * from './user';
export * from './userProfile';
export * from './token';


import './error/types/Error';



builder.queryType({});
builder.mutationType({});

export const schema = builder.toSchema({});
