import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import endpointRoute from '@/bLove/gRoute/aEndpointRoute';
import { Toaster } from '@/aConnection/bShadcnConnection/components/ui/toaster';

// Layout
const GlobalLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout'));
const UnprotectedLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/aUnprotectedLayout'));
const ProtectedLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout'));
const AuthenticationLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/aAuthenticationLayout'));
const AuthorizationLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizationLayout'));
const TopbarLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizationLayout/outlet/aTopbarLayout'));
const SidebarLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizationLayout/outlet/bSidebarLayout'));

// Page
const HomePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/aHomePage'));

const SignInPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticationPage/page/aSignInPage'));
const SignUpPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticationPage/page/bSignUpPage'));
const ForgotPasswordPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticationPage/page/cForgotPasswordPage'));
const ResetPasswordPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticationPage/page/dResetPasswordPage'));

const ProfileRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/aTopbarPage/page/aProfileRetrievePage'));
const ProfileUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/aTopbarPage/page/bProfileUpdatePage'));
const ProfilePasswordUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/aTopbarPage/page/cProfilePasswordUpdatePage'));
const ProfileDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/aTopbarPage/page/dProfileDeletePage'));

const DashboardPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cComponentStorage/aDashboardPage'));
const DataListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cComponentStorage/bDataListPage'));
const DataFormPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cComponentStorage/cDataFormPage'));
const DataFormTwoPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cComponentStorage/dDataFormTwoPage'));
const DataCardPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cComponentStorage/eDataCardPage'));

const BaseManyToOneListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/aBaseManyToOnePage/aListPage'));
const BaseManyToOneCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/aBaseManyToOnePage/bCreatePage'));
const BaseManyToOneRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/aBaseManyToOnePage/cRetrievePage'));
const BaseManyToOneUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/aBaseManyToOnePage/dUpdatePage'));
// const BaseManyToOneDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/aBaseManyToOnePage/eDeletePage'));

const BaseManyToManyListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/aListPage'));
const BaseManyToManyCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/bCreatePage'));
const BaseManyToManyRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/cRetrievePage'));
const BaseManyToManyUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/dUpdatePage'));
// const BaseManyToManyDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/eDeletePage'));

const BaseListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/aListPage'));
const BaseCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/bCreatePage'));
const BaseRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/cRetrievePage'));
const BaseUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/dUpdatePage'));
const BaseDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/eDeletePage'));

const BaseOneToOneListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/aListPage'));
const BaseOneToOneCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/bCreatePage'));
const BaseOneToOneRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/cRetrievePage'));
const BaseOneToOneUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/dUpdatePage'));
// const BaseOneToOneDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/eDeletePage'));

const BaseOneToManyListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/aListPage'));
const BaseOneToManyCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/bCreatePage'));
const BaseOneToManyRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/cRetrievePage'));
const BaseOneToManyUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/dUpdatePage'));
// const BaseOneToManyDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/eDeletePage'));


const AppConnection = () => {
  // JSX
  return (
    <React.Fragment>
      {/* AppConnection */}
      <Helmet><title>Kisna - Admin</title></Helmet>
      <Toaster />

      <Suspense fallback={<div className='min-h-screen flex justify-center items-center' >Suspence Loading...</div>} >
        <Routes>

          {/* Global */}
          <Route element={<GlobalLayout />} >

            {/* Unprotected */}
            <Route element={<UnprotectedLayout />} >
              <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}`} element={<HomePage />} />
            </Route>
            
            {/* Protected */}
            <Route element={<ProtectedLayout />} >

              {/* Authentication */}
              <Route element={<AuthenticationLayout />} >
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.aSignInRoute}`} element={<SignInPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.bSignUpRoute}`} element={<SignUpPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.cForgotPasswordRoute}`} element={<ForgotPasswordPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.dResetPasswordRoute}/:token`} element={<ResetPasswordPage />} />
              </Route>

              {/* Authorization */}
              <Route element={<AuthorizationLayout />}  >

                {/* Topbar */}
                <Route element={<TopbarLayout />} >
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.aProfileRetrieveRoute}`} element={<ProfileRetrievePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.bProfileUpdateRoute}`} element={<ProfileUpdatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.cProfilePasswordUpdateRoute}`} element={<ProfilePasswordUpdatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.dProfileDeleteRoute}`} element={<ProfileDeletePage />} />
                </Route>

                {/* Sidebar */}
                <Route element={<SidebarLayout />} >
                  {/* Components */}
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aDashboardRoute}`} element={<DashboardPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bDataListRoute}`} element={<DataListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cDataFormRoute}`} element={<DataFormPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.dDataFormTwoRoute}`} element={<DataFormTwoPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.eDataCardRoute}`} element={<DataCardPage />} />

                  {/* Pages */}
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.aListRoute}`} element={<BaseManyToOneListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.bCreateRoute}`} element={<BaseManyToOneCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.cRetrieveRoute}/:id`} element={<BaseManyToOneRetrievePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.dUpdateRoute}/:id`} element={<BaseManyToOneUpdatePage />} />
                  {/* <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.eDeleteRoute}/:id`} element={<BaseManyToOneDeletePage />} /> */}
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.aListRoute}`} element={<BaseManyToManyListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.bCreateRoute}`} element={<BaseManyToManyCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.cRetrieveRoute}/:id`} element={<BaseManyToManyRetrievePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.dUpdateRoute}/:id`} element={<BaseManyToManyUpdatePage />} />
                  {/* <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.eDeleteRoute}/:id`} element={<BaseManyToManyDeletePage />} /> */}
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}`} element={<BaseListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.bCreateRoute}`} element={<BaseCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.cRetrieveRoute}/:id`} element={<BaseRetrievePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.dUpdateRoute}/:id`} element={<BaseUpdatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.eDeleteRoute}/:id`} element={<BaseDeletePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.aListRoute}`} element={<BaseOneToOneListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.bCreateRoute}`} element={<BaseOneToOneCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.cRetrieveRoute}/:id`} element={<BaseOneToOneRetrievePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.dUpdateRoute}/:id`} element={<BaseOneToOneUpdatePage />} />
                  {/* <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.eDeleteRoute}/:id`} element={<BaseOneToOneDeletePage />} /> */}
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.aListRoute}`} element={<BaseOneToManyListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.bCreateRoute}`} element={<BaseOneToManyCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.cRetrieveRoute}/:id`} element={<BaseOneToManyRetrievePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.dUpdateRoute}/:id`} element={<BaseOneToManyUpdatePage />} />
                  {/* <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.eDeleteRoute}/:id`} element={<BaseOneToManyDeletePage />} /> */}
                  
                </Route>
              </Route>
            </Route>
          </Route>

          {/* 404 Page */}
           <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </Suspense>
    </React.Fragment>
  )
}

export default AppConnection;
