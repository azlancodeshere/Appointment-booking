import { Routes, Route, Navigate } from "react-router-dom";

// Authentication
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

// Main pages
import HomePage from "./pages/HomePage.jsx";
import DoctorsPage from "./pages/DoctorsPage.jsx";
import LawyerPage from "./pages/LawyerPage.jsx";
import BarberPage from "./pages/BarberPage.jsx";
import TrainerPage from "./pages/TrainerPage.jsx";

// Doctor pages
import AvailabilityPage from "./pages/Doctor/AvailabilityPage.jsx";
import DoctorAvailabilityPage from "./pages/Doctor/DoctorAvailabilityPage.jsx";

// Professional pages
import ProfessionalAppointmentsPage
    from "./pages/ProfessionalAppointmentsPage.jsx";


function App() {

    return (
        <Routes>

            {/* =========================
                DEFAULT
            ========================= */}

            <Route
                path="/"
                element={<Navigate to="/home" replace />}
            />


            {/* =========================
                AUTHENTICATION
            ========================= */}

            <Route
                path="/register"
                element={<RegisterPage />}
            />

            <Route
                path="/login"
                element={<LoginPage />}
            />


            {/* =========================
                HOME
            ========================= */}

            <Route
                path="/home"
                element={<HomePage />}
            />


            {/* =========================
                CLIENT - PROFESSIONAL LIST
            ========================= */}

            <Route
                path="/doctors"
                element={<DoctorsPage />}
            />

            <Route
                path="/lawyers"
                element={<LawyerPage />}
            />

            <Route
                path="/barbers"
                element={<BarberPage />}
            />

            <Route
                path="/trainers"
                element={<TrainerPage />}
            />


            {/* =========================
                PROFESSIONAL AVAILABILITY
            ========================= */}

            {/* Professional creates slots */}

            <Route
                path="/availability"
                element={<AvailabilityPage />}
            />


            {/* Client sees selected doctor's slots */}

            <Route
                path="/doctors/:doctorId/availability"
                element={<DoctorAvailabilityPage />}
            />


            {/* =========================
                PROFESSIONAL APPOINTMENTS
            ========================= */}

            {/* Professional sees client requests */}

            <Route
                path="/professional/appointments"
                element={<ProfessionalAppointmentsPage />}
            />


        </Routes>
    );
}

export default App;