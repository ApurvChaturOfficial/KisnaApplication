import express from 'express';
import crypto from 'crypto';

import catchAsyncMiddleware from "../../../bMiddleware/bCatchAsyncMiddleware";
import generateCookie from '../../../cUtility/cGenerateCookie';
import { UserModel } from '../../aModel/bUserAdministration/aUserModel';
import { redisClient } from '../../../../aConnection/dRedisConnection';


const userController = (Model=UserModel, Label="User") => ({
  // List
  list: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // List
      const list = await Model.find();

      // Set Cache
      await redisClient.setex(`${Label.toLowerCase()}-list`, 60, JSON.stringify(list));

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Listed Successfully`,
        list: list
      })
    }
  ),

  // Create
  create: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Create
      const create = await Model.create(request.body);

      // Clear Cache
      await redisClient.del(`${Label.toLowerCase()}-list`);

      // Response
      response.status(201).json({
        success: true,
        message: `${Label} Created Successfully`,
        create: create
      })
    }
  ),

  // Retrieve
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await Model.findById(request.params.id);

      // Set Cache
      await redisClient.setex(`${Label.toLowerCase()}-retrieve:${request.params.id}`, 60, JSON.stringify(retrieve));

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Retrieved Successfully`,
        retrieve: retrieve
      })
    }
  ),

  // Update
  update: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Update
      const update = await Model.findByIdAndUpdate(
        request.params.id,
        request.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false
        }
      )

      // Clear Cache
      await redisClient.del(`${Label.toLowerCase()}-list`, `${Label.toLowerCase()}-retrieve:${request.params.id}`);
      
      // Response
      response.status(201).json({
        success: true,
        message: `${Label}, Updated Successfully`,
        update: update
      })
    }
  ),

  // Delete
  delete: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Delete
      const delete_object = await Model.findOneAndDelete({_id: request.params.id});

      // Clear Cache
      await redisClient.del(`${Label.toLowerCase()}-list`, `${Label.toLowerCase()}-retrieve:${request.params.id}`);

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Deleted Successfully`,
        delete_object: delete_object
      })
    }
  ),

  // Login
  login: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await Model.findOne({eEmail: request.body.eEmail});

      // Response
			generateCookie(200, "User Logged In Successfully", "user_login", retrieve, response)
    }
  ),

  // Register
  register: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Create
      const create = await Model.create(request.body)

      // Response
      generateCookie(201, `User Registered Successfully`, `user_register`, create, response)
    }
  ),

  // Forgot Password
  forgotPassword: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await Model.findOne({eEmail: request.body.eEmail});

      // Get Reset Password Token
      const resetPasswordToken = await retrieve?.getResetPasswordToken();
      
      // Save 
			await retrieve?.save({ validateBeforeSave: false });

      // Message
			const textMessage = `Reset Password Token: ${resetPasswordToken}`;
      
      // Response
      response.status(200).json({
        success: true,
        message: textMessage,
        user_forgot_password: retrieve,
        token: resetPasswordToken
      });
    }
  ),

  // Reset Password
  resetPassword: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Hash Token
      const resetToken = crypto.createHash("sha256").update(request.params.token).digest("hex");

      // Retrieve
      const retrieve = await Model.findOne({
        eResetPasswordToken: resetToken,
        eResetPasswordTokenExpire: { $gt: Date.now() }
      });

      if (retrieve) {
        // Reset Password
        retrieve.ePassword = request.body.ePassword;
        
        // Save
        retrieve.eResetPasswordToken = undefined;
        retrieve.eResetPasswordTokenExpire = undefined;
        await retrieve?.save({ validateBeforeSave: false });
      }

      // Response
      generateCookie(201, `Password Recovered Successfully`, `user_reset_password`, retrieve, response)
    }
  ),

  // Logout
  logout: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await Model.findOne({_id: (request as any).user});

      // Remove Token
      const options: express.CookieOptions = {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
        sameSite: "none"	
      }    

      // Response
			response.status(200).cookie('AUTH_TOKEN_BY_ANKAS', null, options).json({ 
				success: true,
				message: "User Logged Out Successfully",
				user_logout: retrieve
			})
    }
  ),

  // Profile Retrieve
  profileRetrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await Model.findOne({_id: (request as any).user});

      // Response
			response.status(200).json({ 
				success: true,
				message: "User Profile Retrieved Successfully",
				user_profile_retrieve: retrieve
			})
    }
  ),

})

export default userController;
