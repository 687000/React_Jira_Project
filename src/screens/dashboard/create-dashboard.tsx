import { Input } from "antd";
import { useState } from "react";
import { useAddDashboard } from "utils/dashboard";
import { ColumnsContainer } from ".";
import { Container } from "./dashboard-column";
import { useDashboardQueryKey, useProjectIdInUrl } from "./util";
export const CreateDashboard = () => {
  const [name, setName] = useState("");
  const projectId = useProjectIdInUrl();
  const { mutateAsync: addDashboard } = useAddDashboard(useDashboardQueryKey());
  const submit = async () => {
    await addDashboard({ name, projectId });
    setName("");
  };
  return (
    <Container>
      <Input
        size={"large"}
        placeholder={"New Dashboard Name"}
        onPressEnter={submit}
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
    </Container>
  );
};
