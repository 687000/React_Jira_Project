import React from "react";
import { DashboardColumn } from "screens/dashboard/dashboard-column";
import { useDocumentTitle } from "utils";
import { useDashboards } from "utils/dashboard";
import {
  useDashboardSearchParams,
  useProjectIdInUrl,
  useProjectInUrl,
  useTasksSearchParams,
} from "./util";
import styled from "@emotion/styled";
import { SearchPanel } from "./search-panel";
import { ScreenContainer } from "components/lib";
import { useTasks } from "utils/task";
import { Spin } from "antd";
export const DashboardScreen = () => {
  useDocumentTitle("Dashboard Lists");
  const { data: currentProject } = useProjectInUrl();
  const { data: dashboards, isLoading: dashboardIsLoading } = useDashboards(
    useDashboardSearchParams()
  );
  const { isLoading: taskIsLoading } = useTasks(useTasksSearchParams());
  const isLoading = dashboardIsLoading || taskIsLoading;
  return (
    <ScreenContainer>
      <h1>{currentProject?.name} Dashboards</h1>
      <SearchPanel />
      {isLoading ? (
        <Spin size={"large"} />
      ) : (
        <ColumnsContainer>
          {dashboards?.map((dashboard) => (
            <DashboardColumn dashboard={dashboard} key={dashboard.id} />
          ))}
        </ColumnsContainer>
      )}
    </ScreenContainer>
  );
};

const ColumnsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  flex: 1;
`;
