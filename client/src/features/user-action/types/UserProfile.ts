export type UserProfileRes = {
  data:
    | {
        getUserProfile: {
          data: {
            userName: string;
            firstName: string;
            lastName: string;
          };
        };
      }
    | {
        getUserProfile: {
          message: string;
        };
      };
};
