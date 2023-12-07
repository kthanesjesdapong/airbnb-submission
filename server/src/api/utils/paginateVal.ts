/* eslint-disable @typescript-eslint/no-explicit-any */
type Arg = number | null | undefined;

export const getFirstRecord = async (
  prisma: any,
  model: any,
) => {

  const lowerCasedModel = model.toLowerCase();
  const firstRecord = await prisma[lowerCasedModel].findFirst({
    orderBy: [{
      id: 'asc'
    }]
  });
  return firstRecord;
};

/*
      const firstId = await getFirstRecord(_context.prisma, 'Bar')

*/

export const getSkipVal = (arg: Arg) => {
  console.log({ arg }, 'THIS IS SKIP VAL');
  return arg ? 1 : 0;
};

export const getVal = (arg: Arg, defaultVal?: number) => {
  console.log({ arg, defaultVal }, 'cursorId, firstId');
  return arg ? arg : defaultVal;
};