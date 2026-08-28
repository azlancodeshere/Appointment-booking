
import mongoose from "mongoose"

const availabilitySchema = new mongoose.Schema({

    professional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
},
date: {
    type: Date,
    required: true
},

slots: [
    {
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        }
    }
]



}
,{timestamps:true})

export const Availability = mongoose.model("Availability",availabilitySchema)