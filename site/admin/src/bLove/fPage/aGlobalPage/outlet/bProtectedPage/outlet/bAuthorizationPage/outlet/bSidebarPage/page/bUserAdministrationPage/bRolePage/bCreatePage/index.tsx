import React from "react"
import { useDispatch, useSelector } from "react-redux";

import roleAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bUserAdministration/bRoleAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import RoleCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/bRoleComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";
import menuAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bUserAdministration/cMenuAPIEndpoints";


const RoleCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: roleAPIEndpoint.useRoleCreateAPIMutation()[0],
    createAPIResponse: roleAPIEndpoint.useRoleCreateAPIMutation()[1],

    // Relationship... Muaaah...
    menuListAPIResponse: menuAPIEndpoint.useMenuListAPIQuery(null),

  }
  
  // JSX
  return (
    <React.Fragment>
      <RoleCreateComponent 
        ReduxCall={ReduxCall}
        APICall={{
          createAPITrigger: APICall.createAPITrigger,
          createAPIResponse: APICall.createAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            createAPIResponseHandler: apiServerResponseHandler.createAPIResponseHandler
          },
          data: data(APICall),
          formSchema: formSchema,
          formDefaultValue: {
            aTitle: "",
            aSubtitle: "",
            aDescription: "",
            aDetail: "",
            aStatus: "",
            aSlug: "",

            cMenu: [],
          }
        }}        
      />
    </React.Fragment>
  )
}

export default RoleCreatePage;
