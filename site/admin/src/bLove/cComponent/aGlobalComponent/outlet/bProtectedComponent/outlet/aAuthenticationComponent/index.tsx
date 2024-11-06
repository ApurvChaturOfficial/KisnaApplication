import React from "react"

import brandConnection from "@/aConnection/eBrandConnection";


const AuthenticationComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      {/* AuthenticationComponent */}
      <div className="container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-full lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-blue-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            {brandConnection.brandName}
          </div>
        </div>
        <div className="flex justify-center align-middle h-full p-8">
          {/* <AuthFormComponent /> */}
          { children }
        </div>
      </div>
    </React.Fragment>
  )
}

export default AuthenticationComponent;
