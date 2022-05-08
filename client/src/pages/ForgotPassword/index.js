import React from 'react';
import { useSelector } from 'react-redux'
import API from '../../utils/API';

export default function ForgotPassword() {
    const state = useSelector(state => state);
    console.log(state.auth)
    const handleResetEmail = async (e) => {
        e.preventDefault();
        const email = document.getElementById("resetEmail").value.trim()
        const confirmEmail = document.getElementById("confirmEmail").value.trim()
        if (email && confirmEmail) {
            if(email === confirmEmail){
                console.log(email, confirmEmail)
                //axios call here
               const res = await API.send_email({email})
               if(res.status===200){
                   alert("email has been sent")
               }
            }
            else{
                alert("Emails must match!")
            }
        } else {
            alert("Must enter email in both fields!")
        }
    }
    return (
        <div>
            <h2>Forgot Password??</h2>
            <form onSubmit={(e) => { handleResetEmail(e) }}>
                <label htmlFor="resetEmail">Email</label>
                <input id="resetEmail" />
                <label htmlFor="confirmEmail">Confirm Email</label>
                <input id="confirmEmail" />
                <button>Send Reset Email</button>
            </form>
        </div>
    )
}