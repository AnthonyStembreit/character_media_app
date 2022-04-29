import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function ResetPassword() {
    const state = useSelector(state => state);
    const [validToken, setValidToken] = useState(false)
    console.log(state.auth)
    useEffect(() => {
        const validateToken = async () => {
          //  let res = await axios call here
          //if(res.status === 200){ setValidToken(true)}
        }
        validateToken()
    }, [])
    return (
        <div>
            {validToken? <>
            <h2>Password Reset</h2>
            <form>
                <label htmlFor="newPassword">Password</label>
                <input id="newPassword" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" />
                <button>Reset Password</button>
            </form>
            </>
            :<p>Your Token Has Expired!<br/>Try again <Link to="/forgot-password">here</Link> or <Link to="/login">login</Link></p>
            }
        </div>
    )
}