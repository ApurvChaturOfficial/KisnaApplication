import React from "react"

import DataFormComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent/outlet/bSidebarComponent/children/cDataFormComponent";


const DataFormPage = () => {
  // JSX
  return (
    <React.Fragment>
      {/* DataFormPage */}
      <DataFormComponent
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

export default DataFormPage;
