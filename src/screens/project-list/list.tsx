import React from "react";
import { User } from "screens/project-list/search-panel";
import { Table, TableProps } from "antd";
const dayjs = require("dayjs");
export interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}
//no need to inlude list, since tableprops will also handle datasource
interface ListProps extends TableProps<Project> {
  users: User[];
}
export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "Project Name",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "Department",
          dataIndex: "organization",
        },
        {
          title: "Responser",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "Unknow"}
              </span>
            );
          },
        },
        {
          title: "Created Time",
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "Unknown"}
              </span>
            );
          },
        },
      ]}
      {...props}
    />
  );
};
