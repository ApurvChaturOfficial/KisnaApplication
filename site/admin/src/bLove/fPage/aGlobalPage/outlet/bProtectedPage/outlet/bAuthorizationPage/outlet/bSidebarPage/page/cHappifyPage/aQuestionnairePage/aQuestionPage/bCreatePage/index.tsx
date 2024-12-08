import React from "react"
import { useDispatch, useSelector } from "react-redux";

import questionAPIEndpoint from "@/bLove/aAPI/cHappifyAPI/aQuestionnaireAPI/aQuestionAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import QuestionCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cHappifyComponent/aQuestionnaireComponent/aQuestionComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const QuestionCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: questionAPIEndpoint.useQuestionCreateAPIMutation()[0],
    createAPIResponse: questionAPIEndpoint.useQuestionCreateAPIMutation()[1],
  }
  
  // JSX
  return (
    <React.Fragment>
      <QuestionCreateComponent 
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

export default QuestionCreatePage;
