import React from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import ProductVariantDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cKisnaComponent/aProductManagementComponent/dProductVariantComponent/eDeleteComponent";
import productVariantAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/dProductVariantAPIEndpoints";
import data from "./extras/bData";


const ProductVariantDeletePage = () => {
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
    retrieveAPIResponse: productVariantAPIEndpoint.useProductVariantRetrievePIQuery({ params: { _id: id } }),
    deleteAPITrigger: productVariantAPIEndpoint.useProductVariantDeleteAPIMutation()[0],
    deleteAPIResponse: productVariantAPIEndpoint.useProductVariantDeleteAPIMutation()[1],
  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* ProductVariantDeletePage */}
      <ProductVariantDeleteComponent 
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

export default ProductVariantDeletePage
