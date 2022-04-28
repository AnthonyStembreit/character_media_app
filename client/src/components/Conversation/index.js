//img if not group chat
//other persons username  || name 
// list of persons if group chat
import React from 'react';
import './conversation.css'
export default function Conversation(props) {
    //this will work for users but not characters
    return (
        <div class="conversation-container" onClick={(e)=>{e.preventDefault(); console.log(e.target.value)}} value={props.id}>
            {props.users.length === 1 ? <>
                <img src={props.users[0].img} />
                <p>@{props.users[0].username}</p>
            </> : <p>{props.users.join(", @")}</p>}
        </div>
    )
}