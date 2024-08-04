export type Task = {
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  name: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
