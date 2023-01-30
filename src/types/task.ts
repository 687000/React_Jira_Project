export interface Task {
  id: number;
  name: string;
  //Processor
  processorId: number;
  projectId: number;
  //Taskgroup
  taskId: number;
  dashboardId: number;
  //Bug or task information
  typeId: number;
  note: string;
}
