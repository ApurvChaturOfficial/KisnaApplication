import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";
import fullRoute from "@/bLove/gRoute/bFullRoute";
import { NavigateFunction } from "react-router-dom";
import { z } from "zod";


export const formSchema = z.object({
  aTitle: z.string()
    .min(10, { message: "Please enter atlest 10 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
  aSubtitle: z.string()
    .min(10, { message: "Please enter atlest 10 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),
  aDescription: z.string()
    .min(15, { message: "Please enter atlest 15 characters" })
    .max(1000, { message: "Please enter atmost 1000 characters" }),
  aDetail: z.string()
    .min(15, { message: "Please enter atlest 15 characters" })
    .max(2000, { message: "Please enter atmost 2000 characters" }),
  aStatus: z.string()
    .min(5, { message: "Please select status" })
    .max(15, { message: "Please select status" }),
  aSlug: z.string()
    .min(10, { message: "Please enter atlest 10 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),

  cBaseOneToOne: z.string(),
  cBaseOneToMany: z.array(z.string()),
  cBaseManyToOne: z.string(),
  cBaseManyToMany: z.array(z.string()),
});

const apiResponseHandler = {
  updateAPIResponseHandler: async (data: z.infer<typeof formSchema>, createAPITrigger: any, form: any, navigate: NavigateFunction, APICall: any) => {
    try {
      const serverResponse = await createAPITrigger({ 
        params: { _id: APICall.retrieveAPIResponse.data.retrieve._id },
        body: {
          aTitle: data.aTitle,
          aSubtitle: data.aSubtitle,
          aDescription: data.aDescription,
          aDetail: data.aDetail,
          aStatus: data.aStatus ==="active" ? true : false,
          aSlug: data.aSlug,

          cBaseOneToOne: data.cBaseOneToOne,
          cBaseOneToMany: data.cBaseOneToMany,
          cBaseManyToOne: data.cBaseManyToOne,
          cBaseManyToMany: data.cBaseManyToMany,
        } 
      });

      // console.log(serverResponse)

      if (serverResponse.error && serverResponse.error.originalStatus === 404) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Cannot connect with server.",
          description: "There was a problem with server connection.",
        })  
      } 
      
      if (serverResponse.error && serverResponse.error?.data?.success === false) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: serverResponse.error.data.message || "There was an error occured.",
        })  
      }

      if (serverResponse.data && serverResponse.data?.success === true) {
        toast({
          variant: "default",
          title: "Yayy! Congratulations...",
          description: serverResponse.data.message,
        })
        form.reset();

        return navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute)
      }

      return;

    } catch (error: any) {
      return toast({
        variant: "destructive",
        title: "Uh oh! Bad code... Bad code.",
        description: "There was a problem with try block code",
      })
    }

  }

}

export default apiResponseHandler;
