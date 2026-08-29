import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api.js";

function RegisterPage() {
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    yearsOfExperience: "",
    serviceType: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
      ...formData,
      role
    };

    console.log(registerData);

    try {
      const response = await api.post(
        "/users/register",
        registerData
      );

      console.log(response);

      navigate("/login");

    } catch (error) {
      console.log("Registration error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

        {/* Role Select */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Select your role
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">
              Select your role
            </option>

            <option value="client">
              Client
            </option>

            <option value="professional">
              Professional
            </option>
          </select>
        </div>


        {/* CLIENT FORM */}
        {role === "client" && (
          <>
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-white">
                Create Client Account
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Book and manage your appointments
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >

              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>


              {/* Username */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>


              {/* Email */}
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


              {/* Password */}
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


              {/* Gender */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="">
                    Select gender
                  </option>

                  <option value="male">
                    Male
                  </option>

                  <option value="female">
                    Female
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>


              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition duration-200 hover:bg-blue-700 active:scale-[0.98]"
              >
                Create Client Account
              </button>

            </form>

            <p className="mt-5 text-center text-sm text-slate-400">
              Already have an account?{" "}

              <Link
                to="/login"
                className="font-medium text-blue-500 hover:text-blue-400"
              >
                Login
              </Link>
            </p>
          </>
        )}


        {/* PROFESSIONAL FORM */}
        {role === "professional" && (
          <>
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-white">
                Create Professional Account
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Manage your availability and appointments
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >

              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>


              {/* Username */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>


              {/* Email */}
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


              {/* Password */}
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


              {/* Gender */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="">
                    Select gender
                  </option>

                  <option value="male">
                    Male
                  </option>

                  <option value="female">
                    Female
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>


              {/* Experience */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Years of Experience
                </label>

                <input
                  type="number"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  min="0"
                  placeholder="Enter years of experience"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>


              {/* Service Type */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Service Type
                </label>

                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="">
                    Select your service
                  </option>

                  <option value="doctor">
                    Doctor
                  </option>

                  <option value="lawyer">
                    Lawyer
                  </option>

                  <option value="trainer">
                    Trainer
                  </option>

                  <option value="salon">
                    Salon
                  </option>
                </select>
              </div>


              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition duration-200 hover:bg-blue-700 active:scale-[0.98]"
              >
                Create Professional Account
              </button>

            </form>

            <p className="mt-5 text-center text-sm text-slate-400">
              Already have an account?{" "}

              <Link
                to="/login"
                className="font-medium text-blue-500 hover:text-blue-400"
              >
                Login
              </Link>
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default RegisterPage;