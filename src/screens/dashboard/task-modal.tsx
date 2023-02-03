import styled from "@emotion/styled";
import { Button, Form, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { TaskTypeSelect } from "components/task-type-select";
import { UserSelect } from "components/user-select";
import { useEffect } from "react";
import { useDeleteTask, useEditTask } from "utils/task";
import { useTaskQueryKey, useTasksModal } from "./util";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
export const TaskModal = () => {
  const [form] = useForm();
  const { editingTaskId, editingTask, close } = useTasksModal();
  const { mutateAsync: editTask, isLoading: editLoading } = useEditTask(
    useTaskQueryKey()
  );
  const { mutate: deleteTask } = useDeleteTask(useTaskQueryKey());
  const startDelete = () => {
    close();
    Modal.confirm({
      okText: "Confirm",
      cancelText: "Cancel",
      title: "Are you sure you want to delete this task?",
      onOk() {
        return deleteTask({ id: Number(editingTaskId) });
      },
    });
  };
  const onCancel = () => {
    close();
    form.resetFields();
  };
  const onOk = async () => {
    await editTask({ ...editingTask, ...form.getFieldsValue() });
    close();
  };
  useEffect(() => {
    form.setFieldsValue(editingTask);
  }, [form, editingTask]);
  return (
    <Modal
      forceRender={true}
      onCancel={onCancel}
      onOk={onOk}
      okText={"Confirm"}
      cancelText={"Cancel"}
      confirmLoading={editLoading}
      title={"Edit Task"}
      visible={!!editingTaskId}
    >
      <Form {...layout} initialValues={editingTask} form={form}>
        <Form.Item
          label={"Task Name"}
          name={"name"}
          rules={[{ required: true, message: "Please input task name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={"Processor"} name={"processorId"}>
          <UserSelect defaultOptionName={"Processor"} />
        </Form.Item>
        <Form.Item label={"Task Type"} name={"typeId"}>
          <TaskTypeSelect />
        </Form.Item>
      </Form>
      <div style={{ textAlign: "right" }}>
        <Button
          onClick={startDelete}
          style={{ fontSize: "14px" }}
          size={"small"}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};
