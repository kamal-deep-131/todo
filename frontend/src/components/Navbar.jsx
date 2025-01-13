import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);

    return (
        <header className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="flex-none gap-2">
                {isLoggedIn ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={"/change-password"}>Change password</Link></li>
                            <li><Link to={"/forgot-password"}>Forgot password</Link></li>
                            <li><Link to={"/"}>Add task</Link></li>
                            <li onClick={logout}><p>Logout</p></li>
                        </ul>
                    </div>
                ) :
                    (
                        <Link to="/login" className="btn btn-primary">Login</Link>
                    )
                }
            </div>
        </header>
    )
}

export default Navbar