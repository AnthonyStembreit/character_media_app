import React from 'react';
import { useSelector } from 'react-redux'

export default function MessageBoard() {
    const state = useSelector(state => state);
    console.log(state.auth)
    return (
        <div>
            Message Board
        </div>
    )
}