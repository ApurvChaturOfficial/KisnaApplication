import React, { useEffect } from "react"
import { z } from "zod"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { formSchema } from "@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/eSetting/dBasePage/dUpdatePage/extras/aAPIResponseHandler"
import fullRoute from "@/bLove/gRoute/bFullRoute"

import {
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/aConnection/bShadcnConnection/components/ui/card"
import { Input } from "@/aConnection/bShadcnConnection/components/ui/input"
import { Label } from "@/aConnection/bShadcnConnection/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/aConnection/bShadcnConnection/components/ui/select"
import { Textarea } from "@/aConnection/bShadcnConnection/components/ui/textarea"
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/aConnection/bShadcnConnection/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/aConnection/bShadcnConnection/components/ui/radio-group"
import { Checkbox } from "@/aConnection/bShadcnConnection/components/ui/checkbox"


type BaseUpdateComponentType = {
  ReduxCall: any
  APICall: {
    retrieveAPIResponse: any,
    updateAPITrigger: any,
    updateAPIResponse: any
    baseOneToOneListAPIResponse: any,
    baseOneToManyListAPIResponse: any,
    baseManyToOneListAPIResponse: any,
    baseManyToManyListAPIResponse: any,
  }
  extras: {
    apiResponseHandler: {
      updateAPIResponseHandler: any
    },
  }
}

const BaseUpdateComponent = (props: BaseUpdateComponentType) => {
  // Destructure Props
  const { APICall, extras } = props;

  // Variable
  const navigate = useNavigate()

  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      aTitle: "",
      aSubtitle: "",
      aDescription: "",
      aDetail: "",
      aStatus: "",
      aSlug: "",

      cBaseOneToOne: "",
      cBaseOneToMany: [],
      cBaseManyToOne: "",
      cBaseManyToMany: [],
    }
  })
  
  // Submit Handler
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    extras.apiResponseHandler.updateAPIResponseHandler(data, APICall.updateAPITrigger, form, navigate, APICall)
  } 

  // All Render
  // First Render
  useEffect(() => {
    APICall.retrieveAPIResponse.isLoading ? null : 
    APICall.retrieveAPIResponse.isError ? null :
    APICall.retrieveAPIResponse.isSuccess ? (
      APICall.retrieveAPIResponse.data.success ? (

        form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),
        form.setValue("aSubtitle", APICall.retrieveAPIResponse.data.retrieve?.aSubtitle),
        form.setValue("aDescription", APICall.retrieveAPIResponse.data.retrieve?.aDescription),
        form.setValue("aDetail", APICall.retrieveAPIResponse.data.retrieve?.aDetail),
        form.setValue("aStatus", APICall.retrieveAPIResponse.data.retrieve?.aStatus ? "active" : "inactive"),
        form.setValue("aSlug", APICall.retrieveAPIResponse.data.retrieve?.aSlug),

        form.setValue("cBaseOneToOne", APICall.retrieveAPIResponse.data.retrieve?.cBaseOneToOne?._id),
        form.setValue("cBaseOneToMany", APICall.retrieveAPIResponse.data.retrieve?.cBaseOneToMany?.map((each: any) => each._id)),
        form.setValue("cBaseManyToOne", APICall.retrieveAPIResponse.data.retrieve?.cBaseManyToOne?._id),
        form.setValue("cBaseManyToMany", APICall.retrieveAPIResponse.data.retrieve?.cBaseManyToMany?.map((each: any) => each._id))

      ) : null
    ) : null
  }, [APICall.retrieveAPIResponse])    
  
  // JSX
  return (
    <React.Fragment>

      {/* {
        APICall.retrieveAPIResponse.isLoading ? "Loading..." : 
        APICall.retrieveAPIResponse.isError ? "Error..." :
        APICall.retrieveAPIResponse.isSuccess ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">

              <FormField
                control={form.control}
                name="aTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title..." {...field} />
                      </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              <FormField
                control={form.control}
                name="aSubtitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subtitle</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter subtitle..." {...field} />
                      </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              <FormField
                control={form.control}
                name="aDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter description..." {...field} />
                      </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              <FormField
                control={form.control}
                name="aDetail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detail</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter detail..." {...field} />
                      </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              <FormField
                control={form.control}
                name="aStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactve">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              <FormField
                control={form.control}
                name="aSlug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter slug..." {...field} />
                      </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit"
                disabled={APICall.updateAPIResponse.isLoading}
              >
                {APICall.updateAPIResponse.isLoading ? "Submitting..." : "Submit"}
              </Button>

            </form>
          </Form>
        ) : "Let me understand first"
      } */}

      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">

          {
            APICall.retrieveAPIResponse.isLoading ? "Loading..." : 
            APICall.retrieveAPIResponse.isError ? "Error..." :
            APICall.retrieveAPIResponse.isSuccess ? (
              <React.Fragment>
                {
                  APICall.retrieveAPIResponse.data.success ? (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">

                        <div className="flex items-center gap-4">
                          <Button variant="outline" size="icon" className="h-7 w-7">
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Back</span>
                          </Button>
                          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                            Base Update
                          </h1>
                          <div className="hidden items-center gap-2 md:ml-auto md:flex">
                            <Button 
                              size="sm"
                              type="submit"
                              disabled={APICall.updateAPIResponse.isLoading}
                            >
                              {APICall.updateAPIResponse.isLoading ? "Updating..." : "Update Base"}
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
                        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                            <Card x-chunk="dashboard-07-chunk-0">
                              <CardHeader>
                                <CardTitle>Basic Information</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="grid gap-6">

                                  {/* Title */}
                                  <div className="grid gap-3">
                                    <FormField
                                      control={form.control}
                                      name="aTitle"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Title :</FormLabel>
                                          <FormControl>
                                            <Input placeholder="e.g. 'Stella Watch Charm' " {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                  
                                  {/* Subtitle */}
                                  <div className="grid gap-3">
                                    <FormField
                                      control={form.control}
                                      name="aSubtitle"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Subtitle :</FormLabel>
                                          <FormControl>
                                            <Input placeholder="e.g. 'A Timeless Accessory for Every Occasion'" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                  
                                  {/* Description */}
                                  <div className="grid gap-3">
                                    <FormField
                                      control={form.control}
                                      name="aDescription"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Description :</FormLabel>
                                          <FormControl>
                                            <Textarea className="min-h-24" placeholder="e.g 'Elevate your style with the Stella Watch Charm, a beautifully designed accessory that combines the elegance of fine jewelry with the functionality of a classic timepiece.'" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                  
                                  {/* Detail */}
                                  <div className="grid gap-3">
                                    <FormField
                                      control={form.control}
                                      name="aDetail"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Detail :</FormLabel>
                                          <FormControl>
                                            <Textarea className="min-h-48" placeholder="e.g. 'Whether you're attending a formal event or adding a touch of sophistication to your everyday look, this charm is the perfect complement to any outfit. Crafted with precision and attention to detail, the Stella Watch Charm is a versatile piece that can be easily attached to bracelets, necklaces, or bags. Its sleek design and delicate charm make it a must-have for fashion enthusiasts who appreciate luxury in the finer details.'" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                  
                                  {/* Status */}
                                  <div className="grid gap-3">
                                    <FormField
                                      control={form.control}
                                      name="aStatus"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Status :</FormLabel>
                                          <Select onValueChange={field.onChange} defaultValue={field.value} >
                                            <FormControl>
                                              <SelectTrigger>
                                                <SelectValue placeholder="--Select status--" />
                                              </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                              <SelectItem value="active">Active</SelectItem>
                                              <SelectItem value="inactve">Inactive</SelectItem>
                                            </SelectContent>
                                          </Select>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                  
                                  {/* Slug */}
                                  <div className="grid gap-3">
                                    <FormField
                                      control={form.control}
                                      name="aSlug"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Slug :</FormLabel>
                                          <FormControl>
                                            <Input placeholder="e.g: 'stella-watch-charm'" {...field} />
                                            </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
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
                                      {APICall.retrieveAPIResponse.data.retrieve.bUpdatedBy.eFirstname || "--N/A--"}
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

                                  {/* Base One To One */}
                                  <div className="grid gap-3">
                                    <FormField
                                      control={form.control}
                                      name="cBaseOneToOne"
                                      render={({ field }) => (
                                        <FormItem className="space-y-3">
                                          <div className="mb-4">
                                            <FormLabel>Base One To One:</FormLabel>
                                            <FormDescription>
                                              Select the items you want to.
                                            </FormDescription>
                                          </div>
                                          {
                                            APICall.baseOneToOneListAPIResponse.isLoading ? <FormDescription>Loading...</FormDescription> : 
                                            APICall.baseOneToOneListAPIResponse.isError ? <FormDescription>Error...</FormDescription> :
                                            APICall.baseOneToOneListAPIResponse.isSuccess ? (
                                              APICall.baseOneToOneListAPIResponse.data.success ? (
                                                APICall.baseOneToOneListAPIResponse.data.list.length > 0 ? (
                                                  <React.Fragment>
                                                    <FormControl>
                                                      <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                      >
                                                        {APICall.baseOneToOneListAPIResponse.data.list.map((each: any, index: number) => (
                                                          <React.Fragment key={index} >
                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                              <FormControl>
                                                                <RadioGroupItem value={each._id} />
                                                              </FormControl>
                                                              <FormLabel className="font-normal">
                                                                {each.aTitle}
                                                              </FormLabel>
                                                            </FormItem>
                                                          </React.Fragment>
                                                        )).reverse()}
                                                      </RadioGroup>
                                                    </FormControl>
                                                  </React.Fragment>
                                                ) : (
                                                  <FormDescription>Empty List</FormDescription>
                                                )
                                              ) : (
                                                <FormDescription>Backend Error</FormDescription>
                                              )
                                            ) : (
                                              <FormDescription>Let me understand first</FormDescription>
                                            ) 
                                          }
                                          <FormMessage />
                                        </FormItem>                            
                                      )}
                                    />
                                  </div>
                                  
                                  {/* Base One To Many */}
                                  <div className="grid gap-3">
                                    <FormField
                                      control={form.control}
                                      name="cBaseOneToMany"
                                      render={() => (
                                        <FormItem>
                                          <div className="mb-4">
                                            <FormLabel>Base One To Many:</FormLabel>
                                            <FormDescription>
                                              Select the items you want to.
                                            </FormDescription>
                                          </div>
                                          {
                                            APICall.baseOneToManyListAPIResponse.isLoading ? <FormDescription>Loading...</FormDescription> : 
                                            APICall.baseOneToManyListAPIResponse.isError ? <FormDescription>Error...</FormDescription> :
                                            APICall.baseOneToManyListAPIResponse.isSuccess ? (
                                              APICall.baseOneToManyListAPIResponse.data.success ? (
                                                APICall.baseOneToManyListAPIResponse.data.list.length > 0 ? (
                                                  <React.Fragment>
                                                    {APICall.baseOneToManyListAPIResponse.data.list.map((each: any, index: number) => (
                                                      <FormField
                                                        key={index}
                                                        control={form.control}
                                                        name="cBaseOneToMany"
                                                        render={({ field }) => {
                                                          return (
                                                            <FormItem
                                                              key={index}
                                                              className="flex flex-row items-start space-x-3 space-y-0"
                                                            >
                                                              <FormControl>
                                                                <Checkbox
                                                                  checked={field.value?.includes(each._id)}
                                                                  onCheckedChange={(checked) => {
                                                                    return checked
                                                                      ? field.onChange([...field.value, each._id])
                                                                      : field.onChange(
                                                                          field.value?.filter(
                                                                            (value) => value !== each._id
                                                                          )
                                                                        )
                                                                  }}
                                                                />
                                                              </FormControl>
                                                              <FormLabel className="text-sm font-normal">
                                                                {each.aTitle}
                                                              </FormLabel>
                                                            </FormItem>
                                                          )
                                                        }}
                                                      />
                                                    ))}
                                                  </React.Fragment>
                                                ) : (
                                                  <FormDescription>Empty List</FormDescription>
                                                )
                                              ) : (
                                                <FormDescription>Backend Error</FormDescription>
                                              )
                                            ) : (
                                              <FormDescription>Let me understand first</FormDescription>
                                            ) 
                                          }
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                  
                                  {/* Base Many To One */}
                                  <div className="grid gap-3">
                                    <FormField
                                      control={form.control}
                                      name="cBaseManyToOne"
                                      render={({ field }) => (
                                        <FormItem className="space-y-3">
                                          <div className="mb-4">
                                            <FormLabel>Base Many To One:</FormLabel>
                                            <FormDescription>
                                              Select the items you want to.
                                            </FormDescription>
                                          </div>
                                          {
                                            APICall.baseManyToOneListAPIResponse.isLoading ? <FormDescription>Loading...</FormDescription> : 
                                            APICall.baseManyToOneListAPIResponse.isError ? <FormDescription>Error...</FormDescription> :
                                            APICall.baseManyToOneListAPIResponse.isSuccess ? (
                                              APICall.baseManyToOneListAPIResponse.data.success ? (
                                                APICall.baseManyToOneListAPIResponse.data.list.length > 0 ? (
                                                  <React.Fragment>
                                                    <FormControl>
                                                      <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                      >
                                                        {APICall.baseManyToOneListAPIResponse.data.list.map((each: any, index: number) => (
                                                          <React.Fragment key={index} >
                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                              <FormControl>
                                                                <RadioGroupItem value={each._id} />
                                                              </FormControl>
                                                              <FormLabel className="font-normal">
                                                                {each.aTitle}
                                                              </FormLabel>
                                                            </FormItem>
                                                          </React.Fragment>
                                                        )).reverse()}
                                                      </RadioGroup>
                                                    </FormControl>
                                                  </React.Fragment>
                                                ) : (
                                                  <FormDescription>Empty List</FormDescription>
                                                )
                                              ) : (
                                                <FormDescription>Backend Error</FormDescription>
                                              )
                                            ) : (
                                              <FormDescription>Let me understand first</FormDescription>
                                            ) 
                                          }
                                          <FormMessage />
                                        </FormItem>                            
                                      )}
                                    />
                                  </div>
                                  
                                  {/* Base Many To Many */}
                                  <div className="grid gap-3">
                                    <FormField
                                      control={form.control}
                                      name="cBaseOneToMany"
                                      render={() => (
                                        <FormItem>
                                          <div className="mb-4">
                                            <FormLabel>Base Many To Many:</FormLabel>
                                            <FormDescription>
                                              Select the items you want to.
                                            </FormDescription>
                                          </div>
                                          {
                                            APICall.baseManyToManyListAPIResponse.isLoading ? <FormDescription>Loading...</FormDescription> : 
                                            APICall.baseManyToManyListAPIResponse.isError ? <FormDescription>Error...</FormDescription> :
                                            APICall.baseManyToManyListAPIResponse.isSuccess ? (
                                              APICall.baseManyToManyListAPIResponse.data.success ? (
                                                APICall.baseManyToManyListAPIResponse.data.list.length > 0 ? (
                                                  <React.Fragment>
                                                    {APICall.baseManyToManyListAPIResponse.data.list.map((each: any, index: number) => (
                                                      <FormField
                                                        key={index}
                                                        control={form.control}
                                                        name="cBaseManyToMany"
                                                        render={({ field }) => {
                                                          return (
                                                            <FormItem
                                                              key={index}
                                                              className="flex flex-row items-start space-x-3 space-y-0"
                                                            >
                                                              <FormControl>
                                                                <Checkbox
                                                                  checked={field.value?.includes(each._id)}
                                                                  onCheckedChange={(checked) => {
                                                                    return checked
                                                                      ? field.onChange([...field.value, each._id])
                                                                      : field.onChange(
                                                                          field.value?.filter(
                                                                            (value) => value !== each._id
                                                                          )
                                                                        )
                                                                  }}
                                                                />
                                                              </FormControl>
                                                              <FormLabel className="text-sm font-normal">
                                                                {each.aTitle}
                                                              </FormLabel>
                                                            </FormItem>
                                                          )
                                                        }}
                                                      />
                                                    ))}
                                                  </React.Fragment>
                                                ) : (
                                                  <FormDescription>Empty List</FormDescription>
                                                )
                                              ) : (
                                                <FormDescription>Backend Error</FormDescription>
                                              )
                                            ) : (
                                              <FormDescription>Let me understand first</FormDescription>
                                            ) 
                                          }
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                                                    
                                </div>
                              </CardContent>
                            </Card>
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
                            size="sm"
                            type="submit"
                            disabled={APICall.updateAPIResponse.isLoading}
                          >
                            {APICall.updateAPIResponse.isLoading ? "Updating..." : "Update Base"}
                          </Button>
                        </div>
                      
                      </form>
                    </Form>
                  ) : "Backend Error"
                }
              </React.Fragment>
            ) :
            "Let me understand first"
          }

        </div>  
      </main>  
    </React.Fragment>      
  )
}  

export default BaseUpdateComponent;
