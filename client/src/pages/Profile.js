import React from 'react';
import {useSelector} from 'react-redux'

export default function Profile(){
    const state = useSelector(state => state);
    console.log(state.auth)
    return(
        <div>
            Profile
        </div>
    )
}