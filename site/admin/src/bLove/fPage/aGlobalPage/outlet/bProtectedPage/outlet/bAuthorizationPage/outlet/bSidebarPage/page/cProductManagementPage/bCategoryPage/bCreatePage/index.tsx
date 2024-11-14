import React from "react"
import { useDispatch, useSelector } from "react-redux";

import categoryAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/cProductManagementAPI/bCategoryAPIEndpoints";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import apiServerResponseHandler from "./extras/aAPIResponseHandler";

import CategoryCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cProductManagementComponent/bCategoryComponent/bCreateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const CategoryCreatePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    createAPITrigger: categoryAPIEndpoint.useCategoryCreateAPIMutation()[0],
    createAPIResponse: categoryAPIEndpoint.useCategoryCreateAPIMutation()[1],

  }
  
  // JSX
  return (
    <React.Fragment>
      <CategoryCreateComponent 
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

export default CategoryCreatePage;
