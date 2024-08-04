import { SortOrder } from "../../util/SortOrder";

export type BomOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  partId?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
