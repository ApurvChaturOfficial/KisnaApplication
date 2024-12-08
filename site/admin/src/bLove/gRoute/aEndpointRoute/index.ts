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

          bUserAdministrationRoute: {
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
          },

          cKisnaRoute: {
            aProductManagementRoute: {
              aProductRoute: {
                aListRoute: "product-list",
                bCreateRoute: "product-create",
                cRetrieveRoute: "product-retrieve",
                dUpdateRoute: "product-update",
                eDeleteRoute: "product-delete",
              },
              bCategoryRoute: {
                aListRoute: "category-list",
                bCreateRoute: "category-create",
                cRetrieveRoute: "category-retrieve",
                dUpdateRoute: "category-update",
                eDeleteRoute: "category-delete",
              },
              cTagRoute: {
                aListRoute: "tag-list",
                bCreateRoute: "tag-create",
                cRetrieveRoute: "tag-retrieve",
                dUpdateRoute: "tag-update",
                eDeleteRoute: "tag-delete",
              },
              dProductVariantRoute: {
                aListRoute: "product-variant-list",
                bCreateRoute: "product-variant-create",
                cRetrieveRoute: "product-variant-retrieve",
                dUpdateRoute: "product-variant-update",
                eDeleteRoute: "product-variant-delete",
              },
              eOptionRoute: {
                aListRoute: "option-list",
                bCreateRoute: "option-create",
                cRetrieveRoute: "option-retrieve",
                dUpdateRoute: "option-update",
                eDeleteRoute: "option-delete",
              },
              fGroupRoute: {
                aListRoute: "group-list",
                bCreateRoute: "group-create",
                cRetrieveRoute: "group-retrieve",
                dUpdateRoute: "group-update",
                eDeleteRoute: "group-delete",
              },
            },

            zDashboardRoute: {
              aDashboardRoute: "kisna-dashboard"
            }
          },

          cHappifyRoute: {
            aQuestionnaireRoute: {
              aQuestionRoute: {
                aListRoute: "question-list",
                bCreateRoute: "question-create",
                cRetrieveRoute: "question-retrieve",
                dUpdateRoute: "question-update",
                eDeleteRoute: "question-delete",
              },
              bFactorRoute: {
                aListRoute: "factor-list",
                bCreateRoute: "factor-create",
                cRetrieveRoute: "factor-retrieve",
                dUpdateRoute: "factor-update",
                eDeleteRoute: "factor-delete",
              },
            },

            zDashboardRoute: {
              aDashboardRoute: "happify-dashboard"
            }
          },

          cInvenTechRoute: {
            aOverallRoute: {
              aProductCatalogueRoute: {
                aListRoute: "product-catalogue-list",
                bCreateRoute: "product-catalogue-create",
                cRetrieveRoute: "product-catalogue-retrieve",
              },
              bWarehouseManagementRoute: {
                aListRoute: "warehouse-management-list",
                bCreateRoute: "warehouse-management-create",
                cRetrieveRoute: "warehouse-management-retrieve",
              },
              cStoreManagementRoute: {
                aListRoute: "store-management-list",
                bCreateRoute: "store-management-create",
                cRetrieveRoute: "store-management-retrieve",
              },
              dActivityLogRoute: {
                aListRoute: "activity-log-list",
              },
              eLocationRoute: {
                aListRoute: "location-list",
              },
              fDepartmentRoute: {
                aListRoute: "department-list",
                bCreateRoute: "department-create",
                cRetrieveRoute: "department-retrieve",
              },
              gOpenPurchaseOrderRoute: {
                aListRoute: "open-purchase-order-list",
                bCreateRoute: "open-purchase-order-create",
                cRetrieveRoute: "open-purchase-order-retrieve",
              },
            },

            zDashboardRoute: {
              aDashboardRoute: "inventech-dashboard"
            }
          },

        }
      }
    }
  }
}

export default endpointRoute;
