import React from "react";
import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import * as qs from "qs";
import { useDebounce, useDocumentTitle } from "utils";
import styled from "@emotion/styled";
import { Button, Row, Typography } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/users";
import { TranslateErrMsg } from "utils/err-msg-translate";
import { useUrlQueryParam } from "utils/url";
import { useProjectModal, useProjectsSearchParams } from "./util";
import { ButtonNoPadding } from "components/lib";
export const ProjectListScreen = () => {
  const { open } = useProjectModal();
  useDocumentTitle("Project List", false);
  const [param, setParam] = useProjectsSearchParams();
  const {
    isLoading,
    error,
    data: list,
    retry,
  } = useProjects(useDebounce(param, 200));
  const { data: users } = useUsers();
  return (
    <Container>
      <Row justify={"space-between"} align={"bottom"}>
        <h1>Project List</h1>
        <ButtonNoPadding onClick={open} type={"link"}>
          Create Project
        </ButtonNoPadding>
      </Row>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>
          {TranslateErrMsg(error?.message)}
        </Typography.Text>
      ) : null}
      <List
        refresh={retry}
        loading={isLoading}
        dataSource={list || []}
        users={users || []}
      />
    </Container>
  );
};
ProjectListScreen.whyDidYouRender = false;
const Container = styled.div`
  padding: 3.2rem;
`;
