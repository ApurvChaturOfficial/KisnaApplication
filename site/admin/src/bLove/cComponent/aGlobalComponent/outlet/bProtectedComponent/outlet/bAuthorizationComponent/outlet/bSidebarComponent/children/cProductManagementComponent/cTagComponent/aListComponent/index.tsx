import React, { useEffect } from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent"


type TagListComponentType = {
  ReduxCall: any
  APICall: {
    listAPIResponse: any
  }
  extras: {
    apiResponseHandler: {
      listAPIResponseHandler: any
    },
    data: any,
    listSchema: any,
    listColumn: any,
  }
}

const TagListComponent = (props: TagListComponentType) => {
  // Destructure Props
  const { ReduxCall, APICall, extras } = props;

  // All Render
  // Next Render
  useEffect(() => {
    extras.apiResponseHandler.listAPIResponseHandler(APICall.listAPIResponse)
  }, [APICall.listAPIResponse])
  
  // JSX
  return (
    <React.Fragment>
      {/* TagListComponent */}
      <TypicalListComponent
        ReduxCall={ReduxCall}
        APICall={{
          listAPIResponse: APICall.listAPIResponse
        }}
        extras={{
          apiResponseHandler: {
            listAPIResponseHandler: extras.apiResponseHandler.listAPIResponseHandler
          },
          data: extras.data,
          listSchema: extras.listSchema,
          listColumn: extras.listColumn,
        }}      
      />
    </React.Fragment>
  )
}

export default TagListComponent;
