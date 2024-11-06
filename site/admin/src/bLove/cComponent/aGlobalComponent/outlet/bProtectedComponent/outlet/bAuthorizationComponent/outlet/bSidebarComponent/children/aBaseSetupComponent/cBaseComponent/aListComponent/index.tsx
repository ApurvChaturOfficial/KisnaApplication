import React, { useEffect } from "react"

import { Link } from 'react-router-dom'
import {
  DeleteIcon,
  Edit3,
  Eye,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"

import { Badge } from "@/aConnection/bShadcnConnection/components/ui/badge"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/aConnection/bShadcnConnection/components/ui/card"
import {
  DropdownMenu,
  // DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/aConnection/bShadcnConnection/components/ui/table"
import {
  Tabs,
  TabsContent,
  // TabsList,
  // TabsTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/tabs"
import { 
  // Pagination, 
  // PaginationContent, 
  // PaginationEllipsis, 
  // PaginationItem, 
  // PaginationLink, 
  // PaginationNext, 
  // PaginationPrevious 
} from "@/aConnection/bShadcnConnection/components/ui/pagination"

// import Bride01 from '@/bLove/hAsset/Bride_01.jpg'
// import Bride02 from '@/bLove/hAsset/Bride_02.jpg'
// import Bride03 from '@/bLove/hAsset/Bride_01.jpg'
// import Bride04 from '@/bLove/hAsset/Bride_02.jpg'
// import Bride05 from '@/bLove/hAsset/Bride_01.jpg'
import { ReloadIcon } from "@radix-ui/react-icons"
import fullRoute from "@/bLove/gRoute/bFullRoute"
import truncateTextUtility from "@/bLove/dUtility/bTruncateTextUtility"
import PersonalInfoBlockBlockComponent from "@/bLove/cComponent/aGlobalComponent/component/bPersonalInfoBlockComponent"
import TypicalListComponent from "../../../../component/aTypicalListComponent"
// import UserNavComponent from "../../../../component/aUserNavComponent"
// import { DataTable } from "../../../../component/bDataTableComponent"
// import { columns } from "../../../../component/gColoumnComponent"
// import MyColumnComponent from "../../../../component/aMyDataTable/aMyColumnComponent"


type BaseListComponentType = {
  ReduxCall: any
  APICall: {
    listAPIResponse: any
  }
  extras: {
    apiResponseHandler: {
      listAPIResponseHandler: any
    },
    data: any
  }
}

const BaseListComponent = (props: BaseListComponentType) => {
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
      {/* BaseListComponent */}
      <TypicalListComponent
        ReduxCall={ReduxCall}
        APICall={{
          listAPIResponse: APICall.listAPIResponse
        }}
        extras={{
          apiResponseHandler: {
            listAPIResponseHandler: extras.apiResponseHandler.listAPIResponseHandler
          },
          data: extras.data as any
        }}      
      />
      {/* <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Base List
            </h1>

            <div className="ml-auto flex items-center gap-2">
              {APICall.listAPIResponse.isLoading ? (
                <Button size="sm" className="h-7 gap-1" disabled >
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </Button>
              ) : (
                <Button size="sm" asChild className="h-7 gap-1">
                  <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.bCreateRoute} >
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add
                    </span>
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardContent>
                {
                  APICall.listAPIResponse.isLoading ? "Loading..." : 
                  APICall.listAPIResponse.isError ? "Error..." :
                  APICall.listAPIResponse.isSuccess ? (
                    APICall.listAPIResponse.data.success ? (
                      APICall.listAPIResponse.data.list.length > 0 ? (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Title</TableHead>
                              <TableHead>Subtitle</TableHead>
                              <TableHead>Description</TableHead>
                              <TableHead>Detail</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead className="hidden md:table-cell">
                                Slug
                              </TableHead>
                              <TableHead className="hidden md:table-cell">
                                Created
                              </TableHead>
                              <TableHead className="hidden md:table-cell">
                                Updated
                              </TableHead>
                              <TableHead className="hidden md:table-cell">
                                Base One To One
                              </TableHead>
                              <TableHead className="hidden md:table-cell">
                                Base One To Many
                              </TableHead>
                              <TableHead className="hidden md:table-cell">
                                Base Many To One
                              </TableHead>
                              <TableHead className="hidden md:table-cell">
                                Base Many To Many
                              </TableHead>
                              <TableHead>
                                <span className="sr-only">Actions</span>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {APICall.listAPIResponse.data.list.map((each: any, index: number) => (
                              <TableRow key={index} >
                                <TableCell className="font-medium w-24">
                                  {each.aTitle}
                                </TableCell>
                                <TableCell className="font-medium w-48">
                                  {each.aSubtitle}
                                </TableCell>
                                <TableCell className="font-medium w-64">
                                  {truncateTextUtility(each.aDescription || "", 50)}
                                </TableCell>
                                <TableCell className="font-medium w-64">
                                  {truncateTextUtility(each.aDetail || "", 70)}
                                </TableCell>
                                <TableCell>
                                  {each.aStatus ? (
                                    <Badge variant="default">Active</Badge> 
                                  ) : (
                                    <Badge variant="secondary">Inactive</Badge>
                                  )}
                                </TableCell>
                                <TableCell>{each.aSlug}</TableCell>

                                <TableCell><PersonalInfoBlockBlockComponent user={each.bCreatedBy} /></TableCell>
                                <TableCell><PersonalInfoBlockBlockComponent user={each.bUpdatedBy} /></TableCell>

                                <TableCell className="font-medium w-64" >
                                  <Badge variant="secondary">{each?.cBaseOneToOne?.aTitle}</Badge>
                                </TableCell>
                                <TableCell className="font-medium w-64" >
                                  <div className="flex flex-col gap-1" >
                                    {each?.cBaseOneToMany?.map((each: any, index: number) => (
                                      <Badge key={index} variant="secondary">{each.aTitle}</Badge>
                                    ))}
                                  </div>
                                </TableCell>
                                <TableCell className="font-medium w-64" >
                                  <Badge variant="secondary">{each?.cBaseManyToOne?.aTitle}</Badge>
                                </TableCell>
                                <TableCell className="font-medium w-64" >
                                  <div className="flex flex-col gap-1" >
                                    {each?.cBaseManyToMany?.map((each: any, index: number) => (
                                      <Badge key={index} variant="secondary">{each.aTitle}</Badge>
                                    ))}
                                  </div>
                                </TableCell>

                                <TableCell className="font-medium w-24">
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                      >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                      <DropdownMenuSeparator />
                                      <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.cRetrieveRoute}/${each._id}`} >
                                        <DropdownMenuItem>
                                          <Eye className="h-4 w-4 mr-2" /> View
                                        </DropdownMenuItem>
                                      </Link>
                                      <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.dUpdateRoute}/${each._id}`} >
                                        <DropdownMenuItem>
                                          <Edit3 className="h-4 w-4 mr-2" />Update
                                        </DropdownMenuItem>
                                      </Link>
                                      <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.eDeleteRoute}/${each._id}`} >
                                        <DropdownMenuItem>
                                          <DeleteIcon className="h-4 w-4 mr-2" />Delete
                                        </DropdownMenuItem>
                                      </Link>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            )).reverse()}
                          </TableBody>
                        </Table>
                      ) : "Empty List"
                    ) : "Backend Error"
                  ) :
                  "Let me understand first"
                }
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main> */}

      {/* <>
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
              <p className="text-muted-foreground">
                Here&apos;s a list of your tasks for this month!
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <UserNavComponent />
            </div>
          </div>
          <DataTable data={tasks} columns={columns} />
          
          {
            baseListAPICall.isLoading ? "Loading..." : 
            baseListAPICall.isError ? "Error..." :
            baseListAPICall.isSuccess ? (
              <DataTable data={baseListAPICall.data.list} columns={MyColumnComponent} />
            ) : "Wait"
          }
        </div>
      </> */}

      {/* RAW: Do Not Remove */}
      {/* <div>{
        baseListAPICall.isLoading ? (
          <Button size="sm" disabled >
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button size="sm" asChild >
            <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.bCreateRoute} >
              <PlusCircle className="mr-2 h-4 w-4" />
              Create
            </Link>
          </Button>
        )
      }</div> */}

      {/* <div>{
        baseListAPICall.isLoading ? "Loading..." : 
        baseListAPICall.isError ? "Error..." :
        baseListAPICall.isSuccess ? (
          <React.Fragment>
            {
              baseListAPICall.data.success ? (
                baseListAPICall.data.list.length > 0 ? (
                  baseListAPICall.data.list.map((each: any, index: number) => (
                    <div key={index} >
                      <p className="text-xs" >ID: {each._id}</p>
                      <p className="text-xs" >Title: {each.aTitle || "--N/A--"}</p>
                      <p className="text-xs" >Subtitle: {each.aSubtitle || "--N/A--"}</p>
                      <p className="text-xs" >Slug: {each.aStatus ? <Badge>Active</Badge> : <Badge>Inactive</Badge>}</p>
                      <p className="text-xs" >Slug: {each.aSlug || "--N/A--"}</p>
                      <p className="text-xs" >Created By: {each.bCreatedBy || "--N/A--"}</p>
                      <p className="text-xs" >Created On: {each.bCreatedAt || "--N/A--"}</p>
                      <p className="text-xs" >Updated By: {each.bUpdatedBy || "--N/A--"}</p>
                      <p className="text-xs" >Updated On: {each.bUpdatedAt || "--N/A--"}</p>
                      <div className="flex gap-2" >
                        <Button size="sm" asChild ><Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.cRetrieveRoute}/${each._id}`} >Retrieve</Link></Button>
                        <Button size="sm" asChild ><Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.dUpdateRoute}/${each._id}`} >Update</Link></Button>
                        <Button size="sm" asChild ><Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.dBaseRoute.eDeleteRoute}/${each._id}`} >Delete</Link></Button>
                      </div>
                    </div>
                  ))
                ) : "Empty List"
              ) : "Backend Error"
            }
          </React.Fragment>
        ) :
        "Let me understand first"
      }</div> */}
    </React.Fragment>
  )
}

export default BaseListComponent;
