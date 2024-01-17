import { useQuery } from "react-query";
import { userprofile } from ".";

export const useUserProfile = (query: string, loginStatus: string) => useQuery(
  {
    queryKey: ['userProfile'],
    queryFn: () => userprofile(query),
    enabled: loginStatus === 'success'
  }
);