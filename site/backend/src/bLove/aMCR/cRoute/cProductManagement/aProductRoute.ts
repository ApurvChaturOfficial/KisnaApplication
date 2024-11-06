import express from 'express';
import productController from '../../bController/cProductManagement/aProductController';
import validatorMiddleware, { menuCreateValidation, menuDeleteValidation, menuListValidation, menuRetrieveValidation, menuUpdateValidation } from '../../../bMiddleware/cValidatorMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/dCheckCacheMiddleware';
import rateLimiterMiddleware from '../../../bMiddleware/eRateLimiterMiddleware';
import personalInfoMiddleware from '../../../bMiddleware/fPersonalInfoMiddleware';
import authenticationMiddleware from '../../../bMiddleware/gAuthenticationMiddleware';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("product-list", 60, 10), 
  authenticationMiddleware,
  checkCacheMiddleware("product-list", "Product", "List"), 
  menuListValidation(), validatorMiddleware, 
  productController().list
);

router.route("/create").post(
  rateLimiterMiddleware("product-create", 60, 10), 
  authenticationMiddleware,
  menuCreateValidation(), validatorMiddleware, 
  personalInfoMiddleware("created"),
  productController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("product-retrieve", 60, 10), 
  authenticationMiddleware,
  checkCacheMiddleware("product-retrieve", "Product", "Retrieve"), 
  menuRetrieveValidation(), validatorMiddleware, 
  productController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("product-update", 60, 10), 
  authenticationMiddleware,
  menuUpdateValidation(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  productController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("product-delete", 60, 10), 
  authenticationMiddleware,
  menuDeleteValidation(), validatorMiddleware, 
  productController().delete
)

export const productRouter = router;
