import { Router } from "express";

import {
    bookAppointment,
    getMyAppointments,
    updateAppointmentstatus,
    updateAppointment,
    cancelAppointment
} from "../controllers/appointment.controller.js";

import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router();



router.route("/appointment_booked").post(verifyJWT, bookAppointment);
router.route("/my-appointments")
    .get(verifyJWT, getMyAppointments);

router.route("/:appointmentId/status")
    .patch(verifyJWT, updateAppointmentstatus);

router.route("/:appointmentId").patch(verifyJWT,
    updateAppointment);

router.route("/:appointmentId/cancel")
    .patch(verifyJWT, cancelAppointment);


export default router;