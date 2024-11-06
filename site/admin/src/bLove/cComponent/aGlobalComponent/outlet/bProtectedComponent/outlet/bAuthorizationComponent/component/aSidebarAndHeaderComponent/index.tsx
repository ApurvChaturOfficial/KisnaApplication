import React from "react"
import { Link, useLocation } from 'react-router-dom'
import {
  Baseline,
  CircleUser,
  Gem,
  GemIcon,
  Home,
  IceCream2Icon,
  Package,
  Package2,
  PanelLeft,
  Rabbit,
  Search,
  Settings,
  ShoppingCart,
  Squirrel,
  Timer,
  Users2,
} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/aConnection/bShadcnConnection/components/ui/breadcrumb"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu"
import { Input } from "@/aConnection/bShadcnConnection/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/aConnection/bShadcnConnection/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/tooltip"

import { ModeToggle } from '@/aConnection/bShadcnConnection/components/mode-toggle'
import { cn } from "@/aConnection/bShadcnConnection/lib/utils"
import fullRoute from "@/bLove/gRoute/bFullRoute"
import endpointRoute from "@/bLove/gRoute/aEndpointRoute"


const SidebarAndHeaderComponent = ({ children }: { children: React.ReactNode }) => {
  // Variables
  const { pathname } = useLocation();

  // JSX
  return (
    <React.Fragment>
      <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 py-4">

              {/* Logo */}
              <Link to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute} className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base" >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">PegaSYS - Admin</span>
              </Link>

              {/* Menu */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aDashboardRoute} 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aDashboardRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cOrderRoute.aListRoute} 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cOrderRoute.aListRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Orders</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Orders</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.fProductManagementRoute.aProductRoute.aListRoute} 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.fProductManagementRoute.aProductRoute.aListRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <IceCream2Icon className="h-5 w-5" />
                    <span className="sr-only">Product Management</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Product Management</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute} 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <Timer className="h-5 w-5" />
                    <span className="sr-only">Countdown</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Countdown</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to="diamond-price-calculator" 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <GemIcon className="h-5 w-5" />
                    <span className="sr-only">Diamond Price Calculator</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Diamond Price Calculator</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.dUserAdminiatrationRoute.aMenuRoute.aListRoute} 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.dUserAdministrationRoute.aMenuRoute.aListRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <Rabbit className="h-5 w-5" />
                    <span className="sr-only">User Administration</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">User Administration</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.bBaseManyToOneRoute.aListRoute} 
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.substring(1) === endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.bBaseManyToOneRoute.aListRoute && "bg-accent text-accent-foreground "
                    )} 
                  >
                    <Baseline className="h-5 w-5" />
                    <span className="sr-only">Base</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Base</TooltipContent>
              </Tooltip>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.aSettingRoute} className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8" >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </nav>
          </aside>
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}
                      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                      <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                      <span className="sr-only">PegaSYS - Admin</span>
                    </Link>
                    <Link
                      to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aDashboardRoute}
                      className={cn("flex items-center gap-4 px-2.5", 
                        pathname.substring(1) === endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aDashboardRoute ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      ) }
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cOrderRoute.aListRoute}
                      className={cn("flex items-center gap-4 px-2.5", 
                        pathname.substring(1) === endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cOrderRoute.aListRoute ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      ) }
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                    </Link>
                    <Link
                      to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bProductRoute.aListRoute}
                      className={cn("flex items-center gap-4 px-2.5", 
                        pathname.substring(1) === endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bProductRoute.aListRoute ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      ) }
                    >
                      <Package className="h-5 w-5" />
                      Products
                    </Link>
                    <Link
                      to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}
                      className={cn("flex items-center gap-4 px-2.5", 
                        pathname.substring(1) === endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      ) }
                    >
                      <Users2 className="h-5 w-5" />
                      Counter
                    </Link>
                    <Link
                      to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.bBaseManyToOneRoute.aListRoute}
                      className={cn("flex items-center gap-4 px-2.5", 
                        pathname.substring(1) === endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eSettingRoute.bBaseManyToOneRoute.aListRoute ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      ) }
                    >
                      <Baseline className="h-5 w-5" />
                      Base
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={"#"}>Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="#">Products</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>All Products</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
              </div>
              <ModeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                  >
                    {true ? <CircleUser className="h-5 w-5" /> : <img
                      src="/placeholder-user.jpg"
                      width={36}
                      height={36}
                      alt="Avatar"
                      className="overflow-hidden rounded-full"
                    />}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.aProfileRetrieveRoute} >View Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.bProfileUpdateRoute} >Edit Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.cProfilePasswordUpdateRoute} >Change Password</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.dProfileDeleteRoute} >Close Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            { children }
          </div>
        </div>
      </TooltipProvider>
    </React.Fragment>
  )
}

export default SidebarAndHeaderComponent;
