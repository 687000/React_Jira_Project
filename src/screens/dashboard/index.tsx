import React from "react";
import { DashboardColumn } from "screens/dashboard/dashboard-column";
import { useDocumentTitle } from "utils";
import { useDashboards } from "utils/dashboard";
import {
  useDashboardSearchParams,
  useProjectIdInUrl,
  useProjectInUrl,
} from "./util";
import styled from "@emotion/styled";
import { SearchPanel } from "./search-panel";
import { ScreenContainer } from "components/lib";
export const DashboardScreen = () => {
  useDocumentTitle("Dashboard Lists");
  const { data: currentProject } = useProjectInUrl();
  const { data: dashboards } = useDashboards(useDashboardSearchParams());
  return (
    <ScreenContainer>
      <h1>{currentProject?.name} Dashboards</h1>
      <SearchPanel />
      <ColumnsContainer>
        {dashboards?.map((dashboard) => (
          <DashboardColumn dashboard={dashboard} key={dashboard.id} />
        ))}
      </ColumnsContainer>
    </ScreenContainer>
  );
};

const ColumnsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  flex: 1;
`;
