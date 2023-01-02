import React from "react";
import { IdSelect } from "context/id-select";
import { useUsers } from "utils/users";
export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: users } = useUsers();
  return <IdSelect options={users || []} {...props}></IdSelect>;
};
