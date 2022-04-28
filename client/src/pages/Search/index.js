import React from 'react';
import { useSelector } from 'react-redux';
import "./search.css";
export default function Search() {
    const state = useSelector(state => state);
    console.log(state.auth)
    return (
        <section id="search">
            <div id="background-img">
                <h1>Search</h1>
                <form id="searchForm">
                    <input type="text" id="search-value" />
                    <select id="search-type">
                        <option>Choose One</option>
                        <option>Character Name</option>
                        <option>Franchize</option>
                        <option>Username</option>
                    </select>
                </form>
                <p>Connect with others! -Search by character name, franchize, or username!</p>
            </div>
            <div id="results">

            </div>
        </section>
    )
}