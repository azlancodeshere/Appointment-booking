import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    FaSearch,
    FaUserMd,
    FaStar,
    FaCalendarCheck
} from "react-icons/fa";

function DoctorsPage() {

    const doctors = [
        {
            id: 1,
            name: "Dr. Rahul Sharma",
            serviceType: "Doctor",
            experience: 8,
            gender: "Male",
            rating: 4.8,
            available: true
        },
        {
            id: 2,
            name: "Dr. Priya Mehta",
            serviceType: "Doctor",
            experience: 6,
            gender: "Female",
            rating: 4.9,
            available: true
        },
        {
            id: 3,
            name: "Dr. Arjun Kapoor",
            serviceType: "Doctor",
            experience: 10,
            gender: "Male",
            rating: 4.7,
            available: false
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />

           
            <section className="border-b border-slate-800 px-6 py-16">

                <div className="mx-auto max-w-7xl">

                    <div className="max-w-2xl">

                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-500">
                            Professional Directory
                        </p>

                        <h1 className="text-4xl font-bold md:text-5xl">
                            Find the Right Doctor
                        </h1>

                        <p className="mt-4 text-slate-400">
                            Search verified professionals, compare their
                            experience and book an appointment easily.
                        </p>

                    </div>

                 
                    <div className="mt-8 flex max-w-3xl">

                        <div className="relative w-full">

                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                            <input
                                type="text"
                                placeholder="Search doctor by name..."
                                className="w-full rounded-xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                            />

                        </div>

                        <button className="ml-3 rounded-xl bg-blue-600 px-6 font-semibold hover:bg-blue-700">
                            Search
                        </button>

                    </div>

                </div>

            </section>


            
            <section className="px-6 py-14">

                <div className="mx-auto max-w-7xl">

                   
                    <div className="mb-10 flex flex-wrap gap-4">

                        <select className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-300 outline-none">
                            <option>All Experience</option>
                            <option>0 - 5 Years</option>
                            <option>5 - 10 Years</option>
                            <option>10+ Years</option>
                        </select>

                        <select className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-300 outline-none">
                            <option>All Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>

                        <select className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-300 outline-none">
                            <option>Availability</option>
                            <option>Available Today</option>
                        </select>

                    </div>


                  
                    <div className="mb-6 flex items-center justify-between">

                        <div>
                            <h2 className="text-2xl font-bold">
                                Available Doctors
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                {doctors.length} professionals found
                            </p>
                        </div>

                    </div>


                   
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {doctors.map((doctor) => (

                            <div
                                key={doctor.id}
                                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-slate-700"
                            >

                                
                                <div className="flex items-center gap-4">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/10 text-2xl text-blue-500">
                                        <FaUserMd />
                                    </div>

                                    <div>

                                        <h3 className="text-lg font-semibold">
                                            {doctor.name}
                                        </h3>

                                        <p className="text-sm text-blue-500">
                                            {doctor.serviceType}
                                        </p>

                                    </div>

                                </div>


                               
                                <div className="mt-6 space-y-3">

                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">
                                            Experience
                                        </span>

                                        <span className="text-slate-300">
                                            {doctor.experience} years
                                        </span>
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">
                                            Gender
                                        </span>

                                        <span className="text-slate-300">
                                            {doctor.gender}
                                        </span>
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">
                                            Rating
                                        </span>

                                        <span className="flex items-center gap-1 text-yellow-400">
                                            <FaStar />
                                            {doctor.rating}
                                        </span>
                                    </div>

                                </div>


                               
                                <div className="mt-5">

                                    {doctor.available ? (

                                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                                            Available for booking
                                        </span>

                                    ) : (

                                        <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                                            Currently unavailable
                                        </span>

                                    )}

                                </div>


                                
                                <div className="mt-6 flex gap-3">

                                    <button className="flex-1 rounded-lg border border-slate-700 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800">
                                        View Profile
                                    </button>

                                    <button
                                        disabled={!doctor.available}
                                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-semibold hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-500"
                                    >
                                        <FaCalendarCheck />
                                        Book
                                    </button>

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

export default DoctorsPage;