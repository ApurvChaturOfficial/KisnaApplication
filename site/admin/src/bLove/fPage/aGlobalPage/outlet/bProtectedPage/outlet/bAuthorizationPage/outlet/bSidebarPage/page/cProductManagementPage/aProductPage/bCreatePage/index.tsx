import React from "react"
import { useDispatch, useSelector } from "react-redux";

import productAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/cProductManagementAPI/aProductAPIEndpoints";
import categoryAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/cProductManagementAPI/bCategoryAPIEndpoints";
import tagAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/cProductManagementAPI/cTagAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import ProductCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cProductManagementComponent/aProductComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const ProductCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: productAPIEndpoint.useProductCreateAPIMutation()[0],
    createAPIResponse: productAPIEndpoint.useProductCreateAPIMutation()[1],

    // Relationship... Muaaah...
    categoryListAPIResponse: categoryAPIEndpoint.useCategoryListAPIQuery(null),
    tagListAPIResponse: tagAPIEndpoint.useTagListAPIQuery(null),

  }
  
  // JSX
  return (
    <React.Fragment>
      <ProductCreateComponent 
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
      
            cCategory: "",
            cTag: [],
          }
        }}        
      />
    </React.Fragment>
  )
}

export default ProductCreatePage;
