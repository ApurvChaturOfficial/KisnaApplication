import React from "react"
import { useDispatch, useSelector } from "react-redux";

import productAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/aProductAPIEndpoints";
import categoryAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/bCategoryAPIEndpoints";
import tagAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/cTagAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import ProductCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cKisnaComponent/aProductManagementComponent/aProductComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";
import productVariantAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/dProductVariantAPIEndpoints";
import optionAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/eOptionAPIEndpoints";
import groupAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/fGroupAPIEndpoints";


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
    
    optionCreateAPITrigger: optionAPIEndpoint.useOptionCreateAPIMutation()[0],
    optionCreateAPIResponse: optionAPIEndpoint.useOptionCreateAPIMutation()[1],
    
    productVariantCreateAPITrigger: productVariantAPIEndpoint.useProductVariantCreateAPIMutation()[0],
    productVariantCreateAPIResponse: productVariantAPIEndpoint.useProductVariantCreateAPIMutation()[1],
    
    groupCreateAPITrigger: groupAPIEndpoint.useGroupCreateAPIMutation()[0],
    groupCreateAPIResponse: groupAPIEndpoint.useGroupCreateAPIMutation()[1],

  }
  
  // JSX
  return (
    <React.Fragment>
      <ProductCreateComponent 
        ReduxCall={ReduxCall}
        APICall={{
          createAPITrigger: APICall.createAPITrigger,
          createAPIResponse: APICall.createAPIResponse,

          optionCreateAPITrigger: APICall.optionCreateAPITrigger,
          optionCreateAPIResponse: APICall.optionCreateAPIResponse,

          productVariantCreateAPITrigger: APICall.productVariantCreateAPITrigger,
          productVariantCreateAPIResponse: APICall.productVariantCreateAPIResponse,

          groupCreateAPITrigger: APICall.groupCreateAPITrigger,
          groupCreateAPIResponse: APICall.groupCreateAPIResponse,
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
            cOption: "",
            cProductVariant: [],
            cGroup: "",

            dOption: [{ name: "", values: [""] }],
            dGeneratedVariant: [],
            dGroup: {}
          }
        }}        
      />
    </React.Fragment>
  )
}

export default ProductCreatePage;
