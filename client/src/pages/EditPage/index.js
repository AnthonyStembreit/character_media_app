import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import CharacterForm from '../../components/CharacterForm'
export default function EditPage(props) {
    const state = useSelector(state => state);
    console.log(state.auth)

    const {username, email, img, bio} = state.user
    return (
        <div>
            <h1>{props.editType}</h1>
            {props.editType === "User" ? <form>
                <label htmlFor="edit-email">Email</label>
                <input id="edit-email" value={email}/>
                <label htmlFor="edit-bio">Bio</label>
                <textarea id="edit-bio" value={bio}></textarea>
                <label htmlFor="edit-img">Image</label>
                <input type="file" id="edit-img" value={img}/>
                <button>Submit</button>
            </form> 
            : <CharacterForm edit={true}/>}
        </div>
    )
}