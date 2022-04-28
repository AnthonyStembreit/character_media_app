import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./message_board.css";
import Conversation from "../../components/Conversation";
import Message from "../../components/Message";

export default function MessageBoard() {
    const state = useSelector(state => state);
    console.log(state.auth)
    let conversations = [
        {
            users: [{ id: 1, img: "https://i.pinimg.com/474x/f1/d9/e1/f1d9e1e814bf8804b9ebd97c42675a0d.jpg", username: "andybvb" }],
            id: 1,
            messages: [{ id: 1, user: { id: 1 }, message: "Hey", createdAt: "8:00AM" }, { id: 2, user: { id: 1 }, message: "Did you want to get dinner tonight?", createdAt: "8:02AM" }, { id: 3, user: { id: 2 }, message: "sure, why not?", createdAt: "8:05AM" }]
        }
    ]
    //might want to make this a global state in redux
    const [activeConversation, setActiveConversation] = useState({
        users: [{ id: 1, img: "https://i.pinimg.com/474x/f1/d9/e1/f1d9e1e814bf8804b9ebd97c42675a0d.jpg", username: "andybvb" }],
        id: 1,
        messages: [{ id: 1, user: { id: 1 }, message: "Hey", createdAt: "8:00AM" }, { id: 2, user: { id: 1 }, message: "Did you want to get dinner tonight?", createdAt: "8:02AM" }, { id: 3, user: { id: 2 }, message: "sure, why not?", createdAt: "8:05AM" }]
    })
    const handleMessage = async (e) => {
        e.preventDefault();
        let message = e.target.previousSibling.value
        console.log(message)
        document.getElementById("usersMsg").value = ""
        //console.log(state.user.id)
        //TODO find a way to figure out reciever's user id
        //then call axios here
    }
    useEffect(() => {
        //call axios here to retrieve users conversations
    }, [])
    return (
        <section id="message-board">
            <aside id="conversations">
                <div>
                    <p>You are current looking at ... Message Board</p>
                    <p>You can switch Message Boards here:</p>
                    <select>
                        {/* map <option>{name}</option> --username, then their character names here */}
                    </select>
                </div>
                {/* future dev set up a way to search messages here */}
                {/*map Conversation components here -10 at first then 'load all' button)*/}
                {conversations.map(conversation => {
                    return <Conversation users={conversation.users}
                        id={conversation.id} />
                })}
            </aside>
            <main>
                <div id="current-messages">
                    {/*active chat img & username*/}
                    {/*map Message components here */}
                    {activeConversation.messages.map(message =>{
                        return <Message user={message.user} message={message.message} createdAt={message.createdAt}/>
                    })}
                </div>
                <form id="message-form" onSubmit={(e) => handleMessage(e)}>
                    <textarea placeholder="message" id="usersMsg"></textarea>
                    <button onClick={(e) => handleMessage(e)}>Send</button>
                </form>
            </main>
        </section>
    )
}