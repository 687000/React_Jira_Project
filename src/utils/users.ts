import { User } from "types/user";
import { useEffect } from "react";
import { useHttp } from "./http";
import { useAsync } from "./use-async";
import { cleanObject } from "utils";
export const useUsers = (param?: Partial<User>) => {
  const { run, ...result } = useAsync<User[]>();
  const client = useHttp();
  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
  }, [param]);
  return result;
};
