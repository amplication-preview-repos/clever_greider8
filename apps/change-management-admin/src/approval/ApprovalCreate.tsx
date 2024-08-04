import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ApprovalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="approval_date" source="approvalDate" />
        <TextInput label="approver" source="approver" />
        <TextInput label="change_request_id" source="changeRequestId" />
      </SimpleForm>
    </Create>
  );
};
