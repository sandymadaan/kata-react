
import React, { useState } from 'react';

import SeachForm from './SearchForm';
import nivedan from './util/nivedanConfig';

const Joke = () => {

    const [
        isFetchingJoke, setIsFetchingJoke
    ] = useState(false);

    const [
        jokes, setJokes
    ] = useState([]);

    const [
        searchElement, setSearchElement
    ] = useState('');

    const searchJokes = (limit = 20) => {
        setIsFetchingJoke(true);
        nivedan.get(`/search?term=${searchElement}&limit=${limit}`)
            .then(json => {
                const jokes = json.results;
                setJokes(jokes);
                setIsFetchingJoke(false);
                console.log(json);
            });
    }

    const onChangeSearch = ({ target: { value } }) => {
        setSearchElement(value);
    }

    const onSubmitSearch = (event) => {
        event.preventDefault();
        searchJokes();
    }

    const renderJoke = () => {
        return (
            <ul>{jokes.map(item => <li key={item.id}>{item.joke}</li>)}</ul>
        );
    }

    return (
        <div>
            <SeachForm
                onFormSubmit={onSubmitSearch}
                onSearchChange={onChangeSearch}
                isSearching={isFetchingJoke}
                fetchOneJoke={() => searchJokes(1)}
                value={searchElement}
            />
            <h1 className="text-lg text-red-500 py-10"> Jokes </h1>

            {isFetchingJoke ? 'Loading Joke...' : renderJoke()}

        </div>
    );
}

export default Joke;