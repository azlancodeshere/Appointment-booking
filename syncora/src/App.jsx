import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
function App() {
    return (
        <Routes>
            
            <Route path="/register" element={<RegisterPage/>} />
             <Route path="/login" element={<LoginPage/>} />
            
        </Routes>
    );
}

export default App;