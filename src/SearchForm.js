import React from 'react';

const SearchForm = props =>
    (
        <form onSubmit={props.onFormSubmit}>
            <input type="text" placeholder="Search Joke.." className="border py-2 px-3 text-grey-darkest" onChange={props.onSearchChange} value={props.value} />
            <button className="bg-gray-600 hover:bg-gray-800 text-white uppercase text-lg mx-auto p-2 rounded">Search</button>

            <button onClick={props.fetchOneJoke} disabled={props.isSearching} className="block border hover:bg-red-400 p-2 my-10">I am feeling lucky!</button>
        </form>

    );

export default SearchForm;