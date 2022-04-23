import React from "react";
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { LOGOUT } from './utils/actions';
import API from './utils/API';
import { useDispatch } from 'react-redux';

export default function Layout() {
    const state = useSelector(state => state);
    const logoutUser = async () => {
       const res = await  API.logout()
       if(res.status===200){
           useDispatch({
               type: LOGOUT
           })
       }else{
           console.log("something went wrong!")
       }
    }
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
                    ? <li onClick={(e)=>{e.preventDefault(); logoutUser()}}><Link to="/logout">Logout</Link></li>
                    : <li><Link to="/">Login</Link></li>
                }
            </ul>

            <Outlet />
        </div>
    );
}