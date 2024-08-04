import { InputJsonValue } from "../../types";

export type DocumentCreateInput = {
  description?: string | null;
  file?: InputJsonValue;
  title?: string | null;
  uploadDate?: Date | null;
};
