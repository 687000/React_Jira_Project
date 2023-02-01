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
import { ButtonNoPadding, ErrorBox, ScreenContainer } from "components/lib";
export const ProjectListScreen = () => {
  const { open } = useProjectModal();
  useDocumentTitle("Project List", false);
  const [param, setParam] = useProjectsSearchParams();
  const { isLoading, error, data: list } = useProjects(useDebounce(param, 200));
  const { data: users } = useUsers();
  return (
    <ScreenContainer>
      <Row justify={"space-between"} align={"bottom"}>
        <h1>Project List</h1>
        <ButtonNoPadding onClick={open} type={"link"}>
          Create Project
        </ButtonNoPadding>
      </Row>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      <ErrorBox error={error} />
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </ScreenContainer>
  );
};
ProjectListScreen.whyDidYouRender = false;
