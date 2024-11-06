import express from 'express';
import userController from '../../bController/bUserAdministration/aUserController';
import validatorMiddleware, { 
  userCreateValidation, 
  userDeleteValidation, 
  userForgotPasswordValidation, 
  userListValidation, 
  userLoginValidation, 
  userLogoutValidation, 
  userProfileRetrieveValidation, 
  userRegisterValidation, 
  userResetPasswordValidation, 
  userRetrieveValidation, 
  userUpdateValidation 
} from '../../../bMiddleware/cValidatorMiddleware';
import rateLimiterMiddleware from '../../../bMiddleware/eRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/dCheckCacheMiddleware';
import personalInfoMiddleware from '../../../bMiddleware/fPersonalInfoMiddleware';
import authenticationMiddleware from '../../../bMiddleware/gAuthenticationMiddleware';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("user-list", 60, 10),
  authenticationMiddleware,
  checkCacheMiddleware("user-list", "User", "List"),
  userListValidation(), validatorMiddleware, 
  userController().list
);

router.route("/create").post(
  rateLimiterMiddleware("user-create", 60, 10), 
  authenticationMiddleware,
  userCreateValidation(), validatorMiddleware, 
  personalInfoMiddleware("created"),
  userController().create
);

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("user-retrieve", 60, 10), 
  authenticationMiddleware,
  checkCacheMiddleware("user-retrieve", "User", "Retrieve"), 
  userRetrieveValidation(), validatorMiddleware, 
  userController().retrieve
);

router.route("/update/:id").put(
  rateLimiterMiddleware("user-update", 60, 10), 
  authenticationMiddleware,
  userUpdateValidation(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  userController().update
);

router.route("/delete/:id").delete(
  rateLimiterMiddleware("user-delete", 60, 10), 
  authenticationMiddleware,
  userDeleteValidation(), validatorMiddleware, 
  userController().delete
);

router.route("/auth/login").post(
  rateLimiterMiddleware("user-login", 60, 10), 
  userLoginValidation(), validatorMiddleware, 
  userController().login,
);

router.route("/auth/register").post(
  rateLimiterMiddleware("user-register", 60, 10), 
  userRegisterValidation(), validatorMiddleware, 
  personalInfoMiddleware("created"),
  userController().register,
);

router.route("/auth/forgot-password").post(
  rateLimiterMiddleware("user-forgot-password", 60, 10), 
  userForgotPasswordValidation(), validatorMiddleware, 
  userController().forgotPassword,
);

router.route("/auth/reset-password/:token").post(
  rateLimiterMiddleware("user-reset-password", 60, 10), 
  userResetPasswordValidation(), validatorMiddleware, 
  userController().resetPassword,
);

router.route("/auth/logout").get(
  rateLimiterMiddleware("user-logout", 60, 10), 
  authenticationMiddleware,
  userLogoutValidation(), validatorMiddleware, 
  userController().logout,
);

router.route("/profile/retrieve").get(
  rateLimiterMiddleware("profile-retrieve", 60, 10), 
  authenticationMiddleware,
  userProfileRetrieveValidation(), validatorMiddleware, 
  userController().profileRetrieve,
);

export const userRouter = router;
