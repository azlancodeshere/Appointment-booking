import React, { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi";
import Navbar from "../components/Navbar";


import {
    FaHeart,
    FaTooth,
    FaBalanceScale,
    FaDumbbell,
    FaCut,
    FaGavel,
    FaUserTie,
    FaBriefcase,
    FaSpa,
    FaChild,
} from "react-icons/fa";


function HomePage() {
    const navigate = useNavigate();

    // Default selected service
    const [activeService, setActiveService] = useState("doctor");

    const services = {
        // =========================
        // DOCTOR
        // =========================
        doctor: {
            name: "Doctor",
            icon: "🩺",

            heading: "Book your",
            highlight: "appointment",

            description:
                "Find the right doctor, choose a convenient time, and manage all your appointments from one simple platform.",

            searchLabel: "Search doctor",
            searchPlaceholder: "Search by doctor or specialty",

            categoryLabel: "Specialty",
            categoryPlaceholder: "Select specialty",

            buttonText: "Search Availability",
            primaryButton: "Book Appointment",
            secondaryButton: "Explore Doctors",

            stats: [
                {
                    number: "500+",
                    label: "Doctors",
                },
                {
                    number: "10K+",
                    label: "Appointments",
                },
                {
                    number: "50+",
                    label: "Specialties",
                },
                {
                    number: "24/7",
                    label: "Availability",
                },
            ],

            sectionTitle: "Popular Specialties",
            sectionDescription:
                "Find specialists according to your needs.",

            categories: [
                {
                    icon: <FaHeart />,
                    color: "text-red-500",
                    title: "Cardiology",
                    description:
                        "Heart and cardiovascular specialists",
                },

                {
                    icon: <GiBrain />,
                    color: "text-purple-500",
                    title: "Neurology",
                    description:
                        "Specialists for brain and nerves",
                },

                {
                    icon: <FaTooth />,
                    color: "text-cyan-400",
                    title: "Dentistry",
                    description:
                        "Professional dental care",
                },

                {
                    icon: "👁️",
                    color: "",
                    title: "Ophthalmology",
                    description:
                        "Eye care and vision specialists",
                },
            ],
        },

        // =========================
        // LAWYER
        // =========================
        lawyer: {
            name: "Lawyer",
            icon: "⚖️",

            heading: "Book your",
            highlight: "consultation",

            description:
                "Find the right lawyer, discuss your case, and book a convenient consultation from one simple platform.",

            searchLabel: "Search lawyer",
            searchPlaceholder:
                "Search by lawyer or legal expertise",

            categoryLabel: "Legal Service",
            categoryPlaceholder:
                "Select legal service",

            buttonText: "Find Lawyers",
            primaryButton: "Book Consultation",
            secondaryButton: "Explore Lawyers",

            stats: [
                {
                    number: "300+",
                    label: "Lawyers",
                },
                {
                    number: "5K+",
                    label: "Consultations",
                },
                {
                    number: "25+",
                    label: "Legal Services",
                },
                {
                    number: "24/7",
                    label: "Availability",
                },
            ],

            sectionTitle: "Popular Legal Services",
            sectionDescription:
                "Find the right legal expert for your needs.",

            categories: [
                {
                    icon: <FaBalanceScale />,
                    color: "text-blue-500",
                    title: "Civil Law",
                    description:
                        "Professional help for civil matters",
                },

                {
                    icon: <FaGavel />,
                    color: "text-yellow-500",
                    title: "Criminal Law",
                    description:
                        "Experienced criminal law specialists",
                },

                {
                    icon: <FaUserTie />,
                    color: "text-purple-500",
                    title: "Family Law",
                    description:
                        "Legal support for family matters",
                },

                {
                    icon: <FaBriefcase />,
                    color: "text-cyan-400",
                    title: "Business Law",
                    description:
                        "Legal services for businesses",
                },
            ],
        },

        // =========================
        // TRAINER
        // =========================
        trainer: {
            name: "Trainer",
            icon: "🏋️",

            heading: "Book your",
            highlight: "training session",

            description:
                "Find a professional trainer, choose your preferred time, and start your fitness journey.",

            searchLabel: "Search trainer",
            searchPlaceholder:
                "Search by trainer or fitness type",

            categoryLabel: "Training Type",
            categoryPlaceholder:
                "Select training type",

            buttonText: "Find Trainers",
            primaryButton: "Book Training",
            secondaryButton: "Explore Trainers",

            stats: [
                {
                    number: "250+",
                    label: "Trainers",
                },
                {
                    number: "8K+",
                    label: "Sessions",
                },
                {
                    number: "20+",
                    label: "Training Types",
                },
                {
                    number: "24/7",
                    label: "Availability",
                },
            ],

            sectionTitle: "Popular Training",
            sectionDescription:
                "Choose the right training for your fitness goals.",

            categories: [
                {
                    icon: <FaDumbbell />,
                    color: "text-blue-500",
                    title: "Gym Training",
                    description:
                        "Professional gym and strength training",
                },

                {
                    icon: "🏃",
                    color: "",
                    title: "Running",
                    description:
                        "Improve speed, stamina and endurance",
                },

                {
                    icon: "🧘",
                    color: "text-purple-500",
                    title: "Yoga",
                    description:
                        "Improve flexibility and mental wellness",
                },

                {
                    icon: <FaChild />,
                    color: "text-cyan-400",
                    title: "Personal Training",
                    description:
                        "One-on-one personalized fitness plans",
                },
            ],
        },

        // =========================
        // SALON / BARBER
        // =========================
        salon: {
            name: "Salon",
            icon: "💇",

            heading: "Book your",
            highlight: "salon service",

            description:
                "Discover nearby salons, choose your preferred service, and book your appointment in seconds.",

            searchLabel: "Search salon",
            searchPlaceholder:
                "Search by salon or service",

            categoryLabel: "Service",
            categoryPlaceholder:
                "Select salon service",

            buttonText: "Find Salons",
            primaryButton: "Book Appointment",
            secondaryButton: "Explore Salons",

            stats: [
                {
                    number: "400+",
                    label: "Salons",
                },
                {
                    number: "15K+",
                    label: "Appointments",
                },
                {
                    number: "40+",
                    label: "Services",
                },
                {
                    number: "24/7",
                    label: "Availability",
                },
            ],

            sectionTitle: "Popular Salon Services",
            sectionDescription:
                "Choose from popular beauty and grooming services.",

            categories: [
                {
                    icon: <FaCut />,
                    color: "text-pink-500",
                    title: "Hair Styling",
                    description:
                        "Professional hair styling and cutting",
                },

                {
                    icon: <FaSpa />,
                    color: "text-purple-500",
                    title: "Spa",
                    description:
                        "Relaxing spa and wellness services",
                },

                {
                    icon: "💅",
                    color: "text-red-400",
                    title: "Manicure",
                    description:
                        "Professional nail and manicure care",
                },

                {
                    icon: "🧔",
                    color: "text-cyan-400",
                    title: "Grooming",
                    description:
                        "Complete grooming and styling services",
                },
            ],
        },
    };

    // Current selected service
    const currentService = services[activeService]; //  ise banye kyu kii mujhe sara data lena hai activeservice ka 
    


    // =====================================================
    // BOOK BUTTON NAVIGATION
    // =====================================================
    const handleBookAppointment = () => {
        if (activeService === "doctor") {
            navigate("/doctors");
        }

        else if (activeService === "lawyer") {
            navigate("/lawyers");
        }

        else if (activeService === "trainer") {
            navigate("/trainers");
        }

        else if (activeService === "salon") {
            
            navigate("/barbers");
        }
    };


    // =====================================================
    // EXPLORE BUTTON NAVIGATION
    // =====================================================
    const handleExplore = () => {
        if (activeService === "doctor") {
            navigate("/doctors");
        }

        else if (activeService === "lawyer") {
            navigate("/lawyers");
        }

        else if (activeService === "trainer") {
            navigate("/trainers");
        }

        else if (activeService === "salon") {
            // Salon selected -> BarberPage.jsx
            navigate("/barbers");
        }
    };


    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* =========================================
                NAVBAR
            ========================================== */}
            <Navbar />


            {/* =========================================
                SERVICE SELECTOR
            ========================================== */}
            <section className="px-8 pt-10">

                <div className="mx-auto max-w-7xl">

                    <p className="mb-4 text-sm font-medium text-slate-400">
                        What are you looking for?
                    </p>


                    <div className="flex flex-wrap gap-3">

                        {/* ================= DOCTOR ================= */}
                        <button
                            onClick={() => setActiveService("doctor")}
                            className={`rounded-xl px-5 py-3 font-semibold transition ${
                                activeService === "doctor"
                                    ? "bg-blue-600 text-white"
                                    : "border border-slate-700 bg-slate-900 text-slate-400 hover:border-blue-500 hover:text-white"
                            }`}
                        >
                            🩺 Doctor
                        </button>


                        {/* ================= LAWYER ================= */}
                        <button
                            onClick={() => setActiveService("lawyer")}
                            className={`rounded-xl px-5 py-3 font-semibold transition ${
                                activeService === "lawyer"
                                    ? "bg-blue-600 text-white"
                                    : "border border-slate-700 bg-slate-900 text-slate-400 hover:border-blue-500 hover:text-white"
                            }`}
                        >
                            ⚖️ Lawyer
                        </button>


                        {/* ================= TRAINER ================= */}
                        <button
                            onClick={() => setActiveService("trainer")}
                            className={`rounded-xl px-5 py-3 font-semibold transition ${
                                activeService === "trainer"
                                    ? "bg-blue-600 text-white"
                                    : "border border-slate-700 bg-slate-900 text-slate-400 hover:border-blue-500 hover:text-white"
                            }`}
                        >
                            🏋️ Trainer
                        </button>


                        {/* ================= SALON ================= */}
                        <button
                            onClick={() => setActiveService("salon")}
                            className={`rounded-xl px-5 py-3 font-semibold transition ${
                                activeService === "salon"
                                    ? "bg-blue-600 text-white"
                                    : "border border-slate-700 bg-slate-900 text-slate-400 hover:border-blue-500 hover:text-white"
                            }`}
                        >
                            💇 Salon
                        </button>

                    </div>

                </div>

            </section>


            {/* =========================================
                HERO SECTION
            ========================================== */}
            <section className="px-8 py-20">

                <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

                    <div>

                        {/* Badge */}
                        <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                            Simple • Fast • Reliable
                        </span>


                        {/* Heading */}
                        <h2 className="mt-6 text-5xl font-bold leading-tight">

                            {currentService.heading}

                            <span className="text-blue-500">
                                {" "}
                                {currentService.highlight}
                            </span>

                            <br />

                            in seconds.

                        </h2>


                        {/* Description */}
                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                            {currentService.description}
                        </p>


                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">

                            {/* ================= BOOK BUTTON ================= */}
                            <button
                                onClick={handleBookAppointment}
                                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
                            >
                                {currentService.primaryButton}
                            </button>


                            {/* ================= EXPLORE BUTTON ================= */}
                            <button
                                onClick={handleExplore}
                                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:bg-slate-900"
                            >
                                {currentService.secondaryButton}
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                STATS
            ========================================== */}
            <section className="border-y border-slate-800 bg-slate-900/50 px-8 py-10">

                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">

                    {currentService.stats.map((stat, index) => (

                        <div
                            key={index}
                            className="text-center"
                        >

                            <h3 className="text-3xl font-bold">
                                {stat.number}
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                {stat.label}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* =========================================
                POPULAR CATEGORIES
            ========================================== */}
            <section className="px-8 py-20">

                <div className="mx-auto max-w-7xl">

                    {/* Section Header */}
                    <div className="mb-10">

                        <p className="text-sm font-medium text-blue-500">
                            EXPLORE
                        </p>


                        <h2 className="mt-2 text-3xl font-bold">
                            {currentService.sectionTitle}
                        </h2>


                        <p className="mt-3 text-slate-400">
                            {currentService.sectionDescription}
                        </p>

                    </div>


                    {/* Categories */}
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {currentService.categories.map(
                            (category, index) => (

                                <div
                                    key={index}
                                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
                                >

                                    <div
                                        className={`text-3xl ${category.color}`}
                                    >
                                        {category.icon}
                                    </div>


                                    <h3 className="mt-5 text-xl font-semibold">
                                        {category.title}
                                    </h3>


                                    <p className="mt-2 text-sm text-slate-400">
                                        {category.description}
                                    </p>

                                </div>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =========================================
                FOOTER
            ========================================== */}
            <Footer />

        </div>
    );
}

export default HomePage;