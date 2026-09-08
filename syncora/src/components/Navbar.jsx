import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { isAuthenticated, user } = useContext(AuthContext);

    const navigate = useNavigate();

    return (
        <nav className="border-b border-slate-800 bg-slate-900/80 px-8 py-5">
            <div className="mx-auto flex max-w-7xl items-center justify-between">

                <h1
                    className="text-2xl font-bold text-blue-500 cursor-pointer"
                    onClick={() => navigate("/home")}
                >
                    Syncora
                </h1>

                <div className="flex items-center gap-8 text-sm text-slate-300">

                    <button
                        onClick={() => navigate("/home")}
                        className="hover:text-white"
                    >
                        Home
                    </button>

                    <button
                        onClick={() => navigate("/doctors")}
                        className="hover:text-white"
                    >
                        Doctors
                    </button>

                    <button
                        onClick={() => {
                            if (user?.role === "professional") {
                                navigate("/professional/appointments");
                            } else {
                                navigate("/appointments");
                            }
                        }}
                        className="hover:text-white"
                    >
                        Appointments
                    </button>

                    <button
                        className="hover:text-white"
                    >
                        About
                    </button>

                </div>

                <div className="flex items-center gap-3">

                   
                    {isAuthenticated && user?.role === "professional" && (
                        <button
                            onClick={() => navigate("/availability")}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-700"
                        >
                            Add Slots
                        </button>
                    )}

                 
                    <button
                        className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
                        onClick={() => {
                            if (user?.role === "professional") {
                                navigate("/professional/appointments");
                            } else {
                                navigate("/appointments");
                            }
                        }}
                    >
                        My Appointments
                    </button>

                 
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
                        {isAuthenticated &&
                            user?.username?.charAt(0).toUpperCase()}
                    </div>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;