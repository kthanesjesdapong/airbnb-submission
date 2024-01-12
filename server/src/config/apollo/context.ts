import { prisma } from "@config/prisma/client";
import { Context } from "@types";
import { Role, PrismaClient } from "@prisma/client";

import config from 'config';
import { prismaErrorHandler } from "@seed/middleware/prismaError";
import jwt from 'jsonwebtoken';
const jwt_secret = config.get<string>('jwt_secret');

const fetchUserByToken = async (token: string) => {
  try {
    const decodedToken = jwt.verify(token, jwt_secret) as { userId: string; };
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(decodedToken.userId)
      }
    });
    return user;
  } catch (e: unknown) {
    prismaErrorHandler(e);
  }
};


const apolloServerContext = async (prisma: PrismaClient, authorizationToken?: string, role?: Role): Promise<Context> => {
  let user = null;

  if (authorizationToken) {
    try {
      user = await fetchUserByToken(authorizationToken);
      user ? role = user.role : role = 'USER';
    } catch (e: unknown) {
      console.error('Error fetching user:', e);
    }
  }
  return { prisma, user, role: role ?? 'USER' };
};

export default apolloServerContext;