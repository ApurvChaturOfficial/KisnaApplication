import React from "react"
import { useDispatch, useSelector } from "react-redux";

import tagAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/cProductManagementAPI/cTagAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import TagCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cProductManagementComponent/cTagComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const TagCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: tagAPIEndpoint.useTagCreateAPIMutation()[0],
    createAPIResponse: tagAPIEndpoint.useTagCreateAPIMutation()[1],

  }
  
  // JSX
  return (
    <React.Fragment>
      <TagCreateComponent 
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

export default TagCreatePage;
