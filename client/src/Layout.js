import React from "react";
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
}