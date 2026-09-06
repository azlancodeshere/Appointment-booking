
import { Router } from "express";

import {
    registerUser,
    loginUser, 
    logoutUser, 
    changeCurrentPassword, 
    updateAccount, getCurrentUser, 
    getAllUsers, 
    getAllDoctors,
  getAllLawyers, getAllTrainers, getAllSalons,
    refreshAccessToken}
     from "../controllers/user.controller.js"

import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router()

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/").get(getAllUsers)
router.route("/all-doctors").get(getAllDoctors);
router.route("/all-lawyers").get(getAllLawyers);  
router.route("/all-trainers").get(getAllTrainers);
router.route("/all-salons").get(getAllSalons);

// Protected routes
router.route("/logout").post(verifyJWT, logoutUser);

router.route("/change-password").post(
    verifyJWT,
    changeCurrentPassword
);

router.route("/update-account").patch(
    verifyJWT,
    updateAccount
);

router.route("/current-user").get(
    verifyJWT,
    getCurrentUser
);


export default router;