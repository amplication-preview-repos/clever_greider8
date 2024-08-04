import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskWhereInput = {
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Option1";
};
