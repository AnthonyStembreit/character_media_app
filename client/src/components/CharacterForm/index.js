import {React, useState, useEffect} from 'react';
import { useSelector } from 'react-redux'

export default function CharacterForm() {
    const state = useSelector(state => state);
    const [editCharacter, setEditCharacter] = useState()
    useEffect(() => {
        if(props.character){
            setEditCharacter(props.character)
        }
    }, [])
    console.log(state.auth)
    return (
        <div>
           <form>
               <label forHtml="characterFirstName">First Name</label>
               <input id="characterFirstName" value={editCharacter?editCharacter.firstName:""}/>
               <label forHtml="characterLastName">Last Name</label>
               <input id="characterLastName" value={editCharacter?editCharacter.lastName:""}/>
               <label forHtml="characterAge">Age</label>
               <input id="characterAge" value={editCharacter?editCharacter.age:""}/>
               <label forHtml="characterFranchise">Franchise</label>
               <input id="characterFranchise" value={editCharacter?editCharacter.franchise:""}/>
               <label forHtml="characterDescription">Description</label>
               <input id="characterDescription" value={editCharacter?editCharacter.description:""}/>
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