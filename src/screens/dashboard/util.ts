import { useLocation } from "react-router";
import { useDashboards } from "utils/dashboard";
import { useProject } from "utils/project";
import { useTasks } from "utils/task";

export const useProjectIdInUrl = () => {
  const { pathname } = useLocation();
  const id = pathname.match(/projects\/(\d+)/)?.[1];
  return Number(id);
};
export const useProjectInUrl = () => useProject(useProjectIdInUrl());

export const useDashboardSearchParams = () => ({
  projectId: useProjectIdInUrl(),
});
export const useDashboardQueryKey = () => [
  "kanbans",
  useDashboardSearchParams(),
];
export const useTaskSearchParams = () => ({ projectId: useProjectIdInUrl() });
export const useTaskQueryKey = () => ["tasks", useTaskSearchParams()];
