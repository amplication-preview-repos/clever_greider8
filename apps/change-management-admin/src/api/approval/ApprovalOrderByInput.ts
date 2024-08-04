import { SortOrder } from "../../util/SortOrder";

export type ApprovalOrderByInput = {
  approvalDate?: SortOrder;
  approver?: SortOrder;
  changeRequestId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
