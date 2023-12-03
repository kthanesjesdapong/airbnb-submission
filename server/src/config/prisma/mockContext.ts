import { PrismaClient } from '@prisma/client';
import { mockDeep } from 'jest-mock-extended';
import { MockContext } from '@types';


export const createMockContext = (): MockContext => {
  return {
    prisma: mockDeep<PrismaClient>(),
  };
};

/*


To use the context, you would do the following in your test file:

import {Context,MockContext} from '@types'
import {createMockContext } from '../context'

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

This will create a new context before each test is run via the createMockContext function. This (mockCtx) context will be used to make a mock call to Prisma and run a query to test. The ctx context will be used to run a scenario query that is tested against.

*/