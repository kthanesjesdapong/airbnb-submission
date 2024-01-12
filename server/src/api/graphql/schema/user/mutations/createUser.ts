import { User } from "@prisma/client";
import builder from "@api/graphql/schema/builder";
import { Role } from "@prisma/client";
import { hashPW } from "@api/utils/bcrypt";
import { errorMessage } from "@api/utils/pothosErrorHandler";
import 'dotenv';
import config from 'config';

const salt_rounds = config.get<string>('salt_rounds');



builder.mutationField('createUser', (t) => t.prismaField({
  type: 'User',
  args: {
    email: t.arg.string({ required: true }),
    password: t.arg.string({ required: true }),
    role: t.arg({
      type: Role,
      required: false
    }),
    firstName: t.arg.string({ required: true }),
    lastName: t.arg.string({ required: true })
  },
  resolve: async (_query, _parent, _args, _context): Promise<User> => {
    try {
      console.log({ salt_rounds });
      const createdUser = await _context.prisma.user.create({
        data: {
          email: _args.email,
          password: hashPW(parseInt(salt_rounds), _args.password),
          userProfile: {
            create: {
              firstName: _args.firstName,
              lastName: _args.lastName
            }
          },
          role: _args.role ?? Role.USER
        }
      });
      return createdUser;
    } catch (e: unknown) {
      errorMessage(e);
      throw e;
    }
  }
}));