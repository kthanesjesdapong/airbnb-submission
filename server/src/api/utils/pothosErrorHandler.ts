export const errorMessage = (e: unknown) => {
  return ((e as Error).message);
};