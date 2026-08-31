import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DoctorsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />

            {/* Doctors Page */}
            <section className="px-8 py-16">

                <div className="mx-auto max-w-7xl">

                    <h1 className="text-4xl font-bold">
                        Find Your Doctor
                    </h1>

                    <p className="mt-3 text-slate-400">
                        Find the right doctor and book your appointment.
                    </p>

                </div>

            </section>

            <Footer />

        </div>
    );
}

export default DoctorsPage;