import { ColumnDef } from "@tanstack/react-table"


import { statuses } from "../data/data"
import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { cn } from "@/aConnection/bShadcnConnection/lib/utils"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { CheckCircle } from "lucide-react"

export const columns: ColumnDef<Task>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate font-medium">
            {row.getValue("id")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "supplier",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Supplier" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate font-medium">
            {row.getValue("supplier")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className={cn(
          "flex w-[100px] items-center",
          status.value === "unfullfilled" && "text-red-500",
          status.value === "partiallyFullfilled" && "text-yellow-500",
          status.value === "fullfilled" && "text-green-500",
        )}>
          {status.icon && (
            <status.icon className={cn(
              "mr-2 h-4 w-4 text-muted-foreground",
              status.value === "unfullfilled" && "text-red-500",
              status.value === "partiallyFullfilled" && "text-yellow-500",
              status.value === "fullfilled" && "text-green-500",
            )} />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "dateCreated",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date Created" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate font-medium">
            {row.getValue("dateCreated")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "lastUpdatedOn",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Updated On" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate font-medium">
            {row.getValue("lastUpdatedOn")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "poValueAED",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PO Value AED" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[450px] truncate font-medium">
            {row.getValue("poValueAED")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "close",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Close" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <Button size="sm" >
            <CheckCircle /> {row.getValue("close")}
          </Button>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions 
        row={row} route="product-catalogue" />
    ),
  },
]
