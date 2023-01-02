/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Input, Select, Form } from "antd";
import { Project } from "./list";
import { UserSelect } from "components/user-select";
export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  orgnaization: string;
  token: string;
}
interface SearchPanelProps {
  users: User[];
  //make sure same type as name/personId in Project
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}
export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <Form css={{ marginBottom: "2rem", ">*": "" }} layout={"inline"}>
      <Form.Item>
        <Input
          placeholder="Project Name"
          type="text"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          defaultOptionName={"Responser"}
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        />
      </Form.Item>
    </Form>
  );
};
