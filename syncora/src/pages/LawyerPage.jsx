import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaBalanceScale,
    FaSearch,
    FaCalendarCheck,
    FaStar,
} from "react-icons/fa";
import api from "../api/api.js"
import Navbar from "../components/Navbar.jsx";

function LawyerPage() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    
    const [lawyers, setLawyers] = useState([])
        
useEffect(() => {

    const fetchLawyers = async () => {
        try {
            const response = await api.get("/users/all-lawyers");

            console.log(response.data);

            setLawyers(response.data.data);

        } catch (error) {
            console.log(error);
            console.log("Error fetching lawyers:", error);
        }
    };

    fetchLawyers();

}, []);
    

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar/>

            {/* Header */}
            <section className="border-b border-slate-800 px-8 py-14">

                <div className="mx-auto max-w-7xl">

                    <p className="text-sm font-semibold tracking-wider text-blue-500">
                        LEGAL PROFESSIONAL DIRECTORY
                    </p>

                    <h1 className="mt-4 text-5xl font-bold">
                        Find the Right Lawyer
                    </h1>

                    <p className="mt-5 text-lg text-slate-400">
                        Search verified lawyers, compare their experience
                        and book a consultation easily.
                    </p>


                    <div className="mt-10 flex gap-4">

                        <div className="relative flex-1">

                            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-500" />

                            <input
                                type="text"
                                placeholder="Search lawyer or legal service..."
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


            {/* Lawyers */}
            <section className="px-8 py-16">

                <div className="mx-auto max-w-7xl">

                    <h2 className="text-3xl font-bold">
                        Available Lawyers
                    </h2>

                    <p className="mt-2 text-slate-400">
                        {lawyers.length} professionals found
                    </p>


                    <div className="mt-10 grid gap-6 md:grid-cols-2">

                        {lawyers.map((lawyer) => (

                            <div
                                key={lawyer.id}
                                className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
                            >           

                                <div className="flex items-center gap-5">

                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-3xl text-blue-500">
                                        <FaBalanceScale />
                                    </div>

                                    <div>

                                        <h3 className="text-2xl font-bold">
                                            {lawyer.username}
                                        </h3>

                                        <p className="mt-1 text-blue-500">
                                            {lawyer.specialty}
                                        </p>

                                    </div>

                                </div>


                                <div className="mt-8 space-y-4 text-slate-400">

                                    <div className= "flex justify-between">
                                        <span>Experience</span>
                                        <span classN    ame="text-white">
                                            {lawyer.yearsOfExperience}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Gender</span>
                                        <span className="text-white">
                                            {lawyer.gender}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Rating</span>

                                        <span className="flex items-center gap-2 text-yellow-400">
                                            <FaStar />
                                            {lawyer.rating}
                                        </span>
                                    </div>

                                </div>


                                <div className="mt-6 inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
                                    Available for consultation
                                </div>


                                <div className="mt-8 flex gap-4">

                                    <button className="flex-1 rounded-xl border border-slate-700 py-4 font-semibold text-slate-300 hover:bg-slate-800">
                                        View Profile
                                    </button>

                                    <button
                                        onClick={() =>
                                            navigate(`/lawyers/${lawyer.id}`)
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

export default LawyerPage;