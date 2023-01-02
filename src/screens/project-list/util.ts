import { useMemo } from "react";
import { useUrlQueryParam } from "utils/url";

export const UseProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  //replace param's personId from string to number
  //return the transited param
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setParam,
  ] as const;
};
