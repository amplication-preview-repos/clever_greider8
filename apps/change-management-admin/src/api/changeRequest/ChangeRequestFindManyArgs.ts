import { ChangeRequestWhereInput } from "./ChangeRequestWhereInput";
import { ChangeRequestOrderByInput } from "./ChangeRequestOrderByInput";

export type ChangeRequestFindManyArgs = {
  where?: ChangeRequestWhereInput;
  orderBy?: Array<ChangeRequestOrderByInput>;
  skip?: number;
  take?: number;
};
