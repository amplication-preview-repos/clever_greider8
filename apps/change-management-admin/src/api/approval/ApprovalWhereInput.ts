import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ApprovalWhereInput = {
  approvalDate?: DateTimeNullableFilter;
  approver?: StringNullableFilter;
  changeRequestId?: StringNullableFilter;
  id?: StringFilter;
};
