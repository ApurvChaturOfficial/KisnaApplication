import React from "react"

import { z } from "zod"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"


import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/aConnection/bShadcnConnection/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/aConnection/bShadcnConnection/components/ui/select"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { Input } from "@/aConnection/bShadcnConnection/components/ui/input"
import { Textarea } from "@/aConnection/bShadcnConnection/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/aConnection/bShadcnConnection/components/ui/radio-group"
import { Checkbox } from "@/aConnection/bShadcnConnection/components/ui/checkbox"
import { Separator } from "@/aConnection/bShadcnConnection/components/ui/separator"
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/aConnection/bShadcnConnection/components/ui/table"
import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area"
import { Label } from "@/aConnection/bShadcnConnection/components/ui/label"


type TypicalCreateComponentType = {
  ReduxCall: any
  APICall: {
    createAPITrigger: any,
    createAPIResponse: any,
  }
  extras: {
    apiResponseHandler: {
      createAPIResponseHandler: any
    },
    data: any,
    formSchema: any,
    formDefaultValue: any,
  }
}

const TypicalCreateComponent = (props: TypicalCreateComponentType) => {
  // Destructure Props
  const { APICall, extras } = props;

  // Variable
  const navigate = useNavigate()

  // Form
  const form = useForm<z.infer<typeof extras.formSchema>>({
    resolver: zodResolver(extras.formSchema),
    mode: "onChange",
    defaultValues: extras.formDefaultValue
  })

  // Submit Handler
  const onSubmit = async (data: z.infer<typeof extras.formSchema>) => {
    console.log(data)

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    extras.apiResponseHandler.createAPIResponseHandler(data, APICall.createAPITrigger, form, navigate)
    // extras.apiResponseHandler.createAPIResponseHandler(data, ReduxCall, APICall.createAPITrigger, form, navigate)
  }   

  // JSX
  return (
    <React.Fragment>
      <div className="flex-1 lg:max-w-2xl">
        <div className="mb-8" >
          <h2 className="text-3xl font-bold tracking-tight">{extras.data.header.title}</h2>
          <p className="text-muted-foreground">
            {extras.data.header.subtitle}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {extras.data.content.sections.map((eachSection: any, indexSection: number) => eachSection.display && (
              <React.Fragment key={indexSection} >
                <div>
                  <h3 className="text-lg font-medium">{indexSection+1}) {eachSection.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{eachSection.subtitle}</p>
                  <Separator />
                </div>
  
                <div className="space-y-8">
                  {eachSection.inputs.map((eachInput: any, indexInput: any) => (
                    <React.Fragment>
                      {/* For I/P Type: Text, Email, Number */}
                      {((eachInput.type === "text" || eachInput.type === "email" || eachInput.type === "number" || eachInput.type === "password") && 
                        <div className="grid gap-3" key={indexInput} >
                          <FormField
                            control={form.control}
                            name={eachInput.name}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{eachInput.label} :</FormLabel>
                                <FormControl>
                                  <Input placeholder={eachInput.placeholder} type={eachInput.type} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
  
                      {/* For I/P Type: Textarea */}
                      {((eachInput.type === "textarea") && 
                        <div className="grid gap-3" key={indexInput} >
                          <FormField
                            control={form.control}
                            name={eachInput.name}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{eachInput.label} :</FormLabel>
                                <FormControl>
                                  <Textarea className="min-h-24" placeholder={eachInput.placeholder} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {/* For I/P Type: Select */}
                      {((eachInput.type === "select") && 
                        <div className="grid gap-3" key={indexInput} >
                          <FormField
                            control={form.control}
                            name={eachInput.name}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{eachInput.label} :</FormLabel>
                                <Select onValueChange={field.onChange} >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder={eachInput.placeholder} />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>{
                                    eachInput.options?.map((eachOption: any, indexOption: number) => (
                                      <SelectItem key={indexOption} value={eachOption.value}>{eachOption.label}</SelectItem>
                                    ))
                                  }</SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {/* For I/P Type: Radio */}
                      {((eachInput.type === "radio") && 
                        <div className="grid gap-3" key={indexInput} >
                          <FormField
                            control={form.control}
                            name={eachInput.name}
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <div className="mb-4">
                                  <FormLabel>{eachInput.label}:</FormLabel>
                                  <FormDescription>
                                    {/* Select the items you want to. */}
                                  </FormDescription>
                                </div>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    {eachInput.options?.map((each: any, index: number) => (
                                      <React.Fragment key={index} >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                          <FormControl>
                                            <RadioGroupItem value={each.value} />
                                          </FormControl>
                                          <FormLabel className="font-normal">
                                            {each.label}
                                          </FormLabel>
                                        </FormItem>
                                      </React.Fragment>
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>                            
                            )}
                          />
                        </div>
                      )}

                      {/* For I/P Type: Checkbox */}
                      {((eachInput.type === "checkbox") &&
                        <div className="grid gap-3" key={indexInput} >
                          <FormField
                            control={form.control}
                            name={eachInput.name}
                            render={() => (
                              <FormItem>
                                <div className="mb-4">
                                  <FormLabel>{eachInput.label}:</FormLabel>
                                  <FormDescription>
                                    {/* Select the items you want to. */}
                                  </FormDescription>
                                </div>
                                {eachInput.options?.map((each: any, index: number) => (
                                  <FormField
                                    key={index}
                                    control={form.control}
                                    name={eachInput.name}
                                    render={({ field }) => {
                                      return (
                                        <FormItem
                                          key={index}
                                          className="flex flex-row items-start space-x-3 space-y-0"
                                        >
                                          <FormControl>
                                            <Checkbox
                                              checked={field.value?.includes(each.value)}
                                              onCheckedChange={(checked) => {
                                                return checked
                                                  ? field.onChange([...field.value, each.value])
                                                  : field.onChange(
                                                      field.value?.filter(
                                                        (value: any) => value !== each.value
                                                      )
                                                    )
                                              }}
                                            />
                                          </FormControl>
                                          <FormLabel className="text-sm font-normal">
                                            {each.label}
                                          </FormLabel>
                                        </FormItem>
                                      )
                                    }}
                                  />
                                ))}
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {/* For I/P Type: Special Checkbox */}
                      {((eachInput.type === "special-checkbox") &&
                        <div className="grid gap-3" key={indexInput} >

                          <FormField
                            control={form.control}
                            name={eachInput.name}
                            render={() => (
                              <FormItem>
                                <div className="mb-4">
                                  <FormLabel>{eachInput.label}:</FormLabel>
                                  <FormDescription>
                                    {/* Select the items you want to. */}
                                  </FormDescription>
                                </div>
                                {eachInput.data?.map((each: any, index: number) => (
                                  <>
                                    <FormItem>
                                      <div className="flex flex-row mb-4 gap-4">
                                        <FormLabel>{eachInput.label}:</FormLabel>
                                        <FormField
                                          key={index}
                                          control={form.control}
                                          name={eachInput.name}
                                          render={({ field }) => {
                                            return (
                                              <FormItem
                                                key={index}
                                                className="flex flex-row items-start space-x-3 space-y-0"
                                              >
                                                <FormControl>
                                                  <Checkbox
                                                    checked={field.value?.includes(each.value)}
                                                    onCheckedChange={(checked) => {
                                                      return checked
                                                        ? field.onChange([...field.value, each.value])
                                                        : field.onChange(
                                                            field.value?.filter(
                                                              (value: any) => value !== each.value
                                                            )
                                                          )
                                                    }}
                                                  />
                                                </FormControl>
                                                <FormLabel className="text-sm font-normal">
                                                  {each.label}
                                                </FormLabel>
                                              </FormItem>
                                            )
                                          }}
                                        />
                                      </div>
                                    </FormItem>
                                  </>
                                ))}
                                <FormMessage />
                              </FormItem>
                            )}
                          />


                          <Label htmlFor={eachInput.label}>{eachInput.label} :</Label>
                          <ScrollArea>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  {eachInput.columns.map((eachColumn: any, indexColumn: number) => (
                                    <TableHead key={indexColumn} className="min-w-[100px]">{eachColumn}</TableHead>
                                  ))}
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {eachInput.data}
                              </TableBody>
                            </Table>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>

                      )}

                    </React.Fragment>
                  ))}
                </div>
              </React.Fragment>
            ))}

            <Button type="submit">Create</Button>
          </form>
        </Form>
      </div>
    </React.Fragment>      
  )
}  

export default TypicalCreateComponent;
