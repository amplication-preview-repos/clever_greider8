import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ApprovalList } from "./approval/ApprovalList";
import { ApprovalCreate } from "./approval/ApprovalCreate";
import { ApprovalEdit } from "./approval/ApprovalEdit";
import { ApprovalShow } from "./approval/ApprovalShow";
import { ChangeRequestList } from "./changeRequest/ChangeRequestList";
import { ChangeRequestCreate } from "./changeRequest/ChangeRequestCreate";
import { ChangeRequestEdit } from "./changeRequest/ChangeRequestEdit";
import { ChangeRequestShow } from "./changeRequest/ChangeRequestShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Change Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Approval"
          list={ApprovalList}
          edit={ApprovalEdit}
          create={ApprovalCreate}
          show={ApprovalShow}
        />
        <Resource
          name="ChangeRequest"
          list={ChangeRequestList}
          edit={ChangeRequestEdit}
          create={ChangeRequestCreate}
          show={ChangeRequestShow}
        />
      </Admin>
    </div>
  );
};

export default App;
