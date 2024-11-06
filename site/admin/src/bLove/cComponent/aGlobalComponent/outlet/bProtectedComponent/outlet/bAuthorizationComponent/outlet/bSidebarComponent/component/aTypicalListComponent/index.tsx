import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { taskSchema } from "./data/schema"
import { tasks } from "./data/tasks"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { Link } from "react-router-dom"
import fullRoute from "@/bLove/gRoute/bFullRoute"

// Simulate a database read for tasks.
function getTasks() {
  return z.array(taskSchema).parse(tasks); // Validate and parse with Zod
}

type TypicalListComponentType = {
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

export default function TypicalListComponent(props: TypicalListComponentType) {
  const tasks = getTasks();

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{ props.extras.data.title }</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
            <Button asChild variant="secondary" >
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.bCreateRoute} >Create</Link>
            </Button>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
