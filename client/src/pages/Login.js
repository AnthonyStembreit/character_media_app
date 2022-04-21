import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import {LOGIN, LOGOUT, SIGN_UP} from '../utils/actions'
import API from '../utils/API';
import { useSelector, useDispatch } from 'react-redux';
export default function Login() {
    // console.log(API)
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    let navigate = useNavigate();
    let location = useLocation();
    let auth = state.auth;
    console.log(state.auth);
    let from = location.state?.from?.pathname || '/';

    // function handleSubmit(event) {
    //   event.preventDefault();

    //   let formData = new FormData(event.currentTarget);
    //   let username = formData.get('username')
    //   console.log(username)

    //   //this may not work with current axios set up
    //   API.login(username, () => {
    //     // Send them back to the page they tried to visit when they were
    //     // redirected to the login page. Use { replace: true } so we don't create
    //     // another entry in the history stack for the login page.  This means that
    //     // when they get to the protected page and click the back button, they
    //     // won't end up back on the login page, which is also really nice for the
    //     // user experience.
    //     navigate(from, { replace: true });
    //   });
    // }
    const formSubmit = async (e) => {
        e.preventDefault();
        const creds = {
            username: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value.trim()
        }
        console.log(creds)
        let axiosres = await API.login(creds)
        console.log(axiosres)
        dispatch({
            type: LOGIN,
            payload: axiosres.data
        })
        // if (e.target.innerText === "Submit") {
        // } 
        // else {
        //     axios.post('/api/user', creds).then(res => {
        //         console.log(res)
        //         const userData = res.data
        //         if (res.status === 200) {
        //             dispatch({ type: LOGIN, userData });
        //         }
        //     })
        // }
    }
    return (
        <div>
            Login
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password"/>
                <button onClick={(e) => formSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}