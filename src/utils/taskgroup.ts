import { QueryKey, useMutation, useQuery } from "react-query";
import { TaskGroup } from "types/taskgroup";
import { useHttp } from "./http";
import { useAddConfig, useDeleteConfig } from "./use-optimistic-options";

export const useTaskGroups = (param?: Partial<TaskGroup>) => {
  const client = useHttp();
  return useQuery<TaskGroup[]>(["epics", param], () =>
    client("epics", { data: param })
  );
};
export const useAddTaskGroup = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation(
    (params: Partial<TaskGroup>) =>
      client(`epics`, {
        data: params,
        method: "POST",
      }),
    useAddConfig(queryKey)
  );
};
export const useDeleteTaskGroup = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation(
    ({ id }: { id: number }) =>
      client(`epics/${id}`, {
        method: "DELETE",
      }),
    useDeleteConfig(queryKey)
  );
};
