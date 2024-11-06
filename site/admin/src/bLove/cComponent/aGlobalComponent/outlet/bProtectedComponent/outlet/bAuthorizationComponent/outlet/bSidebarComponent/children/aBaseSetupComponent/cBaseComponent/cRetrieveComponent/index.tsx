import React from "react"
import { Link } from "react-router-dom"
import moment from 'moment';

import fullRoute from "@/bLove/gRoute/bFullRoute"
import UserBlockComponent from "@/bLove/cComponent/aGlobalComponent/component/aUserBlockComponent"
import Cover from '@/bLove/hAsset/Bride_01.jpg'

import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import {
  ChevronLeft,
  Copy,
  Link2,
} from "lucide-react"
import { Badge } from "@/aConnection/bShadcnConnection/components/ui/badge"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/aConnection/bShadcnConnection/components/ui/card"
import { Separator } from "@/aConnection/bShadcnConnection/components/ui/separator"
import { formatLyricsWithHtml } from "@/aConnection/aAppConnection/HtmlTextParser";


type BaseRetrieveComponentType = {
  ReduxCall: any
  APICall: {
    retrieveAPIResponse: any
  }
  extras: {
    apiResponseHandler: {
      retrieveAPIResponseHandler: any
    },
  }
}

const BaseRetrieveComponent = (props: BaseRetrieveComponentType) => {
  // Destructure Props
  const { APICall } = props;

  // JSX
  return (
    <React.Fragment>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid flex-1 auto-rows-max gap-4">
          {
            APICall.retrieveAPIResponse.isLoading ? "Loading..." : 
            APICall.retrieveAPIResponse.isError ? "Error..." :
            APICall.retrieveAPIResponse.isSuccess ? (
              <React.Fragment>
                {
                  APICall.retrieveAPIResponse.data.success ? (
                    <React.Fragment>
                      <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="h-7 w-7">
                          <ChevronLeft className="h-4 w-4" />
                          <span className="sr-only">Back</span>
                        </Button>
                        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                          Base Retrieve
                        </h1>
                        <div className="hidden items-center gap-2 md:ml-auto md:flex">
                          <Button 
                            size="sm"
                            disabled={APICall.retrieveAPIResponse.isLoading}
                            asChild
                          >
                            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.dUpdateRoute}/${APICall.retrieveAPIResponse.data.retrieve._id}`} >
                              {APICall.retrieveAPIResponse.isLoading ? "Loading..." : "Update"}
                            </Link>
                          </Button>
                          <Button 
                            size="sm"
                            disabled={APICall.retrieveAPIResponse.isLoading}
                            asChild
                            variant="destructive"
                          >
                            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.eDeleteRoute}/${APICall.retrieveAPIResponse.data.retrieve._id}`} >
                              {APICall.retrieveAPIResponse.isLoading ? "Loading..." : "Delete"}
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 lg:grid-cols-3 xl:grid-cols-3">
                        <div>
                          <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4" >
                            <CardHeader className="flex flex-row items-start bg-muted/50">
                              <div className="grid gap-0.5">
                                <CardTitle className="group flex items-center gap-2 text-lg">
                                  Basic Information
                                  <Button
                                    size="icon"
                                    variant="outline"
                                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                                  >
                                    <Copy className="h-3 w-3" />
                                    <span className="sr-only">Copy Order ID</span>
                                  </Button>
                                </CardTitle>
                                <CardDescription>This section contains basic fields like title, subtitle, description, etc.</CardDescription>
                              </div>
                            </CardHeader>
                            <CardContent className="p-6 text-sm">
                              <div className="grid gap-3">
                                <ul className="grid gap-3">
                                  <li className="flex items-center justify-center mb-3">
                                    <div
                                      className="flex flex-col gap-2 items-center justify-between rounded-md border-2 border-muted bg-transparent p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                      <span className="text-muted-foreground" >Cover Image:</span>
                                      <img src={Cover} alt="User" width={150} />
                                    </div>
                                  </li>
                                  <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                      ID:
                                    </span>
                                    <span>{APICall.retrieveAPIResponse.data.retrieve._id}</span>
                                  </li>
                                  <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                      Title:
                                    </span>
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.aTitle || "--N/A--"}</span>
                                  </li>
                                  <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                      Subtitle:
                                    </span>
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.aSubtitle || "--N/A--"}</span>
                                  </li>
                                  <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                      Status:
                                    </span>
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.aStatus ? <Badge>Active</Badge> : <Badge>Inactive</Badge>}</span>
                                  </li>
                                  <li className="flex flex-col gap-1 items-start justify-between">
                                    <span className="text-muted-foreground">
                                      Description:
                                    </span>
                                    <span>{formatLyricsWithHtml(APICall.retrieveAPIResponse.data.retrieve.aDescription || "--N/A--") || "--N/A--"}</span>
                                  </li>
                                  <li className="flex flex-col gap-1 items-start justify-between">
                                    <span className="text-muted-foreground">
                                      Detail:
                                    </span>
                                    <span>{formatLyricsWithHtml(APICall.retrieveAPIResponse.data.retrieve.aDetail || "--N/A--") || "--N/A--"}</span>
                                  </li>
                                  <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                      Slug:
                                    </span>
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.aSlug || "--N/A--"}</span>
                                  </li>
                                </ul>
                              </div>
                            </CardContent>
                            {/* <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                              <div className="text-xs text-muted-foreground">
                                Updated <time dateTime="2023-11-23">November 23, 2023</time>
                              </div>
                              <Pagination className="ml-auto mr-0 w-auto">
                                <PaginationContent>
                                  <PaginationItem>
                                    <Button size="icon" variant="outline" className="h-6 w-6">
                                      <ChevronLeft className="h-3.5 w-3.5" />
                                      <span className="sr-only">Previous Order</span>
                                    </Button>
                                  </PaginationItem>
                                  <PaginationItem>
                                    <Button size="icon" variant="outline" className="h-6 w-6">
                                      <ChevronRight className="h-3.5 w-3.5" />
                                      <span className="sr-only">Next Order</span>
                                    </Button>
                                  </PaginationItem>
                                </PaginationContent>
                              </Pagination>
                            </CardFooter> */}
                          </Card>
                        </div>
                        <div>
                          <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4" >
                            <CardHeader className="flex flex-row items-start bg-muted/50">
                              <div className="grid gap-0.5">
                                <CardTitle className="group flex items-center gap-2 text-lg">
                                  Personal Information
                                  <Button
                                    size="icon"
                                    variant="outline"
                                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                                  >
                                    <Copy className="h-3 w-3" />
                                    <span className="sr-only">Copy Order ID</span>
                                  </Button>
                                </CardTitle>
                                <CardDescription>This section contains personal fields like created-by, created-on, etc.</CardDescription>
                              </div>
                            </CardHeader>
                            <CardContent className="p-6 text-sm">
                              <div className="grid gap-3">
                                <ul className="grid gap-3">
                                  <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                      Created by:
                                    </span>
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.bCreatedBy ? <UserBlockComponent user={APICall.retrieveAPIResponse.data.retrieve.bCreatedBy} /> : "--N/A--"}</span>
                                  </li>
                                  <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                      Created on:
                                    </span>
                                    <span className="flex flex-col items-end" >
                                      {APICall.retrieveAPIResponse.data.retrieve.bCreatedAt ? (
                                        <React.Fragment>
                                          <span>{moment(APICall.retrieveAPIResponse.data.retrieve.bCreatedAt).format("ddd, Do MMM YYYY")}</span>
                                          <span>{moment(APICall.retrieveAPIResponse.data.retrieve.bCreatedAt).format("hh:mm:ss A")}</span>
                                        </React.Fragment>
                                      ) : <span>--N/A--</span>}
                                    </span>
                                  </li>
                                </ul>
                                <Separator className="my-2" />
                                <ul className="grid gap-3">
                                  <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                      Updated by:
                                    </span>
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.bUpdatedBy ? <UserBlockComponent user={APICall.retrieveAPIResponse.data.retrieve.bCreatedBy} /> : "--N/A--"}</span>
                                  </li>
                                  <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                      Updated on:
                                    </span>
                                    <span className="flex flex-col items-end" >
                                      {APICall.retrieveAPIResponse.data.retrieve.bUpdatedAt ? (
                                        <React.Fragment>
                                          <span>{moment(APICall.retrieveAPIResponse.data.retrieve.bUpdatedAt).format("ddd, Do MMM YYYY")}</span>
                                          <span>{moment(APICall.retrieveAPIResponse.data.retrieve.bUpdatedAt).format("hh:mm:ss A")}</span>
                                        </React.Fragment>
                                      ) : <span>--N/A--</span>}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </CardContent>
                            {/* <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                              <div className="text-xs text-muted-foreground">
                                Updated <time dateTime="2023-11-23">November 23, 2023</time>
                              </div>
                              <Pagination className="ml-auto mr-0 w-auto">
                                <PaginationContent>
                                  <PaginationItem>
                                    <Button size="icon" variant="outline" className="h-6 w-6">
                                      <ChevronLeft className="h-3.5 w-3.5" />
                                      <span className="sr-only">Previous Order</span>
                                    </Button>
                                  </PaginationItem>
                                  <PaginationItem>
                                    <Button size="icon" variant="outline" className="h-6 w-6">
                                      <ChevronRight className="h-3.5 w-3.5" />
                                      <span className="sr-only">Next Order</span>
                                    </Button>
                                  </PaginationItem>
                                </PaginationContent>
                              </Pagination>
                            </CardFooter> */}
                          </Card>
                        </div>
                        <div>
                          <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4" >
                            <CardHeader className="flex flex-row items-start bg-muted/50">
                              <div className="grid gap-0.5">
                                <CardTitle className="group flex items-center gap-2 text-lg">
                                  Relation Information
                                  <Button
                                    size="icon"
                                    variant="outline"
                                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                                  >
                                    <Copy className="h-3 w-3" />
                                    <span className="sr-only">Copy Order ID</span>
                                  </Button>
                                </CardTitle>
                                <CardDescription>This section contains relation fields like user-role, product-category, etc.</CardDescription>
                              </div>
                            </CardHeader>
                            <CardContent className="p-6 text-sm">
                              <div className="grid gap-3">
                                <ul className="grid gap-3">
                                  <li className="flex flex-col gap-1 items-start justify-between">
                                    <span className="text-muted-foreground">
                                      Base One To One:
                                    </span>
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.cBaseOneToOne?.aTitle || "--N/A--"}</span>
                                  </li>
                                  <li className="flex flex-col gap-1 items-start justify-between">
                                    <span className="text-muted-foreground">
                                      Base One To Many:
                                    </span>
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.cBaseOneToMany?.map((each: any) => each.aTitle).join(", ") || "--N/A--"}</span>
                                  </li>
                                  <li className="flex flex-col gap-1 items-start justify-between">
                                    <span className="text-muted-foreground">
                                      Base Many To One:
                                    </span>
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.cBaseManyToOne?.aTitle || "--N/A--"}</span>
                                  </li>
                                  <li className="flex flex-col gap-1 items-start justify-between">
                                    <span className="text-muted-foreground">
                                      Base Many To Many:
                                    </span>
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.cBaseManyToMany?.map((each: any) => each.aTitle).join(", ") || "--N/A--"}</span>
                                  </li>
                                </ul>
                              </div>
                            </CardContent>
                            {/* <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                              <div className="text-xs text-muted-foreground">
                                Updated <time dateTime="2023-11-23">November 23, 2023</time>
                              </div>
                              <Pagination className="ml-auto mr-0 w-auto">
                                <PaginationContent>
                                  <PaginationItem>
                                    <Button size="icon" variant="outline" className="h-6 w-6">
                                      <ChevronLeft className="h-3.5 w-3.5" />
                                      <span className="sr-only">Previous Order</span>
                                    </Button>
                                  </PaginationItem>
                                  <PaginationItem>
                                    <Button size="icon" variant="outline" className="h-6 w-6">
                                      <ChevronRight className="h-3.5 w-3.5" />
                                      <span className="sr-only">Next Order</span>
                                    </Button>
                                  </PaginationItem>
                                </PaginationContent>
                              </Pagination>
                            </CardFooter> */}
                          </Card>
                        </div>
                        <div className="hidden" >
                          <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4" >
                            <CardHeader className="flex flex-row items-start bg-muted/50">
                              <div className="grid gap-0.5">
                                <CardTitle className="group flex items-center gap-2 text-lg">
                                  More Information
                                  <Button
                                    size="icon"
                                    variant="outline"
                                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                                  >
                                    <Copy className="h-3 w-3" />
                                    <span className="sr-only">Copy Order ID</span>
                                  </Button>
                                </CardTitle>
                                <CardDescription>This section contains more fields like address, web-links, etc.</CardDescription>
                              </div>
                            </CardHeader>
                            <CardContent className="p-6 text-sm">
                              <div className="grid gap-3">
                                <ul className="grid gap-3">
                                  <li className="flex flex-col gap-1 items-start justify-between">
                                    <span className="text-muted-foreground">
                                      Address:
                                    </span>
                                    <span>Near BKC New York City, Beside Statue of Liberty, Uganda, Nepal, Pne, 445252</span>
                                  </li>
                                  <li className="flex flex-col gap-1 items-start justify-between">
                                    <span className="text-muted-foreground">
                                      Web Links:
                                    </span>
                                    <div className="flex gap-2 my-1">
                                      <Button variant="outline" size="icon"> {<InstagramLogoIcon className="h-4 w-4" />}</Button>
                                      <Button variant="outline" size="icon"> {<TwitterLogoIcon className="h-4 w-4" />}</Button>
                                      <Button variant="outline" size="icon"> {<GitHubLogoIcon className="h-4 w-4" />}</Button>
                                      <Button variant="outline" size="icon"> {<Link2 className="h-4 w-4" />}</Button>
                                    </div>                  
                                  </li>
                                </ul>
                              </div>
                            </CardContent>
                            {/* <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                              <div className="text-xs text-muted-foreground">
                                Updated <time dateTime="2023-11-23">November 23, 2023</time>
                              </div>
                              <Pagination className="ml-auto mr-0 w-auto">
                                <PaginationContent>
                                  <PaginationItem>
                                    <Button size="icon" variant="outline" className="h-6 w-6">
                                      <ChevronLeft className="h-3.5 w-3.5" />
                                      <span className="sr-only">Previous Order</span>
                                    </Button>
                                  </PaginationItem>
                                  <PaginationItem>
                                    <Button size="icon" variant="outline" className="h-6 w-6">
                                      <ChevronRight className="h-3.5 w-3.5" />
                                      <span className="sr-only">Next Order</span>
                                    </Button>
                                  </PaginationItem>
                                </PaginationContent>
                              </Pagination>
                            </CardFooter> */}
                          </Card>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : "Backend Error"
                }
              </React.Fragment>
            ) :
            "Let me understand first"
          }
        </div>
      </main>

      {/* {
        APICall.retrieveAPIResponse.isLoading ? "Loading..." : 
        APICall.retrieveAPIResponse.isError ? "Error..." :
        APICall.retrieveAPIResponse.isSuccess ? (
          <React.Fragment>
            {
              APICall.retrieveAPIResponse.data.success ? (
                <div>
                  <div className="text-xs" >ID: {APICall.retrieveAPIResponse.data.retrieve._id}</div>
                  <div className="text-xs" >Title: {APICall.retrieveAPIResponse.data.retrieve.aTitle || "--N/A--"}</div>
                  <div className="text-xs" >Subtitle: {APICall.retrieveAPIResponse.data.retrieve.aSubtitle || "--N/A--"}</div>
                  <div className="text-xs" >Slug: {APICall.retrieveAPIResponse.data.retrieve.aStatus ? <Badge>Active</Badge> : <Badge>Inactive</Badge>}</div>
                  <div className="text-xs" >Slug: {APICall.retrieveAPIResponse.data.retrieve.aSlug || "--N/A--"}</div>
                  <div className="text-xs" >Created By: {APICall.retrieveAPIResponse.data.retrieve.bCreatedBy || "--N/A--"}</div>
                  <div className="text-xs" >Created On: {APICall.retrieveAPIResponse.data.retrieve.bCreatedAt || "--N/A--"}</div>
                  <div className="text-xs" >Updated By: {APICall.retrieveAPIResponse.data.retrieve.bUpdatedBy || "--N/A--"}</div>
                  <div className="text-xs" >Updated On: {APICall.retrieveAPIResponse.data.retrieve.bUpdatedAt || "--N/A--"}</div>
                  <div className="flex gap-2" >
                    <Button size="sm" asChild ><Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.cRetrieveRoute}/${APICall.retrieveAPIResponse.data.retrieve._id}`} >Retrieve</Link></Button>
                    <Button size="sm" asChild ><Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.dUpdateRoute}/${APICall.retrieveAPIResponse.data.retrieve._id}`} >Update</Link></Button>
                    <Button size="sm" asChild ><Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.eDeleteRoute}/${APICall.retrieveAPIResponse.data.retrieve._id}`} >Delete</Link></Button>
                  </div>
                </div>
              ) : "Backend Error"
            }
          </React.Fragment>
        ) :
        "Let me understand first"
      } */}
    </React.Fragment>      
  )
}  

export default BaseRetrieveComponent;
