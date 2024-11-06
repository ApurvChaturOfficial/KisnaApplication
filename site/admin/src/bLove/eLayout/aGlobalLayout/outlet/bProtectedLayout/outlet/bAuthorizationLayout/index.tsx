import React from "react";
import { Outlet } from "react-router-dom";

import AuthorizationComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizationComponent";


const AuthorizationLayout = () => {
  // JSX
  return (
    <React.Fragment>
      {/* AuthorizationLayout */}
      <AuthorizationComponent>
        <Outlet />
      </AuthorizationComponent>
    </React.Fragment>
  )
}

export default AuthorizationLayout; 
