import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

export default function CharacterForm(props) {
    const state = useSelector(state => state);
    const [editCharacter, setEditCharacter] = useState()
    useEffect(()=>{
        if(props.edit){
            setEditCharacter(state.singleCharacter)
        }
    }, [])
    let { firstName, lastName, age, franchise, description } = editCharacter? editCharacter: ""

    console.log(state.auth)
    return (
        <div>
            <form>
                <label forHtml="characterFirstName">First Name</label>
                <input id="characterFirstName" value={editCharacter? firstName : ""} />
                <label forHtml="characterLastName">Last Name</label>
                <input id="characterLastName" value={editCharacter? lastName : ""} />
                <label forHtml="characterAge">Age</label>
                <input id="characterAge" value={editCharacter? age : ""} />
                <label forHtml="characterFranchise">Franchise</label>
                <input id="characterFranchise" value={editCharacter? franchise : ""} />
                <label forHtml="characterDescription">Description</label>
                <input id="characterDescription" value={editCharacter? description : ""} />
                <button>Submit</button>
                {/* characterImg
               characterRace
               characterClass
               characterVisibleName
               characterLookingFor
               characterEra
               characterXRated */}


            </form>
        </div>
    )
}