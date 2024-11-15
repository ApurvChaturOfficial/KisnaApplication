import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import endpointRoute from '@/bLove/gRoute/aEndpointRoute';
import { Toaster } from '@/aConnection/bShadcnConnection/components/ui/toaster';
import isAllowedUtility, { menuListUtility, NoAccessMessageUtility } from '@/bLove/dUtility/dIsAllowedUtility';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../dReduxConnection';
import globalSlice from '@/bLove/bRedux/aGlobalSlice';

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
const BaseManyToOneDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/aBaseManyToOnePage/eDeletePage'));

const BaseManyToManyListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/aListPage'));
const BaseManyToManyCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/bCreatePage'));
const BaseManyToManyRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/cRetrievePage'));
const BaseManyToManyUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/dUpdatePage'));
const BaseManyToManyDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/eDeletePage'));

const BaseListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/aListPage'));
const BaseCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/bCreatePage'));
const BaseRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/cRetrievePage'));
const BaseUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/dUpdatePage'));
const BaseDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/eDeletePage'));

const BaseOneToOneListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/aListPage'));
const BaseOneToOneCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/bCreatePage'));
const BaseOneToOneRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/cRetrievePage'));
const BaseOneToOneUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/dUpdatePage'));
const BaseOneToOneDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/eDeletePage'));

const BaseOneToManyListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/aListPage'));
const BaseOneToManyCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/bCreatePage'));
const BaseOneToManyRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/cRetrievePage'));
const BaseOneToManyUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/dUpdatePage'));
const BaseOneToManyDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/eDeletePage'));

const UserListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/aUserPage/aListPage'));
const UserCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/aUserPage/bCreatePage'));
const UserRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/aUserPage/cRetrievePage'));
const UserUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/aUserPage/dUpdatePage'));
const UserDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/aUserPage/eDeletePage'));

const RoleListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/bRolePage/aListPage'));
const RoleCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/bRolePage/bCreatePage'));
const RoleRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/bRolePage/cRetrievePage'));
const RoleUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/bRolePage/dUpdatePage'));
const RoleDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/bRolePage/eDeletePage'));

const MenuListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/cMenuPage/aListPage'));
const MenuCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/cMenuPage/bCreatePage'));
const MenuRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/cMenuPage/cRetrievePage'));
const MenuUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/cMenuPage/dUpdatePage'));
const MenuDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/cMenuPage/eDeletePage'));

const ProductListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/aProductPage/aListPage'));
const ProductCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/aProductPage/bCreatePage'));
const ProductRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/aProductPage/cRetrievePage'));
const ProductUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/aProductPage/dUpdatePage'));
const ProductDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/aProductPage/eDeletePage'));

const CategoryListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/bCategoryPage/aListPage'));
const CategoryCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/bCategoryPage/bCreatePage'));
const CategoryRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/bCategoryPage/cRetrievePage'));
const CategoryUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/bCategoryPage/dUpdatePage'));
const CategoryDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/bCategoryPage/eDeletePage'));

const TagListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/cTagPage/aListPage'));
const TagCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/cTagPage/bCreatePage'));
const TagRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/cTagPage/cRetrievePage'));
const TagUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/cTagPage/dUpdatePage'));
const TagDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cProductManagementPage/cTagPage/eDeletePage'));


const AppConnection = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
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
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToOne, "list") ? <BaseManyToOneListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToOne, "create") ? <BaseManyToOneCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToOne, "retrieve") ? <BaseManyToOneRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToOne, "update") ? <BaseManyToOneUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToOne, "delete") ? <BaseManyToOneDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToMany, "list") ? <BaseManyToManyListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToMany, "create") ? <BaseManyToManyCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToMany, "retrieve") ? <BaseManyToManyRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToMany, "update") ? <BaseManyToManyUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToMany, "delete") ? <BaseManyToManyDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.base, "list") ? <BaseListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.base, "create") ? <BaseCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.base, "retrieve") ? <BaseRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.base, "update") ? <BaseUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.base, "delete") ? <BaseDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToOne, "list") ? <BaseOneToOneListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToOne, "create") ? <BaseOneToOneCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToOne, "retrieve") ? <BaseOneToOneRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToOne, "update") ? <BaseOneToOneUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToOne, "delete") ? <BaseOneToOneDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToMany, "list") ? <BaseOneToManyListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToMany, "create") ? <BaseOneToManyCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToMany, "retrieve") ? <BaseOneToManyRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToMany, "update") ? <BaseOneToManyUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToMany, "delete") ? <BaseOneToManyDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "list") ? <UserListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "create") ? <UserCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "retrieve") ? <UserRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "update") ? <UserUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.aUserRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "delete") ? <UserDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "list") ? <RoleListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "create") ? <RoleCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "retrieve") ? <RoleRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "update") ? <RoleUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.bRoleRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "delete") ? <RoleDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "list") ? <MenuListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "create") ? <MenuCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "retrieve") ? <MenuRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "update") ? <MenuUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministration.cMenuRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "delete") ? <MenuDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.aProductRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.product, "list") ? <ProductListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.aProductRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.product, "create") ? <ProductCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.aProductRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.product, "retrieve") ? <ProductRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.aProductRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.product, "update") ? <ProductUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.aProductRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.product, "delete") ? <ProductDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.bCategoryRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.category, "list") ? <CategoryListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.bCategoryRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.category, "create") ? <CategoryCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.bCategoryRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.category, "retrieve") ? <CategoryRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.bCategoryRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.category, "update") ? <CategoryUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.bCategoryRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.category, "delete") ? <CategoryDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.cTagRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.tag, "list") ? <TagListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.cTagRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.tag, "create") ? <TagCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.cTagRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.tag, "retrieve") ? <TagRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.cTagRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.tag, "update") ? <TagUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cProductManagementRoute.cTagRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.tag, "delete") ? <TagDeletePage /> : <NoAccessMessageUtility />} />
                  
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
