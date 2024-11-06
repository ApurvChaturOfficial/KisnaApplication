const endpointRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {
      aHomeRoute: ""
    },
    bProtectedRoute: {
      aAuthenticatedRoute: {
        aSignInRoute: "sign-in",
        bSignUpRoute: "sign-up",
        cForgotPasswordRoute: "forgot-password",
        dResetPasswordRoute: "reset-password",
      },
      bAuthorizationRoute: {
        aTopbarRoute: {
          aProfileRetrieveRoute: "profile-retrieve",
          bProfileUpdateRoute: "profile-update",
          cProfilePasswordUpdateRoute: "profile-password-update",
          dProfileDeleteRoute: "profile-delete",
        },
        bSidebarRoute: {
          aDashboardRoute: "dashboard",
          bDataListRoute: "data-list",
          cDataFormRoute: "data-form",
          dDataFormTwoRoute: "data-form-two",
          eDataCardRoute: "data-card",

          aBaseSetupRoute: {
            aBaseManyToOneRoute: {},
            bBaseManyToManyRoute: {},
            cBaseRoute: {
              aListRoute: "base-list",
              bCreateRoute: "base-create",
              cRetrieveRoute: "base-retrieve",
              dUpdateRoute: "base-update",
              eDeleteRoute: "base-delete",
            },
            dBaseOneToOneRoute: {},
            eBaseOneToManyRoute: {},
          }
        }
      }
    }
  }
}

export default endpointRoute;
