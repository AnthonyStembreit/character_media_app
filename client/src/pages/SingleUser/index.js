import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import API from '../../utils/API';
import './user.css'

export default function SingleUser() {
    const state = useSelector(state => state);
    let { username } = useParams()
    const [viewUser, setViewUser] = useState()
    const [interactionText, setInteractionText] = useState("Edit")
    const [activeProfileSection, setActiveProfileSection] = useState("Bio")
    const [showMsgForm, setShowMsgForm] = useState(false)
    useEffect(() => {
        const retrieveUser = async (username) => {
            if (state.user.username === username) {
                setViewUser(state.user)
            } else {
                let res = await API.get_one_user(username)
                if (res.status === 200) {
                    setViewUser(res)
                    setInteractionText("Message")
                }
            }
        }
        retrieveUser(username);
        //uncomment to see public profile
        setViewUser({ id: 1, username: "andybvb", img: "https://i.pinimg.com/474x/f1/d9/e1/f1d9e1e814bf8804b9ebd97c42675a0d.jpg", bio: "lead singer of Legacy Black", characters: [] })
        setInteractionText("Message")
        //TODO when message is hit and you are messaging someone for the first time use modal on this page
    }, [])
    const interactBtnHandler= (e)=>{
        e.preventDefault(); 
        showMsgForm?
        setShowMsgForm(false)
        :  setShowMsgForm(true)

    }
    const firstMessageFormHandler = (e)=>{
        e.preventDefault(); 
        let sendersId = state.user.id
        let recipientId = document.getElementById("newPersonId").value
        let message = document.getElementById("firstMsgInput").value.trim()
        console.log(sendersId, recipientId, message)
        //call axios here to create new message
        //alert msg has been 'sent'
        interactBtnHandler(e)
    }
    return (
        <main id="user-profile-containter">
            {viewUser ? <>
                <section id="user-header">
                    <img src={viewUser.img} />
                    <h2>@{viewUser.username}</h2>
                    <button className="profile-btn" onClick={(e) => { interactBtnHandler(e)}}>{interactionText}</button>
                    <div id="background-line"></div>
                </section>
                {interactionText === "Message" ? <div className={!showMsgForm?"hidden": "modal"} id="firstMessageModal">
                    <div className="innerModalContainer">
                        <button className="closeModal" onClick={(e) => { interactBtnHandler(e)}}>X</button>
                        <div id="thisUser">         
                            <img src={viewUser.img} />
                            <h2>@{viewUser.username}</h2>
                            <p>Send @{viewUser.username} a message about one of their characters, one of yours, topics you interested in roleplaying!!</p>
                        </div>
                        <form onSubmit={(e)=>{firstMessageFormHandler(e)}}>
                            <input id="newPersonId" type="hidden" value={viewUser.id} />
                            <textarea id="firstMsgInput" placeholder="message"></textarea>
                            <button>Send</button>
                        </form>
                    </div>
                </div> : ""}
                <div id="profile-nav">
                    <div id="congruent-border"></div>
                    <button className={activeProfileSection === 'Bio' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveProfileSection("Bio") }}>Bio</button>
                    <button className={activeProfileSection === 'Characters' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveProfileSection("Characters") }}>Characters</button>
                </div>
                {activeProfileSection === "Bio" ?
                    <section className="profile-section" id="bio">
                        <h3>Bio</h3>
                        <p>{viewUser.bio}</p>
                    </section>
                    :
                    <section className="profile-section" id="characters">
                        <h3>Characters</h3>
                        {interactionText === "Edit" ? <>
                            <button className="profile-btn">Create +</button>
                            {viewUser.characters.length ? <div>here are your characters!</div> : <p>You have not made any characters yet!</p>}
                        </> : <> {viewUser.characters.length ? <div>here are your characters!</div> : <p>This user has not made any characters yet!</p>}</>
                        }
                    </section>
                }

            </> : <div>Sorry, no user with that username</div>}
        </main>
    )
}