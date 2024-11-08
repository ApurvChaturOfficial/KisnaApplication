import endpointRoute from "../aEndpointRoute";

const fullRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {
      aHomeRoute: `/${endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}`
    },
    bProtectedRoute: {
      aAuthenticationRoute: {
        aSignInRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.aSignInRoute}`,
        bSignUpRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.bSignUpRoute}`,
        cForgotPasswordRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.cForgotPasswordRoute}`,
        dResetPasswordRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.dResetPasswordRoute}`,
      },
      bAuthorizationRoute: {
        aTopbarRoute: {
          aProfileRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.aProfileRetrieveRoute}`,
          bProfileUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.bProfileUpdateRoute}`,
          cProfilePasswordUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.cProfilePasswordUpdateRoute}`,
          dProfileDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.dProfileDeleteRoute}`,
        },
        bSidebarRoute: {
          aDashboardRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aDashboardRoute}`,
          bDataListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bDataListRoute}`,
          cDataFormRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cDataFormRoute}`,
          dDataFormTwoRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.dDataFormTwoRoute}`,
          eDataCardRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eDataCardRoute}`,

          aBaseSetupRoute: {
            aBaseManyToOneRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.eDeleteRoute}`,
            },
            bBaseManyToManyRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.eDeleteRoute}`,
            },
            cBaseRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.eDeleteRoute}`,
            },
            dBaseOneToOneRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.eDeleteRoute}`,
            },
            eBaseOneToManyRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.eDeleteRoute}`,
            },
          },

          bUserAdministration: {
            aUserRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.eDeleteRoute}`,
            },
            bRoleRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.eDeleteRoute}`,
            },
            cMenuRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.eDeleteRoute}`,
            },
          },

        }
      }
    }
  }
}

export default fullRoute;
