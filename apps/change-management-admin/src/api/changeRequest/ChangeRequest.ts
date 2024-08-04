export type ChangeRequest = {
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
