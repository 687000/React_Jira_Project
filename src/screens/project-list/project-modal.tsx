import React from "react";
import { Button, Drawer } from "antd";
import { useDispatch } from "react-redux";
import {
  projectListActions,
  selectProjectModalOpen,
} from "./project-list.slice";
import { useSelector } from "react-redux";
export const ProjectModal = () => {
  const dispatch = useDispatch();
  const ProjectModalOpen = useSelector(selectProjectModalOpen);
  return (
    <Drawer
      onClose={() => dispatch(projectListActions.closeProjectModal())}
      visible={ProjectModalOpen}
      width={"100%"}
    >
      <h1>Project Modal</h1>
      <Button onClick={() => dispatch(projectListActions.closeProjectModal())}>
        Close
      </Button>
    </Drawer>
  );
};
