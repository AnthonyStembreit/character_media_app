import React from 'react';
import { useSelector } from 'react-redux';
import "./search.css";
export default function Search() {
    const state = useSelector(state => state);
    console.log(state.auth)
    const handleSearch = async (e) => {
        e.preventDefault();
        let searchInput = document.getElementById("search-value").value 
        let searchType = document.getElementById("search-type").value
        console.log(searchInput, searchType)
        //TODO call axios here to get results from db 
        //and then present them on the page
        document.getElementById("search-value").value = ""
        document.getElementById("search-type").value = "Choose One"
    }
    return (
        <section id="search">
            <div id="background-img">
                <h1>Search</h1>
                <form onSubmit={(e) => handleSearch(e)} id="searchForm">
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