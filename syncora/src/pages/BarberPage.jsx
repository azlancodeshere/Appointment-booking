import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaCut,
    FaSearch,
    FaCalendarCheck,
    FaStar,
} from "react-icons/fa";
import api from "../api/api.js"
import Navbar from "../components/Navbar.jsx";  

function BarberPage() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const [barbers, setBarbers] = useState([]);
  
    useEffect(() => {

    const fetchBarbers = async () => {
        try {
            const response = await api.get("/users/all-salons");

            console.log(response.data);

            setBarbers(response.data.data);

        } catch (error) {
            console.log(error);
            console.log("Error fetching barbers:", error);
        }
    };

    fetchBarbers();

}, []);


    

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar/>   

          
            <section className="border-b border-slate-800 px-8 py-14">

                <div className="mx-auto max-w-7xl">

                    <p className="text-sm font-semibold tracking-wider text-blue-500">
                        BARBER & GROOMING DIRECTORY
                    </p>

                    <h1 className="mt-4 text-5xl font-bold">
                        Find the Right Barber
                    </h1>

                    <p className="mt-5 text-lg text-slate-400">
                        Find professional barbers, compare their services
                        and book your appointment easily.
                    </p>


                    {/* Search */}
                    <div className="mt-10 flex gap-4">

                        <div className="relative flex-1">

                            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-500" />

                            <input
                                type="text"
                                placeholder="Search barber or service..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-14 py-5 text-white outline-none focus:border-blue-500"
                            />

                        </div>

                        <button className="rounded-xl bg-blue-600 px-8 font-semibold hover:bg-blue-700">
                            Search
                        </button>

                    </div>

                </div>

            </section>


          
            <section className="px-8 py-16">

                <div className="mx-auto max-w-7xl">

                    <h2 className="text-3xl font-bold">
                        Available Barbers
                    </h2>

                    <p className="mt-2 text-slate-400">
                        {barbers.length} professionals found
                    </p>


                    <div className="mt-10 grid gap-6 md:grid-cols-2">

                        {barbers.map((barber) => (

                            <div
                                key={barber._id}
                                className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
                            >

                                
                                <div className="flex items-center gap-5">

                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-3xl text-blue-500">
                                        <FaCut />
                                    </div>

                                    <div>

                                        <h3 className="text-2xl font-bold">
                                            {barber.username}
                                        </h3>

                                        <p className="mt-1 text-blue-500">
                                            {barber.specialty}
                                        </p>

                                    </div>

                                </div>


                              
                                <div className="mt-8 space-y-4 text-slate-400">

                                    <div className="flex justify-between">
                                        <span>Experience</span>

                                        <span className="text-white">
                                            {barber.yearsOfExperience}
                                        </span>
                                    </div>


                                    <div className="flex justify-between">
                                        <span>Gender</span>

                                        <span className="text-white">
                                            {barber.gender}
                                        </span>
                                    </div>


                                   <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">
                                          Specialization
                                        </span>

                                        <p className="text-sm text-blue-500">
                                            {barber.specialization  }
                                        </p>
                                    </div>


                                </div>


                              
                                <div className="mt-6 inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
                                    Available for booking
                                </div>


                               
                                <div className="mt-8 flex gap-4">

                                    <button
                                        className="flex-1 rounded-xl border border-slate-700 py-4 font-semibold text-slate-300 hover:bg-slate-800"
                                    >
                                        View Profile
                                    </button>


                                    <button
                                        onClick={() =>
                                            navigate(`/barbers/${barber._id}`)
                                        }
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-700"
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

        </div>
    );
}

export default BarberPage;