import React from 'react';
import { useSelector } from 'react-redux'

export default function EditPage() {
    const state = useSelector(state => state);
    console.log(state.auth)
    return (
        <div>
            Edit Page
        </div>
    )
}