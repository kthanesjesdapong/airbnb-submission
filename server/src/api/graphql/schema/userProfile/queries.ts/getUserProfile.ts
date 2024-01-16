import builder from '@graphql/schema/builder';
import { UserProfile } from '@prisma/client';
import { errorMessage } from '@api/utils/pothosErrorHandler';

builder.queryField('getUserProfile', (t) => t.withAuth({
  loggedIn: true
}).prismaField({
  type: 'UserProfile',
  errors: {
  },
  resolve: async (_query, _parent, _args, _context): Promise<UserProfile> => {
    try {
      if (_context && !_context.user) {
        throw new Error('No User Id Provided');
      }
      const userProfile = await _context.prisma.userProfile.findUniqueOrThrow({
        ..._query,
        where: { id: _context.user?.id }
      });
      return userProfile;
    } catch (e: unknown) {
      errorMessage(e);
      throw e;
    }
  }
}));