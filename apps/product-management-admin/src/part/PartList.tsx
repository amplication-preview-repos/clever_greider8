import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PartList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Parts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="part_number" source="partNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
