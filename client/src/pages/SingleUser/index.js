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
        // setViewUser({ id: 1, username: "andybvb", img: "https://i.pinimg.com/474x/f1/d9/e1/f1d9e1e814bf8804b9ebd97c42675a0d.jpg", bio: "lead singer of Legacy Black", characters: [] })
        // setInteractionText("Message")
    }, [])
    return (
        <main id="user-profile-containter">
            {viewUser ? <>
                <section id="user-header">
                    <img src={viewUser.img} />
                    <h2>@{viewUser.username}</h2>
                    <button className="profile-btn" value={viewUser.id} onClick={(e) => { e.preventDefault(); console.log(e.target.value, state.user.id) }}>{interactionText}</button>
                    <div id="background-line"></div>
                </section>
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