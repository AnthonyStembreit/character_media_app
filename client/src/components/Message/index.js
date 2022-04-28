//if state.user.id === message.user.id then className="myMsg" color x float right
//else className="theirMsg" color y float left
import React from 'react';
import { useSelector } from 'react-redux';

export default function Message(props) {
    const state = useSelector(state => state);
    return (
        <div className={props.user.id === state.user.id ? "myMsg": "theirMsg"}>
            <p>{props.message}</p>
            <p>{props.createdAt}</p>
        </div>
    )
}