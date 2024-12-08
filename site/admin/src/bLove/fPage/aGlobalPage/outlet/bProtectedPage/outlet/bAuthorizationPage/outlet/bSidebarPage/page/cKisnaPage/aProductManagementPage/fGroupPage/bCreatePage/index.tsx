import React from "react"
import { useDispatch, useSelector } from "react-redux";

import groupAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/fGroupAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import GroupCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cKisnaComponent/aProductManagementComponent/fGroupComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const GroupCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: groupAPIEndpoint.useGroupCreateAPIMutation()[0],
    createAPIResponse: groupAPIEndpoint.useGroupCreateAPIMutation()[1],

  }
  
  // JSX
  return (
    <React.Fragment>
      <GroupCreateComponent 
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
          }
        }}        
      />
    </React.Fragment>
  )
}

export default GroupCreatePage;
