import { logger } from "@config";
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from "@prisma/client/runtime/library";

export const prismaErrorHandler = (error: unknown, nameOfEntity?: unknown) => {
  if (error instanceof PrismaClientKnownRequestError) {
    logger.error(`KNOWN REQUEST ERROR 
    CODE: ${error.code}:
    ENTITY: ${nameOfEntity},
    MESSAGE:${error.message}`);
  }
  if (error instanceof PrismaClientUnknownRequestError) {
    logger.error('Oops! Something went wrong! \nHelp us improve your experience by sending an error report');
  }
};