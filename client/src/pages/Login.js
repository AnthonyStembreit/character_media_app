import { React } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN, SIGN_UP } from '../utils/actions';
import API from '../utils/API';
import { useDispatch } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const formSubmit = async (e) => {
        e.preventDefault();
        const creds = {
            username: document.getElementById("email").value.trim(),
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
    }

    return (
        <div>
            Login
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button onClick={(e) => formSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}