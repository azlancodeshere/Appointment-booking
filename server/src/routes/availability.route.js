import { Router } from "express";

import { setAvailability,getProfessionalAvailability  } from "../controllers/availability.controller.js";

import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router();


// Protected route

router.route("/set-availability").post(
    verifyJWT,
    setAvailability
);

router.route("/:professionalId")
    .get(verifyJWT, getProfessionalAvailability);


export default router;