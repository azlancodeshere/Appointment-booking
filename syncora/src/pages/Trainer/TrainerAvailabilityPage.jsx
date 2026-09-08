import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    FaDumbbell,
    FaCalendarAlt,
    FaClock,
    FaCheckCircle
} from "react-icons/fa";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../api/api";

function TrainerAvailabilityPage() {

    const { trainerId } = useParams();

    const [availability, setAvailability] = useState([]);
    const [loading, setLoading] = useState(true);
    const [booking, setBooking] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {

        const fetchAvailability = async () => {

            try {

                setLoading(true);
                setError("");

                const response = await api.get(
                    `/availability/${trainerId}`
                );

                console.log("Trainer Availability:", response.data);

                setAvailability(
                    response.data.data.availability
                );

            } catch (error) {

                console.log(
                    "TRAINER AVAILABILITY ERROR:",
                    error.response?.data || error
                );

                setError(
                    error.response?.data?.message ||
                    "Unable to fetch trainer availability"
                );

            } finally {

                setLoading(false);

            }
        };

        fetchAvailability();

    }, [trainerId]);


   
    const handleBookAppointment = async (date, startTime) => {

        try {

            setBooking(true);
            setError("");
            setSuccess("");

            const response = await api.post(
                "/appointment/appointment_booked",
                {
                    professional: trainerId,
                    appointmentDate: date,
                    appointmentTime: startTime
                }
            );

            console.log("Trainer Appointment:", response.data);

            setSuccess(
                "Training session request sent successfully. Waiting for trainer confirmation."
            );

        } catch (error) {

            console.log(
                "BOOK TRAINER APPOINTMENT ERROR:",
                error.response?.data || error
            );

            setError(
                error.response?.data?.message ||
                "Unable to book training session"
            );

        } finally {

            setBooking(false);

        }
    };


   
    if (loading) {

        return (
            <div className="min-h-screen bg-slate-950 text-white">

                <Navbar />

                <div className="flex items-center justify-center py-32">

                    <p className="text-slate-400">
                        Loading trainer availability...
                    </p>

                </div>

                <Footer />

            </div>
        );
    }


    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />


           

            <section className="border-b border-slate-800 px-6 py-16">

                <div className="mx-auto max-w-6xl">

                    <div className="flex items-center gap-4">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-500">
                            <FaDumbbell />
                        </div>

                        <div>

                            <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
                                Fitness Professional
                            </p>

                            <h1 className="mt-2 text-4xl font-bold">
                                Trainer Availability
                            </h1>

                        </div>

                    </div>

                    <p className="mt-5 max-w-2xl text-slate-400">
                        Choose an available date and time to book your
                        personal training session.
                    </p>

                </div>

            </section>


          

            <section className="px-6 py-12">

                <div className="mx-auto max-w-6xl">


                  

                    {error && (

                        <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
                            {error}
                        </div>

                    )}


                    

                    {success && (

                        <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-400">

                            <FaCheckCircle />

                            {success}

                        </div>

                    )}


                    {/* NO AVAILABILITY */}

                    {!error && availability.length === 0 && (

                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">

                            <FaCalendarAlt className="mx-auto text-4xl text-slate-600" />

                            <h2 className="mt-5 text-xl font-semibold">
                                No Available Slots
                            </h2>

                            <p className="mt-2 text-slate-400">
                                This trainer has not added any training
                                session slots yet.
                            </p>

                        </div>

                    )}


                   

                    <div className="grid gap-6 md:grid-cols-2">

                        {availability.map((item) => (

                            <div
                                key={item._id}
                                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                            >

                               

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-500">
                                        <FaCalendarAlt />
                                    </div>

                                    <div>

                                        <p className="text-sm text-slate-500">
                                            Training Date
                                        </p>

                                        <h2 className="mt-1 text-xl font-bold">

                                            {new Date(
                                                item.date
                                            ).toLocaleDateString(
                                                "en-IN",
                                                {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric"
                                                }
                                            )}

                                        </h2>

                                    </div>

                                </div>


                                <div className="my-6 border-t border-slate-800" />


                              

                                <div className="mb-4 flex items-center gap-2">

                                    <FaClock className="text-blue-500" />

                                    <p className="text-sm font-medium text-slate-400">
                                        Available Training Times
                                    </p>

                                </div>


                              

                                <div className="grid grid-cols-1 gap-3">

                                    {item.slots.map((slot, index) => (

                                        <button
                                            key={`${item._id}-${index}`}
                                            disabled={booking}
                                            onClick={() =>
                                                handleBookAppointment(
                                                    item.date,
                                                    slot.startTime
                                                )
                                            }
                                            className="flex items-center justify-between rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-4 text-blue-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                                        >

                                            <span className="flex items-center gap-3">

                                                <FaClock />

                                                {slot.startTime}
                                                {" - "}
                                                {slot.endTime}

                                            </span>

                                            <span className="text-xs font-semibold">
                                                Book
                                            </span>

                                        </button>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            <Footer />

        </div>
    );
}

export default TrainerAvailabilityPage;