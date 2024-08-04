import { InputJsonValue } from "../../types";

export type DocumentUpdateInput = {
  description?: string | null;
  file?: InputJsonValue;
  title?: string | null;
  uploadDate?: Date | null;
};
