import React from 'react';
import { useSelector } from 'react-redux';
import "./message_board.css";

export default function MessageBoard() {
    const state = useSelector(state => state);
    console.log(state.auth)
    const handleMessage = async (e) => {
        e.preventDefault();
        let message = e.target.previousSibling.value
        console.log(message)
        document.getElementById("usersMsg").value = ""
        //console.log(state.user.id)
        //TODO find a way to figure out reciever's user id
        //then call axios here
    }
    return (
        <section id="message-board">
            <aside id="conversations">
                {/* future dev set up a way to search messages here */}

            </aside>
            <main>
                <div id="current-messages">

                </div>
                <form id="message-form" onSubmit={(e) => handleMessage(e)}>
                    <textarea placeholder="message" id="usersMsg"></textarea>
                    <button onClick={(e) => handleMessage(e)}>Send</button>
                </form>
            </main>
        </section>
    )
}