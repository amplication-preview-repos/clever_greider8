import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="end_date" source="endDate" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="start_date" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
