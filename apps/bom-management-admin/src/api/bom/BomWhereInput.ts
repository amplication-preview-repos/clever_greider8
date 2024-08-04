import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BomWhereInput = {
  id?: StringFilter;
  partId?: StringNullableFilter;
  productId?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
