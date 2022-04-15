import {LOGIN, LOGOUT, SIGN_UP} from '../types'
import axios from 'axios';

const API = {
    signup: (creds) => async dispatch => {
    
        try{
            const res = await axios.post(`/api/signup`, creds)
            dispatch( {
                type: SIGN_UP,
                payload: res.data
            })
        }
        catch(error){
          console.log(error)
        }
    
    },
    login:(creds) => async dispatch => {
    
        try{
            const res = await axios.post(`/api/login`, creds)
            dispatch( {
                type: LOGIN,
                payload: res.data
            })
        }
        catch(error){
          console.log(error)
        }
    
    },
    logout: () => async dispatch => {
    
        try{
            const res = await axios.get(`/api/logout`)
            dispatch( {
                type: LOGOUT,
                payload: res.data
            })
        }
        catch(error){
          console.log(error)
        }
    
    },
}

export default API;