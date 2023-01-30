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
export const DashboardScreen = () => {
  useDocumentTitle("Dashboard Lists");
  const { data: currentProject } = useProjectInUrl();
  const { data: dashboards } = useDashboards(useDashboardSearchParams());
  return (
    <div>
      <h1>{currentProject?.name} Dashboards</h1>
      <ColumnsContainer>
        {dashboards?.map((dashboard) => (
          <DashboardColumn dashboard={dashboard} key={dashboard.id} />
        ))}
      </ColumnsContainer>
    </div>
  );
};

const ColumnsContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-right: 2rem;
`;
