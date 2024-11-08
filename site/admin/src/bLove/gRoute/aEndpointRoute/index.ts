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
            aBaseManyToOneRoute: {
              aListRoute: "base-many-to-one-list",
              bCreateRoute: "base-many-to-one-create",
              cRetrieveRoute: "base-many-to-one-retrieve",
              dUpdateRoute: "base-many-to-one-update",
              eDeleteRoute: "base-many-to-one-delete",
            },
            bBaseManyToManyRoute: {
              aListRoute: "base-many-to-many-list",
              bCreateRoute: "base-many-to-many-create",
              cRetrieveRoute: "base-many-to-many-retrieve",
              dUpdateRoute: "base-many-to-many-update",
              eDeleteRoute: "base-many-to-many-delete",
            },
            cBaseRoute: {
              aListRoute: "base-list",
              bCreateRoute: "base-create",
              cRetrieveRoute: "base-retrieve",
              dUpdateRoute: "base-update",
              eDeleteRoute: "base-delete",
            },
            dBaseOneToOneRoute: {
              aListRoute: "base-one-to-one-list",
              bCreateRoute: "base-one-to-one-create",
              cRetrieveRoute: "base-one-to-one-retrieve",
              dUpdateRoute: "base-one-to-one-update",
              eDeleteRoute: "base-one-to-one-delete",
            },
            eBaseOneToManyRoute: {
              aListRoute: "base-one-to-many-list",
              bCreateRoute: "base-one-to-many-create",
              cRetrieveRoute: "base-one-to-many-retrieve",
              dUpdateRoute: "base-one-to-many-update",
              eDeleteRoute: "base-one-to-many-delete",
            },
          },

          bUserAdministration: {
            aUserRoute: {
              aListRoute: "user-list",
              bCreateRoute: "user-create",
              cRetrieveRoute: "user-retrieve",
              dUpdateRoute: "user-update",
              eDeleteRoute: "user-delete",
            },
            bRoleRoute: {
              aListRoute: "role-list",
              bCreateRoute: "role-create",
              cRetrieveRoute: "role-retrieve",
              dUpdateRoute: "role-update",
              eDeleteRoute: "role-delete",
            },
            cMenuRoute: {
              aListRoute: "menu-list",
              bCreateRoute: "menu-create",
              cRetrieveRoute: "menu-retrieve",
              dUpdateRoute: "menu-update",
              eDeleteRoute: "menu-delete",
            },
          }
        }
      }
    }
  }
}

export default endpointRoute;
