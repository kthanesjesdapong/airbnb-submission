export type SignUpInput = {
  [index: string]: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userName: string;
};

export type SignUpRes = {
  data:
    | {
        createUser: {
          id: number;
          role: string;
          email: string;
          userName: string;
          createdAt: string;
        };
      }
    | {
        createUser: {
          message: string;
        };
      };
};
