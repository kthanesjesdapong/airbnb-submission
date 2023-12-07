import builder from "@api/schema/builder";

const ErrorInterface = builder.interfaceRef<Error>('Error').implement({
  fields: (t) => ({
    message: t.exposeString('message')
  })
});


builder.objectType(Error, {
  name: 'Error',
  interfaces: [ErrorInterface]
});