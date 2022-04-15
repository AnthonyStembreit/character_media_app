import React from "react";
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Layout() {
    const state = useSelector(state => state);
    return (
        <div>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                {state.auth 
                ? <li><Link to="/logout">Logout</Link></li>
                : <li><Link to="/login">Login</Link></li>
                }
            </ul>

            <Outlet />
        </div>
    );
}