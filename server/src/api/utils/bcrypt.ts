import bcrypt from 'bcryptjs';
const { genSaltSync, hashSync, compareSync } = bcrypt;

export const hashPW = (saltRounds: number, pwString: string): string => {
  const rounds = genSaltSync(saltRounds);
  return hashSync(pwString, rounds);
};

export const comparePassword = (pwString: string, hashedPw: string): boolean => {
  return compareSync(pwString, hashedPw);
};