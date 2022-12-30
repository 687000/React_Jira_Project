import React from "react";
import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import * as qs from "qs";
import { useDebounce, useDocumentTitle } from "utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/users";
import { TranslateErrMsg } from "utils/err-msg-translate";
import { useUrlQueryParam } from "utils/url";
export const ProjectListScreen = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  const debouncedParam = useDebounce(param, 300);
  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const { data: users } = useUsers();
  useDocumentTitle("Project List", false);
  return (
    <Container>
      <h1>Project List</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>
          {TranslateErrMsg(error?.message)}
        </Typography.Text>
      ) : null}
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  );
};
ProjectListScreen.whyDidYouRender = false;
const Container = styled.div`
  padding: 3.2rem;
`;
