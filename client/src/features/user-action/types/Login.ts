export type LoginInput = {
  [index: string]: string;
  email: string;
  password: string;
};

export type LoginRes = {
  data:
    | {
        login: {
          data: {
            token: string;
          };
        };
      }
    | {
        login: {
          message: string;
        };
      };
};
