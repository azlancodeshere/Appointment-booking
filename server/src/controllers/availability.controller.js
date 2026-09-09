import { Appointment } from "../models/appointment.model.js"
import { ApiResponse } from "../../utils/ApiResponse.js"
import { ApiError } from "../../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { Availability } from "../models/availability.model.js"



const setAvailability = async (req, res) => {
    try {
       
         
        const { date, slots } = req.body;

        if (!date || !slots || slots.length === 0) {
            throw new ApiError(
                400,
                "Date and at least one slot are required"
            )
        }
       
        if (req.user.role !== "professional") {
            throw new ApiError(
                403,
                "only professional  have acces to add slot and time "
            )
        }

        const availability = await Availability.create({
            professional: req.user._id,
            date, slots
        })



        return res.status(201).json(
            new ApiResponse(
                201,
                "Availability set successfully",
                availability
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


//kisi specific professional ki pehle se saved availability fetch/dekhna
const getProfessionalAvailability = async (req, res) => {

    try {
        const { professionalId } = req.params;

        const availability = await Availability.find({
            professional: professionalId
        })

        if (!availability || availability.length === 0) {
            throw new ApiError(
                404,
                "Professional availability not found"
            );
        }

        

        

        return res.status(200).json(
            new ApiResponse(
                200,
                "ProfessionalAvailability fetched successfully",
               {availability,
                
               }
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


const getAvailableToday = async (req, res) => {
    try {

         const { serviceType } = req.query;
         
        const today = new Date();

        const startOfDay = new Date(today);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(today);
        endOfDay.setHours(23, 59, 59, 999);

        const availability = await Availability.find({
            date: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        }).populate({
            path: "professional",
            match: {
                role: "professional",
                serviceType: serviceType,
                isAvailable: true
            },
            select: "-password -refreshToken"
        });

        const professionals = availability
            .map((item) => item.professional)
            .filter((professional) => professional);

        return res.status(200).json(
            new ApiResponse(
                200,
                "Available professionals fetched successfully",
                professionals
            )
        );

    } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "Something went wrong"
            )
        );
    }
};


export {
    setAvailability,
    getProfessionalAvailability,
    getAvailableToday

}


