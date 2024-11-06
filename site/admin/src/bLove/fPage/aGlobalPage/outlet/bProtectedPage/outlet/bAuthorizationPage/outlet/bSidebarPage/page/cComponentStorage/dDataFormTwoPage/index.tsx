import React from "react"

import DataFormTwoComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/dDataFormTwoComponent";


const DataFormTwoPage = () => {
  // JSX
  return (
    <React.Fragment>
      {/* DataFormTwoPage */}
      <DataFormTwoComponent 
        ReduxCall={{}}
        APICall={{
          createAPITrigger: {},
          createAPIResponse: {},
          baseOneToOneListAPIResponse: {},
          baseOneToManyListAPIResponse: {},
          baseManyToOneListAPIResponse: {},
          baseManyToManyListAPIResponse: {},
        }}
        extras={{
          apiResponseHandler: {
            createAPIResponseHandler: {}
          },
        }}
      />
    </React.Fragment>
  )
}

export default DataFormTwoPage;
