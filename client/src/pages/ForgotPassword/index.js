import React from 'react';
import { useSelector } from 'react-redux'

export default function ForgotPassword() {
    const state = useSelector(state => state);
    console.log(state.auth)
    return (
        <div>
           <h2>Forgot Password??</h2>
           <form>
               <label htmlFor="resetEmail">Email</label>
               <input id="resetEmail" />
               <label htmlFor="confirmEmail">Confirm Email</label>
               <input id="confirmEmail"/>
               <button>Send Reset Email</button>
           </form>
        </div>
    )
}