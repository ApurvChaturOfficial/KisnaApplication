import React from "react"

import { Link } from "react-router-dom"

import {
  CircleUser,
  Menu,
  Package2,
  Search,
} from "lucide-react"

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
import { ModeToggle } from "@/aConnection/bShadcnConnection/components/mode-toggle"
import fullRoute from "@/bLove/gRoute/bFullRoute"
import KisnaLogo from "@/bLove/hAsset/KisnaLogo.jpg";
import { cn } from "@/aConnection/bShadcnConnection/lib/utils"


const HeaderComponent = () => {
  const aspectRatio = "portrait"

  // JSX
  return (
    <React.Fragment>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {/* <Link
            to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <img src={KisnaLogo} className="h-6 w-6" />
            <span className="sr-only">PegaSYS - Admin</span>
          </Link> */}
          <img
            src={KisnaLogo}
            alt={"KisnaLogo"}
            width={250}
            height={330}
            className={cn(
              "h-auto object-cover transition-all hover:scale-105 w-[250px]",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
          <Link
            to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aDashboardRoute}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashbasdsadoard
          </Link>
          <Link
            to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cOrderRoute.aListRoute}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Orders
          </Link>
          <Link
            to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bProductRoute.aListRoute}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.dUserAdminiatrationRoute.cUserRoute.aListRoute}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            User Administration
          </Link>
          <Link
            to="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Analytics
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">PegaSYS - Admin</span>
              </Link>
              <Link 
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aDashboardRoute} 
                className="hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cOrderRoute.aListRoute}
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bProductRoute.aListRoute}
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.dUserAdminiatrationRoute.cUserRoute.aListRoute}
                className="text-muted-foreground hover:text-foreground"
              >
                User Administration
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-2 md:ml-auto md:gap-2 lg:gap-2">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.aSignInRoute} >
                <DropdownMenuItem>
                  Sign In
                </DropdownMenuItem>
              </Link>
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.bSignUpRoute} >
                <DropdownMenuItem>
                  Sign Up
                </DropdownMenuItem>
              </Link>
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.cForgotPasswordRoute} >
                <DropdownMenuItem>
                  Forgot Password
                </DropdownMenuItem>
              </Link>
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.dResetPasswordRoute} >
                <DropdownMenuItem>
                  Reset Password
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.aProfileRetrieveRoute} >
                <DropdownMenuItem>
                  View Profile
                </DropdownMenuItem>
              </Link>
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.bProfileUpdateRoute} >
                <DropdownMenuItem>
                  Edit Profile
                </DropdownMenuItem>
              </Link>
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.cProfilePasswordUpdateRoute} >
                <DropdownMenuItem>
                  Change Password
                </DropdownMenuItem>
              </Link>
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.dProfileDeleteRoute} >
                <DropdownMenuItem>
                  Delete Profile
                </DropdownMenuItem>
              </Link>
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.eSignOutRoute} >
                <DropdownMenuItem>
                  Sign Out
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </React.Fragment>
  )
}

export default HeaderComponent;
