import React from "react"

import TypicalCreateComponent from "../../../../../component/bTypicalCreateComponent"


type ProductCreateComponentType = {
  ReduxCall: any
  APICall: {
    createAPITrigger: any,
    createAPIResponse: any,

    optionCreateAPITrigger: any,
    optionCreateAPIResponse: any,

    productVariantCreateAPITrigger: any,
    productVariantCreateAPIResponse: any,

    groupCreateAPITrigger: any,
    groupCreateAPIResponse: any,
  }
  extras: {
    apiResponseHandler: {
      createAPIResponseHandler: any
    },
    data: any
    formSchema: any,
    formDefaultValue: any,
  }
}

const ProductCreateComponent = (props: ProductCreateComponentType) => {
  // Destructure Props
  const { ReduxCall, APICall, extras } = props;
  
  // JSX
  return (
    <React.Fragment>
      {/* ProductCreateComponent */}
      <TypicalCreateComponent
        ReduxCall={ReduxCall}
        APICall={{
          createAPITrigger: APICall.createAPITrigger,
          createAPIResponse: APICall.createAPIResponse,

          special1CreateAPITrigger: APICall.optionCreateAPITrigger,
          special1CreateAPIResponse: APICall.optionCreateAPIResponse,      

          special2CreateAPITrigger: APICall.productVariantCreateAPITrigger,
          special2CreateAPIResponse: APICall.productVariantCreateAPIResponse,      

          special3CreateAPITrigger: APICall.groupCreateAPITrigger,
          special3CreateAPIResponse: APICall.groupCreateAPIResponse,      
        }}
        extras={{
          apiResponseHandler: {
            createAPIResponseHandler: extras.apiResponseHandler.createAPIResponseHandler
          },
          data: extras.data,
          formSchema: extras.formSchema,
          formDefaultValue: extras.formDefaultValue
        }}        
      />
    </React.Fragment>
  )
}  

export default ProductCreateComponent;
