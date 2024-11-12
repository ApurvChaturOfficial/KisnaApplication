import React from "react"

import { AppSidebar } from "@/aConnection/bShadcnConnection/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/aConnection/bShadcnConnection/components/ui/breadcrumb";
import { Separator } from "@/aConnection/bShadcnConnection/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/aConnection/bShadcnConnection/components/ui/sidebar";
import { NavActions } from "@/aConnection/bShadcnConnection/components/nav-actions";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import fullRoute from "@/bLove/gRoute/bFullRoute";
import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";
import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { BookmarkX, FolderKey, KeyRound, LogIn, LogOut, Rat, User2, UserPen, UserPlus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";
import userAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bUserAdministration/aUserAPIEndpoints";
import apiResponseHandler from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/component/aHeaderComponent/extras/aAPIResponseHandler";


const SidebarAndHeaderComponent = ({ children }: { children: React.ReactNode }) => {
  // Variable
  const navigate = useNavigate();

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    logoutAPITrigger: userAPIEndpoint.useLazyUserLogoutAPIQuery()[0],
    logoutAPIResponse: userAPIEndpoint.useLazyUserLogoutAPIQuery()[1],
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* SidebarAndHeaderComponent */}
      <SidebarProvider>
        <AppSidebar ReduxCall={ReduxCall} APICall={APICall} navigate={navigate} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Dashboard
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Base</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="ml-auto px-3 flex gap-2">
              <NavActions />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {
                    (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?._id ? (
                      // <Link to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute} >
                        <div className="flex items-center space-x-2">
                          <Avatar>
                            <AvatarImage src={"asdsadsad"} />
                            <AvatarFallback>{getInitialsUtility("Apurv", "Chatur")}</AvatarFallback>
                          </Avatar>
                          <div className='hidden sm:block' >
                            <p className="text-sm font-medium leading-none">{`
                              ${(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eFirstname} 
                              ${(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eLastname}
                            `}</p>
                            <p className="text-xs text-muted-foreground">{(ReduxCall.state.receivedObject as any)?.ProfileRetrieve?.eEmail}</p>
                          </div>
                        </div>
                      // </Link>
                    ) : (
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <User2 className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                    )
                  }
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {
                    (ReduxCall.state.receivedObject as any)?.ProfileRetrieve?._id ? (
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.aProfileRetrieveRoute} >
                            <Rat /> View Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.bProfileUpdateRoute} >
                            <UserPen /> Edit Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.cProfilePasswordUpdateRoute} >
                            <FolderKey /> Change Password
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.dProfileDeleteRoute} >
                            <BookmarkX /> Delete Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <span onClick={() => apiResponseHandler.logoutAPIResponseHandler(APICall.logoutAPITrigger, navigate, ReduxCall)} >
                            <LogOut /> Sign Out
                          </span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    ) : (
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.aSignInRoute} >
                            <LogIn /> Sign In
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.bSignUpRoute} >
                            <UserPlus /> Sign Up
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.cForgotPasswordRoute} >
                          <KeyRound /> Forgot Password
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    )
                  }
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children}
            
            {/* IMPORTANT COMMENT: Skeleton */}
            {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50" /> */}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </React.Fragment>
  )
}

export default SidebarAndHeaderComponent;
