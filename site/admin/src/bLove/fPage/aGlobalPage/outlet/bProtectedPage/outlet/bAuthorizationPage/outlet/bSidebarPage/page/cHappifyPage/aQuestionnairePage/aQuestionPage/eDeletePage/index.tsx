import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import questionAPIEndpoint from "@/bLove/aAPI/cHappifyAPI/aQuestionnaireAPI/aQuestionAPIEndpoints";
import QuestionDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cHappifyComponent/aQuestionnaireComponent/aQuestionComponent/eDeleteComponent";
import data from "./extras/bData";


const QuestionDeletePage = () => {
  // Variables
  const { id } = useParams();

  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    retrieveAPIResponse: questionAPIEndpoint.useQuestionRetrievePIQuery({ params: { _id: id } }),
    deleteAPITrigger: questionAPIEndpoint.useQuestionDeleteAPIMutation()[0],
    deleteAPIResponse: questionAPIEndpoint.useQuestionDeleteAPIMutation()[1],
  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* QuestionDeletePage */}
      <QuestionDeleteComponent 
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse,
          deleteAPITrigger: APICall.deleteAPITrigger,
          deleteAPIResponse: APICall.deleteAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            deleteAPIResponseHandler: apiResponseHandler.deleteAPIResponseHandler
          },
          data: data(APICall),
        }}   
        params={{id: id}}                            
      />
    </React.Fragment>
  )
}

export default QuestionDeletePage
