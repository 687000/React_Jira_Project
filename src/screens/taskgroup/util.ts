import { useProjectIdInUrl } from "screens/dashboard/util";

export const useTaskGroupSearchParams = () => ({
  projectId: useProjectIdInUrl(),
});
export const useTaskGroupQueryKey = () => ["epics", useTaskGroupSearchParams()];
