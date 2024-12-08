import React from "react"
import { useDispatch, useSelector } from "react-redux";

import optionAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/eOptionAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import OptionCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cKisnaComponent/aProductManagementComponent/eOptionComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const OptionCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: optionAPIEndpoint.useOptionCreateAPIMutation()[0],
    createAPIResponse: optionAPIEndpoint.useOptionCreateAPIMutation()[1],

  }
  
  // JSX
  return (
    <React.Fragment>
      <OptionCreateComponent 
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

export default OptionCreatePage;
