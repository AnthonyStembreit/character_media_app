import React from "react";
import {  useLocation, useNavigate} from 'react-router-dom';
import {login} from '../utils/axios';
import {useSelector, useDispatch} from 'react-redux';

export default function Login() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    let navigate = useNavigate();
    let location = useLocation();
    let auth = state.auth
  
    let from = location.state?.from?.pathname || '/';
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      let formData = new FormData(event.currentTarget);
      let username = formData.get('username') as string;
  
      //this may not work with current axios set up
      login(username, () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      });
    }
  
    return (
        <div>
            login
        </div>
    );
}