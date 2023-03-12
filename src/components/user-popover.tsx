import { Button, Divider, List, Popover, Typography } from "antd";
import styled from "@emotion/styled";
import { ButtonNoPadding } from "./lib";
import { useUsers } from "utils/users";
export const UserPopover = () => {
  const { data: users, refetch } = useUsers();
  const content = (
    <ContentContainer>
      <Typography.Text type={"secondary"}>Users List</Typography.Text>
      <List>
        {users?.map((user) => (
          <List.Item style={{ padding: 0 }}>
            <List.Item.Meta title={user.name} />
          </List.Item>
        ))}
      </List>
      <Divider />
    </ContentContainer>
  );
  return (
    <Popover
      onVisibleChange={() => refetch()}
      placement={"bottom"}
      content={content}
    >
      <span>Users</span>
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;
