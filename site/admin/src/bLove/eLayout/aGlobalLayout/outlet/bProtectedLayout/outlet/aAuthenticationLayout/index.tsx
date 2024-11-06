import React from "react";
import { Outlet } from "react-router-dom";

import AuthenticationComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/aAuthenticationComponent";


const AuthenticationLayout = () => {
  // JSX
  return (
    <React.Fragment>
      {/* AuthenticationLayout */}
      <AuthenticationComponent>
        <Outlet />
      </AuthenticationComponent>
    </React.Fragment>
  )
}

export default AuthenticationLayout; 
