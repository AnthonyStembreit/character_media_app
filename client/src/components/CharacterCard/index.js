import { React, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CharacterCard(props) {
    const { id, firstName, lastName, age, franchise, description, myPage } = props
    async function handleDeleteCharacter(e){
        e.preventDefault();
        if(confirm(`Are you sure you want to delete ${firstName + " " + lastName}?`)){
            //axios call here
            console.log("confirmed")
            console.log(e.target.value)
        }
    }
    return (
        <div>
            <h3>{firstName + " " + lastName}</h3>
            <p>{age}</p>
            <p>{franchise}</p>
            <p>{description}</p>
            {myPage ? <footer>
                <button defaultValue={id} onClick={(e) => handleDeleteCharacter(e)}>Delete</button>
                <button><Link to={`/character/edit/${id}`}>Edit</Link></button>
            </footer>: ""}
        </div>
    )
}