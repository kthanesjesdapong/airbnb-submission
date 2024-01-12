export type SignUpInput = {
  [index: string]: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type SignUpRes = {
  data: {
    createUser: {
      id: number;
      role: string;
      email: string;
      createdAt: string;
    };
  } | {
    createUser: {
      message: string;
    }
  };
};