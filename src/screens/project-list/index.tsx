import React from "react";
import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import * as qs from "qs";
import { cleanObject, useDebounce, useMount } from "utils";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const debouncedParam = useDebounce(param, 300);
  const [list, setList] = useState([]);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);
  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <Container>
      <h1>Project List</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </Container>
  );
};
const Container = styled.div`
  padding: 3.2rem;
`;
