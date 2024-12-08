import { NavigateFunction } from "react-router-dom";
import { z } from "zod";
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";
import fullRoute from "@/bLove/gRoute/bFullRoute";
import { formSchema } from "./cType";


const apiResponseHandler = {
  createAPIResponseHandler: async (data: z.infer<typeof formSchema>, createAPITrigger: any, form: any, navigate: NavigateFunction, specialCreateAPITrigger: any) => {
    try {
      const productVariantIDList: string[] = [];

      // Step 1: Create product variants and collect their IDs
      for (const each of data.dGeneratedVariant || []) {

        const serverResponse = await specialCreateAPITrigger.special2CreateAPITrigger({ body: {
          aTitle: `${data.aTitle} - ${each.name}`,
          aSubtitle: `${data.aTitle} - ${each.name}`,
          aDescription: `${data.aTitle} - ${each.name}`,
          aDetail: `${data.aTitle} - ${each.name}`,
          aStatus: data.aStatus ==="active" ? true : false,
          aSlug: `${data.aTitle} - ${each.name}`,
        } });
  
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
          productVariantIDList.push(serverResponse.data.create._id);
          toast({
            variant: "default",
            title: "Yayy! Congratulations...",
            description: serverResponse.data.message,
          })
        }
      }

      // console.log(productVariantIDList)

      // Step 2: Create the main product using the collected variant IDs
      const productPayload = {
        aTitle: data.aTitle,
        aSubtitle: data.aSubtitle,
        aDescription: data.aDescription,
        aDetail: data.aDetail,
        aStatus: data.aStatus === "active" ? true : false,
        aSlug: data.aSlug,

        cCategory: data.cCategory,
        cTag: data.cTag,
        cProductVariant: productVariantIDList, 

        dOption: data.dOption,
      };

      const productResponse = await createAPITrigger({ body: productPayload });

      if (productResponse.error && productResponse.error.originalStatus === 404) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Cannot connect with server.",
          description: "There was a problem with server connection.",
        });
      }

      if (productResponse.error && productResponse.error?.data?.success === false) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: productResponse.error.data.message || "An error occurred.",
        });
      }

      if (productResponse.data && productResponse.data?.success === true) {
        toast({
          variant: "default",
          title: "Product Created Successfully",
          description: productResponse.data.message,
        });

        form.reset();
        return navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.aProductRoute.aListRoute);
      }

      return;
    } catch (error: any) {
      // console.error("Error in createAPIResponseHandler:", error);

      return toast({
        variant: "destructive",
        title: "Uh oh! Bad code... Bad code.",
        description: "There was a problem with the try block code.",
      });
    }
  },

  // createAPIResponseHandler1: async (data: z.infer<typeof formSchema>, createAPITrigger: any, form: any, navigate: NavigateFunction, specialCreateAPITriggerObject: any) => {
  //   let getProductID
  //   let getOptionID
  //   let getProductVariantIDs = []
  //   let getGroupID
    
  //   try {
  //     // Step 1 : Create Product
  //     const serverResponse = await createAPITrigger({ body: {
  //       aTitle: data.aTitle,
  //       aSubtitle: data.aSubtitle,
  //       aDescription: data.aDescription,
  //       aDetail: data.aDetail,
  //       aStatus: data.aStatus ==="active" ? true : false,
  //       aSlug: data.aSlug,

  //       cCategory: data.cCategory,
  //       cTag: data.cTag,

  //     } });

  //     // console.log(serverResponse)

  //     if (serverResponse.error && serverResponse.error.originalStatus === 404) {
  //       return toast({
  //         variant: "destructive",
  //         title: "Uh oh! Cannot connect with server.",
  //         description: "There was a problem with server connection.",
  //       })  
  //     } 
      
  //     if (serverResponse.error && serverResponse.error?.data?.success === false) {
  //       return toast({
  //         variant: "destructive",
  //         title: "Uh oh! Something went wrong.",
  //         description: serverResponse.error.data.message || "There was an error occured.",
  //       })  
  //     }

  //     if (serverResponse.data && serverResponse.data?.success === true) {
  //       toast({
  //         variant: "default",
  //         title: "Yayy! Congratulations...",
  //         description: serverResponse.data.message,
  //       })


  //       // ------------------------------------------------------------------------------------
  //       getProductID = serverResponse.data.create._id

  //       // Step 2 : Create Option
  //       const serverResponse1 = await specialCreateAPITriggerObject.special1CreateAPITrigger({ body: {
  //         aTitle: `Options for ${data.aTitle} Product`,
  //         aSubtitle: "Just some random string",
  //         aDescription: "Just some random string",
  //         aDetail: "Just some random string",
  //         aStatus: data.aStatus ==="active" ? true : false,
  //         aSlug: "Just some random string",

  //         cProduct: getProductID,

  //         dWhatAreThose: data.dOption,
  //       } });
  
  //       // console.log(serverResponse1)
  
  //       if (serverResponse1.error && serverResponse1.error.originalStatus === 404) {
  //         return toast({
  //           variant: "destructive",
  //           title: "Uh oh! Cannot connect with server.",
  //           description: "There was a problem with server connection.",
  //         })  
  //       } 
        
  //       if (serverResponse1.error && serverResponse1.error?.data?.success === false) {
  //         return toast({
  //           variant: "destructive",
  //           title: "Uh oh! Something went wrong.",
  //           description: serverResponse1.error.data.message || "There was an error occured.",
  //         })  
  //       }
  
  //       if (serverResponse1.data && serverResponse1.data?.success === true) {
  //         toast({
  //           variant: "default",
  //           title: "Yayy! Congratulations...",
  //           description: serverResponse1.data.message,
  //         })

  //         // ------------------------------------------------------------------------------------
  //         getOptionID = serverResponse1.data.create._id

  //         // Step 3 : Create Product Variants
  //         for (const each of data.dGeneratedVariant || []) {

  //           const serverResponse = await specialCreateAPITriggerObject.special2CreateAPITrigger({ body: {
  //             aTitle: `${data.aTitle} - ${each.name}`,
  //             aSubtitle: `Variant for ${data.aTitle} Product`,
  //             aDescription: "Just some random string",
  //             aDetail: "Just some random string",
  //             aStatus: data.aStatus ==="active" ? true : false,
  //             aSlug: "Just some random string",

  //             cOption: getOptionID,
  //             cProduct: getProductID,

  //             dSelectedOption: each.selectedOption
  //           } });
      
  //           // console.log(serverResponse)
      
  //           if (serverResponse.error && serverResponse.error.originalStatus === 404) {
  //             return toast({
  //               variant: "destructive",
  //               title: "Uh oh! Cannot connect with server.",
  //               description: "There was a problem with server connection.",
  //             })  
  //           } 
            
  //           if (serverResponse.error && serverResponse.error?.data?.success === false) {
  //             return toast({
  //               variant: "destructive",
  //               title: "Uh oh! Something went wrong.",
  //               description: serverResponse.error.data.message || "There was an error occured.",
  //             })  
  //           }
      
  //           if (serverResponse.data && serverResponse.data?.success === true) {
  //             getProductVariantIDs.push(serverResponse.data.create._id);


  //             console.log(getProductID)
  //             console.log(getOptionID)
  //             console.log(getProductVariantIDs)

  //             toast({
  //               variant: "default",
  //               title: "Yayy! Congratulations...",
  //               description: serverResponse.data.message,
  //             })
  //           }
  //         }

  //         // Step 4 : Create Group
  //         const serverResponse2 = await specialCreateAPITriggerObject.special3CreateAPITrigger({ body: {
  //           aTitle: `Group for ${data.aTitle} Product`,
  //           aSubtitle: "Just some random string",
  //           aDescription: "Just some random string",
  //           aDetail: "Just some random string",
  //           aStatus: data.aStatus ==="active" ? true : false,
  //           aSlug: "Just some random string",
  //         } });
    
  //         // console.log(serverResponse2)
    
  //         if (serverResponse2.error && serverResponse2.error.originalStatus === 404) {
  //           return toast({
  //             variant: "destructive",
  //             title: "Uh oh! Cannot connect with server.",
  //             description: "There was a problem with server connection.",
  //           })  
  //         } 
          
  //         if (serverResponse2.error && serverResponse2.error?.data?.success === false) {
  //           return toast({
  //             variant: "destructive",
  //             title: "Uh oh! Something went wrong.",
  //             description: serverResponse2.error.data.message || "There was an error occured.",
  //           })  
  //         }
    
  //         if (serverResponse2.data && serverResponse2.data?.success === true) {
  //           toast({
  //             variant: "default",
  //             title: "Yayy! Congratulations...",
  //             description: serverResponse2.data.message,
  //           })            
  //         }
  //         // ------------------------------------------------------------------------------------
  //       }
  //       // ------------------------------------------------------------------------------------

  //       // form.reset();
  //       // return navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.aProductRoute.aListRoute)
  //     }

  //     return;

  //   } catch (error: any) {
  //     return toast({
  //       variant: "destructive",
  //       title: "Uh oh! Bad code... Bad code.",
  //       description: "There was a problem with try block code",
  //     })
  //   }

  // }
};

export default apiResponseHandler;

