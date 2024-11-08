import React from "react"
// import { useNavigate } from "react-router-dom"

import {
  ChevronLeft,
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
import { Label } from "@/aConnection/bShadcnConnection/components/ui/label"


type RoleDeleteComponentType = {
  ReduxCall: any
  APICall: {
    retrieveAPIResponse: any,
    deleteAPITrigger: any,
    deleteAPIResponse: any
  }
  extras: {
    apiResponseHandler: {
      deleteAPIResponseHandler: any
    },
  }
}

const RoleDeleteComponent = (props: RoleDeleteComponentType) => {
  // Destructure Props
  const { APICall } = props;

  // // Variable
  // const navigate = useNavigate()

  // JSX
  return (
    <React.Fragment>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Base Delete
            </h1>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button 
                onClick={() => APICall.deleteAPITrigger({ params: { _id: APICall.retrieveAPIResponse.data.retrieve._id } })}
                size="sm"
                type="submit"
                variant="destructive"
                disabled={APICall.deleteAPIResponse.isLoading}
              >
                {APICall.deleteAPIResponse.isLoading ? "Loading..." : "Delete Base"}
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              {
                APICall.retrieveAPIResponse.isLoading ? "Loading..." : 
                APICall.retrieveAPIResponse.isError ? "Error..." :
                APICall.retrieveAPIResponse.isSuccess ? (
                  <React.Fragment>
                    {
                      APICall.retrieveAPIResponse.data.success ? (
                        <React.Fragment>
                          <Card x-chunk="dashboard-07-chunk-0">
                            <CardHeader>
                              <CardTitle>Basic Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="grid gap-6">
                                <div className="grid gap-2">
                                  <Label>Title :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    {APICall.retrieveAPIResponse.data.retrieve.aTitle || "--N/A--"}
                                  </div>
                                </div>
                                <div className="grid gap-2">
                                  <Label>Subtitle :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    {APICall.retrieveAPIResponse.data.retrieve.aSubtitle || "--N/A--"}
                                  </div>
                                </div>
                                <div className="grid gap-2">
                                  <Label>Description :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    {APICall.retrieveAPIResponse.data.retrieve.aDescription || "--N/A--"}
                                  </div>
                                </div>
                                <div className="grid gap-2">
                                  <Label>Detail :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    {APICall.retrieveAPIResponse.data.retrieve.aDetail || "--N/A--"}
                                  </div>
                                </div>
                                <div className="grid gap-2">
                                  <Label>Satus :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    {APICall.retrieveAPIResponse.data.retrieve.aStatus ? <Badge>Active</Badge> : <Badge>Inactive</Badge>}
                                  </div>
                                </div>
                                <div className="grid gap-2">
                                  <Label>Slug :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    {APICall.retrieveAPIResponse.data.retrieve.aSlug || "--N/A--"}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          <Card x-chunk="dashboard-07-chunk-1">
                            <CardHeader>
                              <CardTitle>Personal Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="grid gap-6">
                                <div className="grid gap-2">
                                  <Label>Created By :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    {APICall.retrieveAPIResponse.data.retrieve.bCreatedBy.eFirstname || "--N/A--"}
                                  </div>
                                </div>
                                <div className="grid gap-2">
                                  <Label>Created At :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    {APICall.retrieveAPIResponse.data.retrieve.bCreatedAt || "--N/A--"}
                                  </div>
                                </div>
                                <div className="grid gap-2">
                                  <Label>Updated At :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    {APICall.retrieveAPIResponse.data.retrieve.bUpdatedBy || "--N/A--"}
                                  </div>
                                </div>
                                <div className="grid gap-2">
                                  <Label>Updated By :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    {APICall.retrieveAPIResponse.data.retrieve.bUpdatedAt || "--N/A--"}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          <Card x-chunk="dashboard-07-chunk-2">
                            <CardHeader>
                              <CardTitle>Relation Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="grid gap-6">
                                <div className="grid gap-2">
                                  <Label>Base One To One :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.cBaseOneToOne?.aTitle || "--N/A--"}</span>
                                  </div>
                                </div>
                                <div className="grid gap-2">
                                  <Label>Base One To Many :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.cBaseOneToMany?.map((each: any) => each.aTitle).join(", ") || "--N/A--"}</span>
                                  </div>
                                </div>
                                <div className="grid gap-2">
                                  <Label>Base Many To One :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.cBaseManyToOne?.aTitle || "--N/A--"}</span>
                                  </div>
                                </div>
                                <div className="grid gap-2">
                                  <Label>Base many To Many :</Label>
                                  <div className="text-sm text-muted-foreground">
                                    <span>{APICall.retrieveAPIResponse.data.retrieve.cBaseManyToMany?.map((each: any) => each.aTitle).join(", ") || "--N/A--"}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </React.Fragment>
                      ) : "Backend Error"
                    }
                  </React.Fragment>
                ) :
                "Let me understand first"
              }
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-5">
                <CardHeader>
                  <CardTitle>Archive Product</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div></div>
                  <Button size="sm" variant="secondary">
                    Archive Product
                  </Button>  
                </CardContent>  
              </Card>  
            </div>  
          </div>  
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button 
              onClick={() => APICall.deleteAPITrigger({ params: { _id: APICall.retrieveAPIResponse.data.retrieve._id } })}
              size="sm"
              type="submit"
              variant="destructive"
              disabled={APICall.deleteAPIResponse.isLoading}
            >
              {APICall.deleteAPIResponse.isLoading ? "Loading..." : "Delete Base"}
            </Button>
          </div>  
        </div>  
      </main>  

    </React.Fragment>
  )
}

export default RoleDeleteComponent;
