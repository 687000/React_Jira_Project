import { Button, List, Row } from "antd";
import { ScreenContainer } from "components/lib";
import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import { useProjectInUrl } from "screens/dashboard/util";
import { useTasks } from "utils/task";
import { useTaskGroups } from "utils/taskgroup";
import { useTaskGroupSearchParams } from "./util";
export const TaskGroupScreen = () => {
  const { data: currentProject } = useProjectInUrl();
  const { data: taskgroups } = useTaskGroups();
  const { data: tasks } = useTasks({ id: currentProject?.id });
  return (
    <ScreenContainer>
      <h1>{currentProject?.name} Task Group</h1>
      <List
        dataSource={taskgroups}
        itemLayout={"vertical"}
        renderItem={(epic) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Row>
                  <span>{epic.name}</span>
                  <Button type={"link"}>Delete</Button>
                </Row>
              }
              description={
                <div>
                  <div>
                    Begin Time: {dayjs(epic.start).format("YYYY-MM-DD")}
                  </div>
                  <div>End Time: {dayjs(epic.start).format("YYYY-MM-DD")}</div>
                </div>
              }
            />
            <div>
              {tasks
                ?.filter((task) => task.epicId === epic.id)
                .map((task) => (
                  <Link
                    key={task.id}
                    to={`/projects/${currentProject?.id}/dashboard?editingTaskId=${task.id}`}
                  >
                    {task.name}
                  </Link>
                ))}
            </div>
          </List.Item>
        )}
      />
    </ScreenContainer>
  );
};
