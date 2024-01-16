import { User } from "@prisma/client";
import builder from "@api/graphql/schema/builder";
import { Role } from "@prisma/client";
import { hashPW } from "@api/utils/bcrypt";
import 'dotenv';
import config from 'config';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const salt_rounds = config.get<string>('salt_rounds');

builder.mutationField('createUser', (t) => t.prismaField({
  type: 'User',
  errors: {},
  args: {
    email: t.arg.string({
      validate: {
        email: [true, { message: 'Invalid email address' }],
      },
      required: true
    }),
    password: t.arg.string({
      validate: {
        minLength: [6, { message: 'Password must be at least 6 characters long' }],
      },
      required: true
    }),
    userName: t.arg.string({
      validate: {
        minLength: [4, { message: 'Username must be at least 4 characters long' }],
      },
      required: true
    }),
    role: t.arg({
      type: Role,
      required: false
    }),
    firstName: t.arg.string({ required: true }),
    lastName: t.arg.string({ required: true })
  },
  resolve: async (_query, _parent, _args, _context): Promise<User> => {
    try {
      const createdUser = await _context.prisma.user.create({
        data: {
          email: _args.email,
          password: hashPW(parseInt(salt_rounds), _args.password),
          userProfile: {
            create: {
              userName: _args.userName,
              firstName: _args.firstName,
              lastName: _args.lastName,
            }
          },
          role: _args.role ?? Role.USER
        }
      });
      if (createdUser === null) {
        throw new Error('This email has already been used to register an account');
      }
      else {
        return createdUser;
      }
    } catch (e: unknown) {
      if (e instanceof PrismaClientKnownRequestError && e.code === 'P2002' && e.meta && (e.meta.target as Array<string>).length > 0 && (e.meta.target as Array<string>)[0] === 'email') {
        throw new Error(`email:An account already exists with that email`);
      }
      if (e instanceof PrismaClientKnownRequestError && e.code === 'P2002' && e.meta && (e.meta.target as Array<string>).length > 0 && (e.meta.target as Array<string>)[0] === 'userName') {
        throw new Error(`userName:Username not available`);
      }
      console.log(e);
      throw e;
    }
  }
}));