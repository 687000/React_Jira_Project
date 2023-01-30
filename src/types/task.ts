export interface Task {
  id: number;
  name: string;
  //Processor
  processorId: number;
  projectId: number;
  //Taskgroup
  epicId: number;
  //Dashboard
  kanbanId: number;
  //Bug or task information
  typeId: number;
  note: string;
}
