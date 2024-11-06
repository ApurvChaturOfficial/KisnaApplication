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
            aBaseManyToOneRoute: {},
            bBaseManyToManyRoute: {},
            cBaseRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.eDeleteRoute}`,
            },
            dBaseOneToOneRoute: {},
            eBaseOneToManyRoute: {},
          }

        }
      }
    }
  }
}

export default fullRoute;
