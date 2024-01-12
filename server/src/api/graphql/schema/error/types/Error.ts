import builder from "@graphql/schema/builder";
import { EmailError } from "../constructors";

const ErrorInterface = builder.interfaceRef<Error>('Error').implement({
  fields: (t) => ({
    message: t.exposeString('message')
  })
});

export const BaseError = builder.objectType(Error, {
  name: 'BaseError',
  interfaces: [ErrorInterface]
});

builder.objectType(EmailError, {
  name: 'EmailError',
  interfaces: [ErrorInterface],
  fields: (t) => ({
    mustIncludeCharacters: t.exposeString('mustIncludeCharacters')
  })
});




export default Error;