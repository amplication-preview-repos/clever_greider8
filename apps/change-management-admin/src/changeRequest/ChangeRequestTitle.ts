import { ChangeRequest as TChangeRequest } from "../api/changeRequest/ChangeRequest";

export const CHANGEREQUEST_TITLE_FIELD = "title";

export const ChangeRequestTitle = (record: TChangeRequest): string => {
  return record.title?.toString() || String(record.id);
};
