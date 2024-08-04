import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ApprovalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="approval_date" source="approvalDate" />
        <TextInput label="approver" source="approver" />
        <TextInput label="change_request_id" source="changeRequestId" />
      </SimpleForm>
    </Edit>
  );
};
