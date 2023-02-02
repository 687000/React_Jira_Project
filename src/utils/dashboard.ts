import { QueryKey, useMutation, useQuery } from "react-query";
import { Dashboard } from "types/dashboard";
import { useHttp } from "./http";
import { useAddConfig } from "./use-optimistic-options";

export const useDashboards = (param?: Partial<Dashboard>) => {
  const client = useHttp();
  return useQuery<Dashboard[]>(["kanbans", param], () =>
    client("kanbans", { data: param })
  );
};
export const useAddDashboard = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation(
    (params: Partial<Dashboard>) =>
      client(`kanbans`, {
        data: params,
        method: "POST",
      }),
    useAddConfig(queryKey)
  );
};
