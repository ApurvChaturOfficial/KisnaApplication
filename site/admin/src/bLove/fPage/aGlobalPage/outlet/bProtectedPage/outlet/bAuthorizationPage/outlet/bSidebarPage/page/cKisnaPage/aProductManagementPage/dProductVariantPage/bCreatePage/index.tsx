import React from "react"
import { useDispatch, useSelector } from "react-redux";

import productVariantAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/dProductVariantAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import ProductVariantCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cKisnaComponent/aProductManagementComponent/dProductVariantComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const ProductVariantCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: productVariantAPIEndpoint.useProductVariantCreateAPIMutation()[0],
    createAPIResponse: productVariantAPIEndpoint.useProductVariantCreateAPIMutation()[1],

  }
  
  // JSX
  return (
    <React.Fragment>
      <ProductVariantCreateComponent 
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

export default ProductVariantCreatePage;
