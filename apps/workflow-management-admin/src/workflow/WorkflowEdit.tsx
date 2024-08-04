import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const WorkflowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="end_date" source="endDate" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="start_date" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
