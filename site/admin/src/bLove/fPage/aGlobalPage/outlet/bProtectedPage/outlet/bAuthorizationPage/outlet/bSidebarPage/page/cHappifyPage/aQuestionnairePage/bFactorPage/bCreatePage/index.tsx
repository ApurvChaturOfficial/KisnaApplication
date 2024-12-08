import React from "react"
import { useDispatch, useSelector } from "react-redux";

import factorAPIEndpoint from "@/bLove/aAPI/cHappifyAPI/aQuestionnaireAPI/bFactorAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import FactorCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cHappifyComponent/aQuestionnaireComponent/bFactorComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const FactorCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: factorAPIEndpoint.useFactorCreateAPIMutation()[0],
    createAPIResponse: factorAPIEndpoint.useFactorCreateAPIMutation()[1],
  }
  
  // JSX
  return (
    <React.Fragment>
      <FactorCreateComponent 
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

export default FactorCreatePage;
