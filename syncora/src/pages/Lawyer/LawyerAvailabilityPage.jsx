import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../api/api";

function LawyerAvailabilityPage() {

    const { lawyerId } = useParams();

    const [availability, setAvailability] = useState([]);
    const [loading, setLoading] = useState(true);
    const [booking, setBooking] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

   
    useEffect(() => {

        const fetchAvailability = async () => {

            try {

                const response = await api.get(
                    `/availability/${lawyerId}`
                );

                console.log("Lawyer Availability:", response.data);

                setAvailability(
                    response.data.data.availability
                );

            } catch (error) {

                console.log("AVAILABILITY ERROR:", error);
                console.log("STATUS:", error.response?.status);
                console.log("DATA:", error.response?.data);

                setError(
                    error.response?.data?.message ||
                    "Unable to fetch lawyer availability"
                );

            } finally {

                setLoading(false);

            }
        };

        fetchAvailability();

    }, [lawyerId]);


   
    const handleBookAppointment = async (date, startTime) => {

        try {

            setBooking(true);
            setError("");
            setSuccess("");

            const response = await api.post(
                "/appointment/appointment_booked",
                {
                    professional: lawyerId,
                    appointmentDate: date,
                    appointmentTime: startTime
                }
            );

            console.log("Appointment:", response.data);

            setSuccess(
                "Appointment request sent successfully. Waiting for lawyer confirmation."
            );

        } catch (error) {

            console.log("BOOK APPOINTMENT ERROR:", error);
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);

            setError(
                error.response?.data?.message ||
                "Unable to book appointment"
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
                        Loading available lawyer slots...
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

                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-500">
                        Lawyer Availability
                    </p>

                    <h1 className="text-4xl font-bold">
                        Available Consultation Slots
                    </h1>

                    <p className="mt-3 text-slate-400">
                        Choose a date and time to book a consultation with this lawyer.
                    </p>

                </div>

            </section>


           

            <section className="px-6 py-12">

                <div className="mx-auto max-w-6xl">

                   

                    {error && (

                        <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-red-400">
                            {error}
                        </div>

                    )}


                  

                    {success && (

                        <div className="mb-6 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-green-400">
                            {success}
                        </div>

                    )}


                   

                    {!error && availability.length === 0 && (

                        <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">

                            <h2 className="text-xl font-semibold">
                                No availability
                            </h2>

                            <p className="mt-2 text-slate-400">
                                This lawyer has not added any consultation slots yet.
                            </p>

                        </div>

                    )}


                   

                    <div className="grid gap-6 md:grid-cols-2">

                        {availability.map((item) => (

                            <div
                                key={item._id}
                                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                            >

                                

                                <div className="mb-5">

                                    <p className="text-sm text-slate-400">
                                        Available Date
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold">

                                        {new Date(
                                            item.date
                                        ).toLocaleDateString("en-IN", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        })}

                                    </h2>

                                </div>


                               

                                <p className="mb-3 text-sm font-medium text-slate-400">
                                    Available Consultation Times
                                </p>


                                <div className="grid grid-cols-2 gap-3">

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
                                            className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                                        >

                                            {slot.startTime}
                                            {" - "}
                                            {slot.endTime}

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

export default LawyerAvailabilityPage;