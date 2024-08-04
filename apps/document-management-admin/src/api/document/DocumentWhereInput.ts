import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DocumentWhereInput = {
  description?: StringNullableFilter;
  file?: JsonFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  uploadDate?: DateTimeNullableFilter;
};
