import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api.js"
import {AuthContext} from "../context/AuthContext.jsx"

function LoginPage() {

    const [formData, setFormData] = useState({
        email:"",
        password:""

    })


    const navigate = useNavigate();
    

   const {setUser, setIsAuthenticated} = useContext(AuthContext)


    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        }) }

        const handleSubmit = async (e) =>{
            e.preventDefault();


            console.log(formData)

            try {

              const response = await api.post("/users/login", formData)
              console.log(response.data)
              setUser(response.data.data);
            setIsAuthenticated(true)
 
            navigate("/home")
              
            } catch (error) {
              console.log(error)
               setIsAuthenticated(false)
              
            }


        }




  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-10">

      <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Login to manage your appointments
          </p>
        </div>


        
        <form className="space-y-5"
        onSubmit={handleSubmit}>

         
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>


        
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>


          
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition duration-200 hover:bg-blue-700 active:scale-[0.98]"
          >
            Login
          </button>

        </form>


     
        <p className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-medium text-blue-500 hover:text-blue-400"
          >
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}

export default LoginPage;