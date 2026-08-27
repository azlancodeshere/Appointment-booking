
import { Router } from "express";

import {
    bookAppointment,
    getMyAppointments,
    updateAppointmentstatus
    }
     from "../controllers/appointment.controller.js"

import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router()




// Protected routes
router.route("/appointment_booked").post(verifyJWT, bookAppointment);


router.route("/my-appointments")
    .get(verifyJWT, getMyAppointments);


router.route("/:appointmentId/status").patch(
    verifyJWT,
    updateAppointmentstatus
);



export default router;