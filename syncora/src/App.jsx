import { Routes, Route, Navigate } from "react-router-dom";


import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";


import HomePage from "./pages/HomePage.jsx";
import DoctorsPage from "./pages/DoctorsPage.jsx";
import LawyerPage from "./pages/LawyerPage.jsx";
import BarberPage from "./pages/BarberPage.jsx";
import TrainerPage from "./pages/TrainerPage.jsx";

import AvailabilityPage from "./pages/Doctor/AvailabilityPage.jsx";
import DoctorAvailabilityPage from "./pages/Doctor/DoctorAvailabilityPage.jsx";


import LawyerAvailabilityPage from "./pages/Lawyer/LawyerAvailabilityPage.jsx";


import BarberAvailabilityPage from "./pages/Barber/BarberAvailabilityPage.jsx";


import TrainerAvailabilityPage from "./pages/Trainer/TrainerAvailabilityPage.jsx";


import ProfessionalAppointmentsPage
    from "./pages/ProfessionalAppointmentsPage.jsx";

import AppointmentsPage from "./pages/AppointmentsPage.jsx";


function App() {

    return (
        <Routes>

           
            <Route
                path="/"
                element={<Navigate to="/home" replace />}
            />



            <Route
                path="/register"
                element={<RegisterPage />}
            />

            <Route
                path="/login"
                element={<LoginPage />}
            />



            <Route
                path="/home"
                element={<HomePage />}
            />



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



            <Route
                path="/availability"
                element={<AvailabilityPage />}
            />


           
            <Route
                path="/doctors/:doctorId/availability"
                element={<DoctorAvailabilityPage />}
            />



            <Route
                path="/lawyers/:lawyerId"
                element={<LawyerAvailabilityPage />}
            />


           

            <Route
                path="/barbers/:barberId"
                element={<BarberAvailabilityPage />}
            />


          

            <Route
                path="/trainers/:trainerId"
                element={<TrainerAvailabilityPage />}
            />



            <Route
                path="/appointments"
                element={<AppointmentsPage />}
            />


           

            <Route
                path="/professional/appointments"
                element={<ProfessionalAppointmentsPage />}
            />


        </Routes>
    );
}

export default App;