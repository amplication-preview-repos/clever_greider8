import { Bom as TBom } from "../api/bom/Bom";

export const BOM_TITLE_FIELD = "partId";

export const BomTitle = (record: TBom): string => {
  return record.partId?.toString() || String(record.id);
};
