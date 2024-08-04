import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupplierWhereInput = {
  contactInformation?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
