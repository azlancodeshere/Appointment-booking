import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {isAuthenticated, user} = useContext(AuthContext)
    
  return (
    <nav className="border-b border-slate-800 bg-slate-900/80 px-8 py-5">
                <div className="mx-auto flex max-w-7xl items-center justify-between">

                    <h1 className="text-2xl font-bold text-blue-500">
                        Syncora
                    </h1>

                    <div className="flex items-center gap-8 text-sm text-slate-300">
                        <a href="#" className="hover:text-white">
                            Home
                        </a>

                        <a href="#" className="hover:text-white">
                            Doctors
                        </a>

                        <a href="#" className="hover:text-white">
                            Appointments
                        </a>

                        <a href="#" className="hover:text-white">
                            About
                        </a>
                    </div>

                    <div className="flex items-center gap-3">

                        <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800">
                            My Appointments
                        </button>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
                            {isAuthenticated &&user?.username?.charAt(0).toUpperCase()}
                        </div>

                    </div>

                </div>
            </nav>
  )
}

export default Navbar