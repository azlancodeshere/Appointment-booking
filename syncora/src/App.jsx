import { Routes, Route, Navigate } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";

import DoctorsPage from "./pages/DoctorsPage.jsx";
import LawyerPage from "./pages/LawyerPage.jsx";


function App() {
    return (
        <Routes>

            {/* Default */}
            <Route
                path="/"
                element={<Navigate to="/home" replace />}
            />

            {/* Authentication */}
            <Route
                path="/register"
                element={<RegisterPage />}
            />

            <Route
                path="/login"
                element={<LoginPage />}
            />

            {/* Home */}
            <Route
                path="/home"
                element={<HomePage />}
            />

            {/* Doctor */}
            <Route
                path="/doctors"
                element={<DoctorsPage />}
            />

            {/* Lawyer */}
            <Route
                path="/lawyers"
                element={<LawyerPage />}
            />

          

           

        </Routes>
    );
}

export default App;