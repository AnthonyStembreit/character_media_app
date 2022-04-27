import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function SingleUser() {
    const state = useSelector(state => state);
    let { username } = useParams()
    const [viewUser, setViewUser] = useState()
    useEffect(() => {
        if (state.user.username === username) {
            setViewUser(state.user)
        } else {
            console.log("use axios to query db for user here")
        }
    }, [])
    return (
        <div>
            <h1>
                Single User Page
            </h1>
            {viewUser? <div>{viewUser.username}</div>: <div>Sorry, no user with that username</div>}
        </div>
    )
}