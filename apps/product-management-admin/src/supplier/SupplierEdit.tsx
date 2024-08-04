import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SupplierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="contact_information"
          multiline
          source="contactInformation"
        />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
