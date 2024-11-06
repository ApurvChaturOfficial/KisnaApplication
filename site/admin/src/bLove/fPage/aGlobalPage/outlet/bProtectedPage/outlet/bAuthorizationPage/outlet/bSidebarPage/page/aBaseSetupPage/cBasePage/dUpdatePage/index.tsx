import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import baseAPIEndpoint from "@/bLove/aAPI/cBaseAPIEndpoints";
import baseOneToOneAPIEndpoint from "@/bLove/aAPI/dBaseOneToOneAPIEndpoints";
import baseOneToManyAPIEndpoint from "@/bLove/aAPI/eBaseOneToManyAPIEndpoints";
import baseManyToOneAPIEndpoint from "@/bLove/aAPI/aBaseManyToOneAPIEndpoints";
import baseManyToManyAPIEndpoint from "@/bLove/aAPI/bBaseManyToManyAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import BaseUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/eSettingComponent/dBaseComponent/dUpdateComponent";


const BaseUpdatePage = () => {
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
    retrieveAPIResponse: baseAPIEndpoint.useBaseRetrievePIQuery({ params: { _id: id } }),
    updateAPITrigger: baseAPIEndpoint.useBaseUpdateAPIMutation()[0],
    updateAPIResponse: baseAPIEndpoint.useBaseUpdateAPIMutation()[1],

    // Relationship... Muaaah...
    baseOneToOneListAPIResponse: baseOneToOneAPIEndpoint.useBaseOneToOneListAPIQuery(null),
    baseOneToManyListAPIResponse: baseOneToManyAPIEndpoint.useBaseOneToManyListAPIQuery(null),
    baseManyToOneListAPIResponse: baseManyToOneAPIEndpoint.useBaseManyToOneListAPIQuery(null),
    baseManyToManyListAPIResponse: baseManyToManyAPIEndpoint.useBaseManyToManyListAPIQuery(null),

  }  
  
  // JSX
  return (
    <React.Fragment>
      <BaseUpdateComponent 
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse,
          updateAPITrigger: APICall.updateAPITrigger,
          updateAPIResponse: APICall.updateAPIResponse,
          baseOneToOneListAPIResponse: APICall.baseOneToOneListAPIResponse,
          baseOneToManyListAPIResponse: APICall.baseOneToManyListAPIResponse,
          baseManyToOneListAPIResponse: APICall.baseManyToOneListAPIResponse,
          baseManyToManyListAPIResponse: APICall.baseManyToManyListAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            updateAPIResponseHandler: apiResponseHandler.updateAPIResponseHandler
          },
        }}                
      />
    </React.Fragment>
  )
}

export default BaseUpdatePage;
