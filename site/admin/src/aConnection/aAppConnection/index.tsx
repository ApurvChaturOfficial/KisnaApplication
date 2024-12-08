import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import endpointRoute from '@/bLove/gRoute/aEndpointRoute';
import { Toaster } from '@/aConnection/bShadcnConnection/components/ui/toaster';
import isAllowedUtility, { menuListUtility, NoAccessMessageUtility } from '@/bLove/dUtility/dIsAllowedUtility';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../dReduxConnection';
import globalSlice from '@/bLove/bRedux/aGlobalSlice';

import ImageUploadListComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aImageUploadComponent/aListComponent';
import ImageUploadCreateComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aImageUploadComponent/bCreateComponent';
import ImageUploadUpdateComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aImageUploadComponent/dUpdateComponent';
import ImageUploadDeleteComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aImageUploadComponent/eDeleteComponent';
import ImageUploadRetrieveComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aImageUploadComponent/cRetrieveComponent';
import ExportComponent from '@/bLove/cComponent/zOpenFreestyleComponent/bExportComponent';
import ImportComponent from '@/bLove/cComponent/zOpenFreestyleComponent/cImportComponent';
import SampleListComponent from '@/bLove/cComponent/zOpenFreestyleComponent/cSampleListComponent';
import SampleCreateComponent from '@/bLove/cComponent/zOpenFreestyleComponent/dSampleCreateComponent';
import SampleRetrieveComponent from '@/bLove/cComponent/zOpenFreestyleComponent/eSampleRetrieveComponent';
import SampleProductCreateComponent from '@/bLove/cComponent/zOpenFreestyleComponent/fSampleProductCreateComponent';
import GenerateVariantsComponent from '@/bLove/cComponent/zOpenFreestyleComponent/fSampleProductVariantCreateComponent';
import DashboardComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aDashboardComponent';

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

const KisnaDashboardPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/zDashboardPage'));
const HappifyDashboardPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cHappifyPage/zDashboardPage'));
const InvenTechDashboardPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/zDashboardPage'));

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

// Kisna
const ProductListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/aProductPage/aListPage'));
const ProductCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/aProductPage/bCreatePage'));
const ProductRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/aProductPage/cRetrievePage'));
const ProductUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/aProductPage/dUpdatePage'));
const ProductDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/aProductPage/eDeletePage'));

const CategoryListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/bCategoryPage/aListPage'));
const CategoryCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/bCategoryPage/bCreatePage'));
const CategoryRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/bCategoryPage/cRetrievePage'));
const CategoryUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/bCategoryPage/dUpdatePage'));
const CategoryDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/bCategoryPage/eDeletePage'));

const TagListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/cTagPage/aListPage'));
const TagCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/cTagPage/bCreatePage'));
const TagRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/cTagPage/cRetrievePage'));
const TagUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/cTagPage/dUpdatePage'));
const TagDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/cTagPage/eDeletePage'));

const ProductVariantListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/dProductVariantPage/aListPage'));
const ProductVariantCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/dProductVariantPage/bCreatePage'));
const ProductVariantRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/dProductVariantPage/cRetrievePage'));
const ProductVariantUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/dProductVariantPage/dUpdatePage'));
const ProductVariantDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/dProductVariantPage/eDeletePage'));

const OptionListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/eOptionPage/aListPage'));
const OptionCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/eOptionPage/bCreatePage'));
const OptionRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/eOptionPage/cRetrievePage'));
const OptionUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/eOptionPage/dUpdatePage'));
const OptionDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/eOptionPage/eDeletePage'));

const GroupListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/fGroupPage/aListPage'));
const GroupCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/fGroupPage/bCreatePage'));
const GroupRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/fGroupPage/cRetrievePage'));
const GroupUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/fGroupPage/dUpdatePage'));
const GroupDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cKisnaPage/aProductManagementPage/fGroupPage/eDeletePage'));

// Happify
const QuestionListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cHappifyPage/aQuestionnairePage/aQuestionPage/aListPage'));
const QuestionCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cHappifyPage/aQuestionnairePage/aQuestionPage/bCreatePage'));
const QuestionRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cHappifyPage/aQuestionnairePage/aQuestionPage/cRetrievePage'));
const QuestionUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cHappifyPage/aQuestionnairePage/aQuestionPage/dUpdatePage'));
const QuestionDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cHappifyPage/aQuestionnairePage/aQuestionPage/eDeletePage'));

const FactorListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cHappifyPage/aQuestionnairePage/bFactorPage/aListPage'));
const FactorCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cHappifyPage/aQuestionnairePage/bFactorPage/bCreatePage'));
const FactorRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cHappifyPage/aQuestionnairePage/bFactorPage/cRetrievePage'));
const FactorUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cHappifyPage/aQuestionnairePage/bFactorPage/dUpdatePage'));
const FactorDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cHappifyPage/aQuestionnairePage/bFactorPage/eDeletePage'));

// InvenTech
const ProductCatalogueListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/aProductCataloguePage/aListPage'));
const ProductCatalogueCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/aProductCataloguePage/bCreatePage'));
const ProductCatalogueRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/aProductCataloguePage/cRetrievePage'));

const WarehouseManagementListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/bWarehouseManagementPage/aListPage'));
const WarehouseManagementCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/bWarehouseManagementPage/bCreatePage'));
const WarehouseManagementRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/bWarehouseManagementPage/cRetrievePage'));

const StoreManagementListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/cStoreManagementPage/aListPage'));
const StoreManagementCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/cStoreManagementPage/bCreatePage'));
const StoreManagementRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/cStoreManagementPage/cRetrievePage'));

const ActivityLogListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/dActivityLogPage/aListPage'));

const LocationListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/eLocationPage/aListPage'));

const DepartmentListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/fDepartmentPage/aListPage'));
const DepartmentCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/fDepartmentPage/bCreatePage'));
const DepartmentRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/fDepartmentPage/cRetrievePage'));

const OpenPurchaseOrderListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/gOpenPurchaseOrderPage/aListPage'));
const OpenPurchaseOrderCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/gOpenPurchaseOrderPage/bCreatePage'));
const OpenPurchaseOrderRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/gOpenPurchaseOrderPage/cRetrievePage'));


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
                  {/* Pages */}
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.zDashboardRoute.aDashboardRoute}`} element={<KisnaDashboardPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyRoute.zDashboardRoute.aDashboardRoute}`} element={<HappifyDashboardPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.zDashboardRoute.aDashboardRoute}`} element={<InvenTechDashboardPage />} />

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
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "list") ? <UserListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "create") ? <UserCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "retrieve") ? <UserRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "update") ? <UserUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "delete") ? <UserDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "list") ? <RoleListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "create") ? <RoleCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "retrieve") ? <RoleRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "update") ? <RoleUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "delete") ? <RoleDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "list") ? <MenuListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "create") ? <MenuCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "retrieve") ? <MenuRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "update") ? <MenuUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "delete") ? <MenuDeletePage /> : <NoAccessMessageUtility />} />
                  
                  {/* Kisna */}
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.aProductRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.product, "list") ? <ProductListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.aProductRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.product, "create") ? <ProductCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.aProductRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.product, "retrieve") ? <ProductRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.aProductRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.product, "update") ? <ProductUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.aProductRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.product, "delete") ? <ProductDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.bCategoryRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.category, "list") ? <CategoryListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.bCategoryRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.category, "create") ? <CategoryCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.bCategoryRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.category, "retrieve") ? <CategoryRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.bCategoryRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.category, "update") ? <CategoryUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.bCategoryRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.category, "delete") ? <CategoryDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.cTagRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.tag, "list") ? <TagListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.cTagRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.tag, "create") ? <TagCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.cTagRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.tag, "retrieve") ? <TagRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.cTagRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.tag, "update") ? <TagUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.cTagRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.tag, "delete") ? <TagDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.dProductVariantRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.productVariant, "list") ? <ProductVariantListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.dProductVariantRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.productVariant, "create") ? <ProductVariantCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.dProductVariantRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.productVariant, "retrieve") ? <ProductVariantRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.dProductVariantRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.productVariant, "update") ? <ProductVariantUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.dProductVariantRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.productVariant, "delete") ? <ProductVariantDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.eOptionRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.option, "list") ? <OptionListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.eOptionRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.option, "create") ? <OptionCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.eOptionRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.option, "retrieve") ? <OptionRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.eOptionRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.option, "update") ? <OptionUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.eOptionRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.option, "delete") ? <OptionDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.fGroupRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.group, "list") ? <GroupListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.fGroupRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.group, "create") ? <GroupCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.fGroupRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.group, "retrieve") ? <GroupRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.fGroupRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.group, "update") ? <GroupUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cKisnaRoute.aProductManagementRoute.fGroupRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.kisna.group, "delete") ? <GroupDeletePage /> : <NoAccessMessageUtility />} />
                  
                  {/* Happify */}
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyRoute.aQuestionnaireRoute.aQuestionRoute.aListRoute}`} element={<QuestionListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyRoute.aQuestionnaireRoute.aQuestionRoute.bCreateRoute}`} element={<QuestionCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyRoute.aQuestionnaireRoute.aQuestionRoute.cRetrieveRoute}/:id`} element={<QuestionRetrievePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyRoute.aQuestionnaireRoute.aQuestionRoute.dUpdateRoute}/:id`} element={<QuestionUpdatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyRoute.aQuestionnaireRoute.aQuestionRoute.eDeleteRoute}/:id`} element={<QuestionDeletePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyRoute.aQuestionnaireRoute.bFactorRoute.aListRoute}`} element={<FactorListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyRoute.aQuestionnaireRoute.bFactorRoute.bCreateRoute}`} element={<FactorCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyRoute.aQuestionnaireRoute.bFactorRoute.cRetrieveRoute}/:id`} element={<FactorRetrievePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyRoute.aQuestionnaireRoute.bFactorRoute.dUpdateRoute}/:id`} element={<FactorUpdatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cHappifyRoute.aQuestionnaireRoute.bFactorRoute.eDeleteRoute}/:id`} element={<FactorDeletePage />} />

                  {/* InvenTech */}
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.aListRoute}`} element={<ProductCatalogueListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.bCreateRoute}`} element={<ProductCatalogueCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.cRetrieveRoute}/:id`} element={<ProductCatalogueRetrievePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.bWarehouseManagementRoute.aListRoute}`} element={<WarehouseManagementListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.bWarehouseManagementRoute.bCreateRoute}`} element={<WarehouseManagementCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.bWarehouseManagementRoute.cRetrieveRoute}/:id`} element={<WarehouseManagementRetrievePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.cStoreManagementRoute.aListRoute}`} element={<StoreManagementListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.cStoreManagementRoute.bCreateRoute}`} element={<StoreManagementCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.cStoreManagementRoute.cRetrieveRoute}/:id`} element={<StoreManagementRetrievePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.dActivityLogRoute.aListRoute}`} element={<ActivityLogListPage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.eLocationRoute.aListRoute}`} element={<LocationListPage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.fDepartmentRoute.aListRoute}`} element={<DepartmentListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.fDepartmentRoute.bCreateRoute}`} element={<DepartmentCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.fDepartmentRoute.cRetrieveRoute}/:id`} element={<DepartmentRetrievePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.gOpenPurchaseOrderRoute.aListRoute}`} element={<OpenPurchaseOrderListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.gOpenPurchaseOrderRoute.bCreateRoute}`} element={<OpenPurchaseOrderCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.gOpenPurchaseOrderRoute.cRetrieveRoute}/:id`} element={<OpenPurchaseOrderRetrievePage />} />
                  
                </Route>
              </Route>
            </Route>
          </Route>

          {/* Component */}
          <Route path={`image-upload-list`} element={<ImageUploadListComponent />} />
          <Route path={`image-upload-create`} element={<ImageUploadCreateComponent />} />
          <Route path={`image-upload-retrieve`} element={<ImageUploadRetrieveComponent />} />
          <Route path={`image-upload-update`} element={<ImageUploadUpdateComponent />} />
          <Route path={`image-upload-delete`} element={<ImageUploadDeleteComponent />} />

          <Route path={`export`} element={<ExportComponent />} />
          <Route path={`import`} element={<ImportComponent />} />
          
          <Route path={`sample-list`} element={<SampleListComponent />} />
          <Route path={`sample-create`} element={<SampleCreateComponent />} />
          <Route path={`sample-retrieve`} element={<SampleRetrieveComponent />} />

          <Route path={`sample-product-create`} element={<SampleProductCreateComponent />} />
          <Route path={`sample-product-variant-create`} element={<GenerateVariantsComponent />} />

          <Route path={`dashboard-one`} element={<DashboardComponent />} />

          {/* 404 Page */}
           <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </Suspense>
    </React.Fragment>
  )
}

export default AppConnection;
