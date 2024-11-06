import express from 'express';
import tagController from '../../bController/cProductManagement/cTagController';
import validatorMiddleware, { menuCreateValidation, menuDeleteValidation, menuListValidation, menuRetrieveValidation, menuUpdateValidation } from '../../../bMiddleware/cValidatorMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/dCheckCacheMiddleware';
import rateLimiterMiddleware from '../../../bMiddleware/eRateLimiterMiddleware';
import personalInfoMiddleware from '../../../bMiddleware/fPersonalInfoMiddleware';
import authenticationMiddleware from '../../../bMiddleware/gAuthenticationMiddleware';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("tag-list", 60, 10), 
  authenticationMiddleware,
  checkCacheMiddleware("tag-list", "Tag", "List"), 
  menuListValidation(), validatorMiddleware, 
  tagController().list
);

router.route("/create").post(
  rateLimiterMiddleware("tag-create", 60, 10), 
  authenticationMiddleware,
  menuCreateValidation(), validatorMiddleware, 
  personalInfoMiddleware("created"),
  tagController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("tag-retrieve", 60, 10), 
  authenticationMiddleware,
  checkCacheMiddleware("tag-retrieve", "Tag", "Retrieve"), 
  menuRetrieveValidation(), validatorMiddleware, 
  tagController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("tag-update", 60, 10), 
  authenticationMiddleware,
  menuUpdateValidation(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  tagController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("tag-delete", 60, 10), 
  authenticationMiddleware,
  menuDeleteValidation(), validatorMiddleware, 
  tagController().delete
)

export const tagRouter = router;
