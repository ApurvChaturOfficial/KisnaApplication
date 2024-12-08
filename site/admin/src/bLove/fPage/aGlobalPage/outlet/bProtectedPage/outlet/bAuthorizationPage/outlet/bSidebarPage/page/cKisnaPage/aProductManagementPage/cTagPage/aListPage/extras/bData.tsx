import { z } from "zod";
import { listSchema } from "./cType";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const data = (APICall: any) => {
  return ({
    header: {
      title: "Tag List",
      subtitle: "Here's a list of your tasks for this month!",
      buttons: [
        { label: "Create Tag", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.cTagRoute.bCreateRoute }
      ]
    },
    content: {
      list: APICall.listAPIResponse.isLoading ? null : 
      APICall.listAPIResponse.isError ? null :
        APICall.listAPIResponse.isSuccess ? (
          APICall.listAPIResponse.data.success ? (
            APICall.listAPIResponse.data.list.length > 0 ? (
              z.array(listSchema).parse(APICall.listAPIResponse.data.list).reverse()
            ) : []
          ) : []
        ) : []
    }
  })
}

export default data;