import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent"


type BaseOneToManyCreateComponentType = {
  ReduxCall: any
  APICall: {
    createAPITrigger: any,
    createAPIResponse: any,
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

const BaseOneToManyCreateComponent = (props: BaseOneToManyCreateComponentType) => {
  // Destructure Props
  const { ReduxCall, APICall, extras } = props;
  
  // JSX
  return (
    <React.Fragment>
      {/* BaseOneToManyCreateComponent */}
      <TypicalCreateComponent
        ReduxCall={ReduxCall}
        APICall={{
          createAPITrigger: APICall.createAPITrigger,
          createAPIResponse: APICall.createAPIResponse,
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

export default BaseOneToManyCreateComponent;
