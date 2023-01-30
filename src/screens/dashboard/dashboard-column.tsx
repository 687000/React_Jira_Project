import React from "react";
import { Dashboard } from "types/dashboard";
import { useTasks } from "utils/task";
import {
  useProjectIdInUrl,
  useTaskQueryKey,
  useTaskSearchParams,
} from "./util";
export const DashboardColumn = ({ dashboard }: { dashboard: Dashboard }) => {
  const { data: allTasks } = useTasks(useTaskSearchParams());
  const tasks = allTasks?.filter((task) => task.kanbanId === dashboard.id);
  return (
    <div>
      <h3>{dashboard.name}</h3>
      {tasks?.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
};
