import React from 'react';
import { useSelector } from 'react-redux'

export default function Search() {
    const state = useSelector(state => state);
    console.log(state.auth)
    return (
        <div>
            Search
        </div>
    )
}