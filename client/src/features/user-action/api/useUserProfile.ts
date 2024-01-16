import { useQuery } from "react-query";
import { userprofile } from ".";

export const useUserProfile = (query: string, jwtToken?: string) => useQuery(
  {
    queryKey: ['userProfile', jwtToken],
    queryFn: () => userprofile(query),
    enabled: !!jwtToken
  }
);