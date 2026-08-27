
import { Appointment } from "../models/appointment.model.js"
import { ApiResponse } from "../../utils/ApiResponse.js"
import { ApiError } from "../../utils/ApiError.js"
import { User } from "../models/user.model.js"


const bookAppointment = async (req, res) => {
    try {

        const { professional, appointmentDate, appointmentTime } = req.body

        if ([professional, appointmentDate, appointmentTime].some((field) => !field || field.trim() === "")) {

            throw new ApiError(
                400,
                "All fields are required"
            )
        }


        if (req.user.role !== "client") {
            throw new ApiError(
                403,
                "Only clients can book appointments"
            )
        }

        const professionalUser = await User.findById(professional);
        if (!professionalUser) {
            throw new ApiError(
                404,
                "Professional not found"
            )

        }

        if (professionalUser.role !== "professional") {
            throw new ApiError(
                400,
                "Selected User is not professional"
            )
        }

        // creating appointment in database
        const appointment = await Appointment.create({
            client: req.user._id, // logged-in user ki ID
            professional,
            appointmentDate,
            appointmentTime
        })
        return res.status(201).json(
            new ApiResponse(
                201,
                "Appointment booked successfully",
                appointment
            )
        )
    } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "Something went wrong"
            )
        )
    }
}

const getMyAppointments = async (req, res) => {

    try {

        let appointments;



        // Agar logged-in user client hai
        if (req.user.role === "client") {
            appointments = await Appointment.find({
                client: req.user._id
            })

        }


        // Agar logged-in user professional hai
        if (req.user.role === "professional") {

            appointments = await Appointment.find({
                professional: req.user._id
            })

        }


        return res.status(200).json(
            new ApiResponse(
                200,
                "Appointment fetched  successfully",
                appointments
            )
        )

    } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "Something went wrong"
            )
        )

    }


}

const updateAppointmentstatus = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        const { status } = req.body;

        if (!status) {
            throw new ApiError(
                400,
                "Status is required"
            )
        }


        if (!["pending", "confirmed", "cancelled"].includes(status)) {
            throw new ApiError(
                400,
                "Invalid appointment status"
            )
        }


        if (req.user.role !== "professional") {
            throw new ApiError(
                403,
                "Only professionals can update appointment status"
            )
        }

        const appointment = await Appointment.findById(appointmentId);
        if (!appointment) {
            throw new ApiError(
                404,
                "Appointment not found"
            )
        }

        if (appointment.professional.toString() !== req.user._id.toString()) {
            throw new ApiError(
                403,
                "You are not authorized to update this appointment"
            )
        }

        appointment.status = status;
        await appointment.save();


        return res.status(200).json(
            new ApiResponse(
                200,
                "Appointment status updated successfully",
                appointment
            )
        )


    } catch (error) {
        return res.status(
            error.statusCode || 500
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "Something went wrong"
            )
        )
    }




}





export {
    bookAppointment,
    getMyAppointments,
    updateAppointmentstatus

}