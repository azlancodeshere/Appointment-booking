import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import api from "../api/api";

function AppointmentsPage() {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchAppointments = async () => {

        try {

            const response = await api.get(
                "/appointment/my-appointments"
            );

            console.log("Client Appointments:", response.data);

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

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 text-white">
                <Navbar />

                <div className="flex justify-center py-32">
                    <p className="text-slate-400">
                        Loading appointments...
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
                        Client Dashboard
                    </p>

                    <h1 className="text-4xl font-bold">
                        My Appointments
                    </h1>

                    <p className="mt-3 text-slate-400">
                        View your appointment requests and their status.
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
                                No appointments
                            </h2>

                            <p className="mt-2 text-slate-400">
                                You don't have any appointments yet.
                            </p>

                        </div>
                    )}

                    <div className="space-y-5">

                        {appointments.map((appointment) => (

                            <div
                                key={appointment._id}
                                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                            >

                                <div className="flex items-center justify-between">

                                    <div>

                                        <h2 className="text-xl font-semibold">
                                            Appointment
                                        </h2>

                                        <div className="mt-4 space-y-2 text-sm">

                                            <p>
                                                <span className="text-slate-500">
                                                    Professional:
                                                </span>{" "}
                                                <span className="text-slate-300">
                                                    {appointment.professional?.fullname ||
                                                        appointment.professional?.username ||
                                                        "Professional"}
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

                                    <span
                                        className={`rounded-full px-4 py-2 text-xs font-medium ${
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

                        ))}

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    );
}

export default AppointmentsPage;