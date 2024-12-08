import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import productAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/aProductAPIEndpoints";
import categoryAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/bCategoryAPIEndpoints";
import tagAPIEndpoint from "@/bLove/aAPI/cKisnaAPI/aProductManagementAPI/cTagAPIEndpoints";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import { RootState } from "@/aConnection/dReduxConnection";
import apiResponseHandler from "./extras/aAPIResponseHandler";

import ProductUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cKisnaComponent/aProductManagementComponent/aProductComponent/dUpdateComponent";
import data from "./extras/bData";
import { formSchema } from "./extras/cType";


const ProductUpdatePage = () => {
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
    retrieveAPIResponse: productAPIEndpoint.useProductRetrievePIQuery({ params: { _id: id } }),
    updateAPITrigger: productAPIEndpoint.useProductUpdateAPIMutation()[0],
    updateAPIResponse: productAPIEndpoint.useProductUpdateAPIMutation()[1],

    // Relationship... Muaaah...
    categoryListAPIResponse: categoryAPIEndpoint.useCategoryListAPIQuery(null),
    tagListAPIResponse: tagAPIEndpoint.useTagListAPIQuery(null),

  }  
  
  // JSX
  return (
    <React.Fragment>
      {/* ProductUpdatePage */}
      <ProductUpdateComponent 
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse,
          updateAPITrigger: APICall.updateAPITrigger,
          updateAPIResponse: APICall.updateAPIResponse,
        }}
        extras={{
          apiResponseHandler: {
            updateAPIResponseHandler: apiResponseHandler.updateAPIResponseHandler
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
          },
          previousValue: (form: any) => (
            form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),
            form.setValue("aSubtitle", APICall.retrieveAPIResponse.data.retrieve?.aSubtitle),
            form.setValue("aDescription", APICall.retrieveAPIResponse.data.retrieve?.aDescription),
            form.setValue("aDetail", APICall.retrieveAPIResponse.data.retrieve?.aDetail),
            form.setValue("aStatus", APICall.retrieveAPIResponse.data.retrieve?.aStatus ? "active" : "inactive"),
            form.setValue("aSlug", APICall.retrieveAPIResponse.data.retrieve?.aSlug),
    
            form.setValue("cCategory", APICall.retrieveAPIResponse.data.retrieve?.cCategory?._id),
            form.setValue("cTag", APICall.retrieveAPIResponse.data.retrieve?.cTag?.map((each: any) => each._id))
          )
        }}
        params={{id: id}}               
      />
    </React.Fragment>
  )
}

export default ProductUpdatePage;
