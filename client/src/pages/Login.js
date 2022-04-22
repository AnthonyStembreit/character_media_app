import { React, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN, SIGN_UP } from '../utils/actions';
import API from '../utils/API';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [loginFormStatus, setLoginFormStatus] = useState(true)
    const formSubmit = async (e) => {
        e.preventDefault();
        if (loginFormStatus) {
            const creds = {
                email: document.getElementById("email").value.trim(),
                password: document.getElementById("password").value.trim()
            }
            let axiosres = await API.login(creds)
            if (axiosres.status === 200) {
                dispatch({
                    type: LOGIN,
                    payload: axiosres.data
                });
                navigate(from, { replace: true });
            } else {
                console.log("wrong credentials!")
            }
        }else{
            const newPass =document.getElementById("password").value.trim()
            const confirmPass = document.getElementById("confrim-pass").value.trim()
            if(newPass !== confirmPass){
                alert("passwords must match")
            }else{
                const creds = {
                    email: document.getElementById("email").value.trim(),
                    password: newPass,
                    username: document.getElementById("username").value.trim(),
                }
                let res = await API.signup(creds)
                if (res.status === 200) {
                    dispatch({
                        type: SIGN_UP,
                        payload: res.data
                    });
                    navigate(from, { replace: true });
                } else {
                    alert("something went wrong!")
                }
                alert("sign up!")
            }
        }
    }

    return (
        <div>
            {loginFormStatus ? <h2>Login</h2> : <h2>Sign-up</h2>}
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
                {!loginFormStatus ? <>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </> : ""}
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                {!loginFormStatus ? <>
                    <label htmlFor="confirm-pass">Confirm Password</label>
                    <input type="password" id="confirm-pass" />
                </> : ""}
                <button onSubmit={(e) => formSubmit(e)}>Submit</button>
                {loginFormStatus ? <button onClick={(e) => { e.preventDefault(); setLoginFormStatus(false) }}>sign-up?</button> : <button onClick={(e) => { e.preventDefault(); setLoginFormStatus(true) }}>log-in?</button>}
            </form>
        </div>
    )
}