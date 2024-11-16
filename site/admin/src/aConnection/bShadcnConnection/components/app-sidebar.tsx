import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/aConnection/bShadcnConnection/components/nav-main"
import { NavUser } from "@/aConnection/bShadcnConnection/components/nav-user"
// import { TeamSwitcher } from "@/aConnection/bShadcnConnection/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/aConnection/bShadcnConnection/components/ui/sidebar"
import fullRoute from "@/bLove/gRoute/bFullRoute"
import KisnaSmallGoldLogo from "@/bLove/hAsset/KisnaLogo/KisnaSmallGoldLogo.png";
import KisnaSmallBlueLogo from "@/bLove/hAsset/KisnaLogo/KisnaSmallBlueLogo.png";
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"


// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Kisna",
      logo: GalleryVerticalEnd,
      plan: "Brand",
    },
    {
      name: "H. K. Jewels",
      logo: AudioWaveform,
      plan: "Company",
    },
    {
      name: "H. K. Exports",
      logo: Command,
      plan: "Company",
    },
  ],
  kisnaMain: [
    {
      title: "Product Management",
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.aProductRoute.aListRoute,
      icon: BookOpen,
      isActive: false,
      items: [
        {
          title: "Product",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.aProductRoute.aListRoute,
        },
        {
          title: "Category",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.bCategoryRoute.aListRoute,
        },
        {
          title: "Tag",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.cTagRoute.aListRoute,
        },
      ],
    },
  ],
  administration: [
    {
      title: "User Administration",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "User",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.aListRoute,
        },
        {
          title: "Role",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.aListRoute,
        },
        {
          title: "Menu",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.aListRoute,
        },
      ],
    },
    // {
    //   title: "Playground",
    //   url: "#",
    //   icon: SquareTerminal,
    //   items: [
    //     {
    //       title: "History",
    //       url: "#",
    //     },
    //     {
    //       title: "Starred",
    //       url: "#",
    //     },
    //     {
    //       title: "Settings",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Models",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Genesis",
    //       url: "#",
    //     },
    //     {
    //       title: "Explorer",
    //       url: "#",
    //     },
    //     {
    //       title: "Quantum",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  forDeveloper: [
    {
      title: "Base Setup",
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute,
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Base Many To One",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.aListRoute,
        },
        {
          title: "Base Many To Many",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.aListRoute,
        },
        {
          title: "Base",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute,
        },
        {
          title: "Base One To One",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.aListRoute,
        },
        {
          title: "Base One To Many",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.aListRoute,
        },
      ],
    },
  ],

  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ReduxCall, APICall, navigate, ...props }: (React.ComponentProps<typeof Sidebar> & { ReduxCall?: any,APICall?: any, navigate?: any })) {
  // JSX
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to={fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute} >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                  <img
                    src={KisnaSmallGoldLogo}
                    alt={"KisnaSmallGoldLogo"}
                    className={cn(
                      "h-[40px] object-fit transition-all hover:scale-105 w-auto hidden dark:block",
                      "portrait"
                    )}
                  />
                  <img
                    src={KisnaSmallBlueLogo}
                    alt={"KisnaSmallBlueLogo"}
                    className={cn(
                      "h-[40px] object-fit transition-all hover:scale-105 w-auto block dark:hidden",
                      "portrait"
                    )}
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">KISNA - Admin</span>
                  {/* <span className="">v1.0.0</span> */}
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain header="Kisna Main" items={data.kisnaMain} />
        <NavMain header="Administration" items={data.administration} />
        <NavMain header="For Developer" items={data.forDeveloper} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} ReduxCall={ReduxCall} APICall={APICall} navigate={navigate} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
