import { User } from "@prisma/client";
import builder from "@api/schema/builder";
import { prismaErrorHandler } from "@seed/middleware/prismaError";
import { Role } from "@prisma/client";

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
  resolve: async (_query, _parent, _args, _context): Promise<User | undefined> => {
    try {
      const createdUser = await _context.prisma.user.create({
        data: {
          email: _args.email,
          password: _args.password,
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
      console.log(e);
      prismaErrorHandler(e);
    }
  }
}));