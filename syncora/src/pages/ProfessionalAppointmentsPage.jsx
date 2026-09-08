import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import api from "../api/api";

function ProfessionalAppointmentsPage() {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchAppointments = async () => {

        try {

            const response = await api.get(
                "/appointment/my-appointments"
            );

            console.log("Appointments:", response.data);

            setAppointments(response.data.data);

        } catch (error) {

            console.log(error);

            setError(
                error.response?.data?.message ||
                "Unable to fetch appointments"
            );

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        fetchAppointments();

    }, []);


    
    const updateStatus = async (appointmentId, status) => {

        try {

            await api.patch(
                `/appointment/${appointmentId}/status`,
                {
                    status
                }
            );

            
            fetchAppointments();

        } catch (error) {

            console.log(error);

            setError(
                error.response?.data?.message ||
                "Unable to update appointment"
            );

        }
    };


    if (loading) {

        return (
            <div className="min-h-screen bg-slate-950 text-white">

                <Navbar />

                <div className="flex justify-center py-32">

                    <p className="text-slate-400">
                        Loading appointments...
                    </p>

                </div>

            </div>
        );
    }


    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />

            <section className="border-b border-slate-800 px-6 py-16">

                <div className="mx-auto max-w-6xl">

                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-500">
                        Professional Dashboard
                    </p>

                    <h1 className="text-4xl font-bold">
                        Appointment Requests
                    </h1>

                    <p className="mt-3 text-slate-400">
                        Manage your client appointment requests.
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


                    {appointments.length === 0 && !error && (

                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">

                            <h2 className="text-xl font-semibold">
                                No appointment requests
                            </h2>

                            <p className="mt-2 text-slate-400">
                                You don't have any appointment requests yet.
                            </p>

                        </div>

                    )}


                    <div className="space-y-5">

                        {appointments.map((appointment) => (

                            <div
                                key={appointment._id}
                                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                            >

                                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                                    <div>

                                        <h2 className="text-xl font-semibold">
                                            Appointment Request
                                        </h2>

                                        <div className="mt-4 space-y-2 text-sm">

                                            <p>
                                                <span className="text-slate-500">
                                                    Client:
                                                </span>{" "}
                                                <span className="text-slate-300">
                                                    {appointment.client?.fullname || appointment.client?.username || "Unknown client"}
                                                </span>
                                            </p>

                                            <p>
                                                <span className="text-slate-500">
                                                    Date:
                                                </span>{" "}
                                                <span className="text-slate-300">
                                                    {new Date(
                                                        appointment.appointmentDate
                                                    ).toLocaleDateString("en-IN")}
                                                </span>
                                            </p>

                                            <p>
                                                <span className="text-slate-500">
                                                    Time:
                                                </span>{" "}
                                                <span className="text-slate-300">
                                                    {appointment.appointmentTime}
                                                </span>
                                            </p>

                                        </div>

                                    </div>


                                    <div>

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                appointment.status === "pending"
                                                    ? "bg-yellow-500/10 text-yellow-400"
                                                    : appointment.status === "confirmed"
                                                    ? "bg-green-500/10 text-green-400"
                                                    : "bg-red-500/10 text-red-400"
                                            }`}
                                        >
                                            {appointment.status}
                                        </span>

                                    </div>

                                </div>


                              

                                {appointment.status === "pending" && (

                                    <div className="mt-6 flex gap-3 border-t border-slate-800 pt-5">

                                        <button
                                            onClick={() =>
                                                updateStatus(
                                                    appointment._id,
                                                    "confirmed"
                                                )
                                            }
                                            className="rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold hover:bg-green-700"
                                        >
                                            Confirm
                                        </button>


                                        <button
                                            onClick={() =>
                                                updateStatus(
                                                    appointment._id,
                                                    "cancelled"
                                                )
                                            }
                                            className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold hover:bg-red-700"
                                        >
                                            Cancel
                                        </button>

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    );
}

export default ProfessionalAppointmentsPage;