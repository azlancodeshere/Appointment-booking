import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaPlus, FaTrash, FaCalendarAlt } from "react-icons/fa";
import api from "../../api/api.js";
import { useNavigate } from "react-router-dom";

function AvailabilityPage() {
    const [date, setDate] = useState("");

    const [slots, setSlots] = useState([
        {
            startTime: "",
            endTime: ""
        }
    ]);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    
    const addSlot = () => {
        setSlots([
            ...slots,
            {
                startTime: "",
                endTime: ""
            }
        ]);
    };

   
    const removeSlot = (index) => {
        if (slots.length === 1) {
            return;
        }

        setSlots(slots.filter((_, i) => i !== index));
    };

  
    const handleSlotChange = (index, field, value) => {
        const updatedSlots = [...slots];

        updatedSlots[index][field] = value;

        setSlots(updatedSlots);
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        // Date validation
        if (!date) {
            setError("Please select a date");
            return;
        }

        // Slot validation
        const invalidSlot = slots.some(
            (slot) => !slot.startTime || !slot.endTime
        );

        if (invalidSlot) {
            setError("Please fill all time slots");
            return;
        }

        // Check start and end time
        const invalidTime = slots.some(
            (slot) => slot.startTime >= slot.endTime
        );

        if (invalidTime) {
            setError("End time must be greater than start time");
            return;
        }

        try {
            setLoading(true);

            const response = await api.post(
                "/availability/set-availability",
                {
                    date,
                    slots
                }

              
            );

            console.log(response.data);

            setMessage("Availability saved successfully!");


            // Reset form
            setDate("");

            setSlots([
                {
                    startTime: "",
                    endTime: ""
                }
            ]);

             navigate("/"); 

        } catch (error) {
            console.log("Availability error:", error);

            setError(
                error.response?.data?.message ||
                "Something went wrong while saving availability"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />

            <section className="px-6 py-16">

                <div className="mx-auto max-w-3xl">

                  
                    <div className="mb-10">

                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-500">
                            Professional Dashboard
                        </p>

                        <h1 className="text-4xl font-bold md:text-5xl">
                            Set Your Availability
                        </h1>

                        <p className="mt-4 text-slate-400">
                            Choose a date and add the time slots when clients
                            can book an appointment with you.
                        </p>

                    </div>


                    
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8"
                    >

                     
                        <div className="mb-8">

                            <label className="mb-3 block text-sm font-medium text-slate-300">
                                Select Date
                            </label>

                            <div className="relative">

                                <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 pl-11 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                />

                            </div>

                        </div>


                       
                        <div className="mb-4 flex items-center justify-between">

                            <div>

                                <h2 className="text-xl font-semibold">
                                    Time Slots
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Add the times when clients can book you.
                                </p>

                            </div>

                        </div>


                       
                        <div className="space-y-4">

                            {slots.map((slot, index) => (

                                <div
                                    key={index}
                                    className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                                >

                                    <div className="mb-3 flex items-center justify-between">

                                        <span className="text-sm font-medium text-slate-400">
                                            Slot {index + 1}
                                        </span>

                                        {slots.length > 1 && (

                                            <button
                                                type="button"
                                                onClick={() => removeSlot(index)}
                                                className="text-red-400 transition hover:text-red-300"
                                            >
                                                <FaTrash />
                                            </button>

                                        )}

                                    </div>


                                    <div className="grid gap-4 md:grid-cols-2">

                                       
                                        <div>

                                            <label className="mb-2 block text-sm text-slate-400">
                                                Start Time
                                            </label>

                                            <input
                                                type="time"
                                                value={slot.startTime}
                                                onChange={(e) =>
                                                    handleSlotChange(
                                                        index,
                                                        "startTime",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
                                            />

                                        </div>


                                       
                                        <div>

                                            <label className="mb-2 block text-sm text-slate-400">
                                                End Time
                                            </label>

                                            <input
                                                type="time"
                                                value={slot.endTime}
                                                onChange={(e) =>
                                                    handleSlotChange(
                                                        index,
                                                        "endTime",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
                                            />

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>


                      
                        <button
                            type="button"
                            onClick={addSlot}
                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-700 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:bg-slate-800 hover:text-white"
                        >
                            <FaPlus />
                            Add Another Slot
                        </button>


                        
                        {error && (

                            <div className="mt-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                                {error}
                            </div>

                        )}


                        
                        {message && (

                            <div className="mt-5 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                                {message}
                            </div>

                        )}


                       
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-700"
                        >
                            {loading
                                ? "Saving..."
                                : "Save Availability"}
                        </button>

                    </form>

                </div>

            </section>

            <Footer />

        </div>
    );
}

export default AvailabilityPage;