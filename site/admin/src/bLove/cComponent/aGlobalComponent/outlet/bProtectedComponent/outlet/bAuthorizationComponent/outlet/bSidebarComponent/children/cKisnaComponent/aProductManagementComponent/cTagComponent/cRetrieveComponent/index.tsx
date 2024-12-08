import React from "react"

import TypicalRetrieveComponent from "../../../../../component/cTypicalRetrieveComponent";


type TagRetrieveComponentType = {
  ReduxCall: any
  APICall: {
    retrieveAPIResponse: any
  }
  extras: {
    apiResponseHandler: {
      retrieveAPIResponseHandler: any
    },
    data: any
  }
}

const TagRetrieveComponent = (props: TagRetrieveComponentType) => {
  // Destructure Props
  const { ReduxCall, APICall, extras } = props;

  // JSX
  return (
    <React.Fragment>
      {/* TagRetrieveComponent */}
      <TypicalRetrieveComponent 
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse
        }}
        extras={{
          apiResponseHandler: {
            retrieveAPIResponseHandler: extras.apiResponseHandler.retrieveAPIResponseHandler
          },
          data: extras.data
        }}                
      />
    </React.Fragment>      
  )
}  

export default TagRetrieveComponent;
