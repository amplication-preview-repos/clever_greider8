import { SortOrder } from "../../util/SortOrder";

export type PartOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  partNumber?: SortOrder;
  updatedAt?: SortOrder;
};
