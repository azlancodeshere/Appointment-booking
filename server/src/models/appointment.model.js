import mongoose from "mongoose"

const appointmentSchema = new mongoose.Schema({

    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    professional: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    appointmentDate: {
        type: Date,
        required: true
    },

    appointmentTime: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    }

}, { timestamps: true })

export const Appointment = mongoose.model(
    "Appointment",
    appointmentSchema
)