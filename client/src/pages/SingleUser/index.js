import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import API from '../../utils/API';

export default function SingleUser() {
    const state = useSelector(state => state);
    let { username } = useParams()
    const [viewUser, setViewUser] = useState()
    useEffect(() => {
        const retrieveUser = async (username) => {
            if (state.user.username === username) {
                setViewUser(state.user)
            } else {
                let res = await API.get_one_user(username)
                if (res.status === 200) {
                    setViewUser(res)
                }
            }
        }
        retrieveUser(username);
    }, [])
    return (
        <div>
            <h1>
                Single User Page
            </h1>
            {viewUser ? <div>{viewUser.username}</div> : <div>Sorry, no user with that username</div>}
        </div>
    )
}