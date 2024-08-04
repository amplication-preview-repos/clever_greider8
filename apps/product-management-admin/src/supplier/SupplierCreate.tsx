import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="contact_information"
          multiline
          source="contactInformation"
        />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
