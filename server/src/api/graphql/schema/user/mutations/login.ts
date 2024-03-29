import builder from "@api/graphql/schema/builder";
import { Token } from '@graphql/schema/token/constructors/Token';
import { AccessToken } from '@graphql/schema/token/types/Token';
import { comparePassword } from '@api/utils/bcrypt';
import jwt from 'jsonwebtoken';
import { errorMessage } from "@api/utils/pothosErrorHandler";

builder.mutationField('login', (t) => t.field({
  type: AccessToken,
  errors: {},
  args: ({
    email: t.arg.string({
      validate: {
        email: [true, { message: 'Invalid email address' }],
      }
      , required: true
    }),
    password: t.arg.string(
      {
        validate: {
          minLength: [6, { message: 'Password must be at least 6 characters long' }],
        }, required: true
      }),
  }),
  resolve: async (_parent, _args, _context): Promise<Token> => {
    try {
      const user = await _context.prisma.user.findUnique({
        where: {
          email: _args.email,
        }
      });
      if (user === null || undefined) {
        throw new Error('email:Invalid email address');
      }
      else if (!comparePassword(_args.password, user.password)) {
        throw new Error('password:Invalid Password');
      }
      else {
        const { id, role } = user!;
        _context.role = role;
        // const currentDateTime = new Date().toISOString();
        const jwt_secret = process.env.JWT_SECRET;
        const accessToken = jwt.sign({ userId: id }, jwt_secret as string, { expiresIn: '20000m' });
        // console.log({ accessToken });
        return new Token(accessToken);
      }
    } catch (e: unknown) {
      throw new Error(errorMessage(e));
    }
  }
})
);