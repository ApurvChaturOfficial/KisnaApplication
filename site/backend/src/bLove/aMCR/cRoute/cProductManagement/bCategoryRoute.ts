import express from 'express';
import categoryController from '../../bController/cProductManagement/bCategoryController';
import validatorMiddleware, { menuCreateValidation, menuDeleteValidation, menuListValidation, menuRetrieveValidation, menuUpdateValidation } from '../../../bMiddleware/cValidatorMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/dCheckCacheMiddleware';
import rateLimiterMiddleware from '../../../bMiddleware/eRateLimiterMiddleware';
import personalInfoMiddleware from '../../../bMiddleware/fPersonalInfoMiddleware';
import authenticationMiddleware from '../../../bMiddleware/gAuthenticationMiddleware';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("category-list", 60, 10), 
  authenticationMiddleware,
  checkCacheMiddleware("category-list", "Category", "List"), 
  menuListValidation(), validatorMiddleware, 
  categoryController().list
);

router.route("/create").post(
  rateLimiterMiddleware("category-create", 60, 10), 
  authenticationMiddleware,
  menuCreateValidation(), validatorMiddleware, 
  personalInfoMiddleware("created"),
  categoryController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("category-retrieve", 60, 10), 
  authenticationMiddleware,
  checkCacheMiddleware("category-retrieve", "Category", "Retrieve"), 
  menuRetrieveValidation(), validatorMiddleware, 
  categoryController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("category-update", 60, 10), 
  authenticationMiddleware,
  menuUpdateValidation(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  categoryController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("category-delete", 60, 10), 
  authenticationMiddleware,
  menuDeleteValidation(), validatorMiddleware, 
  categoryController().delete
)

export const categoryRouter = router;
