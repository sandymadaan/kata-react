import React from 'react';

const Home = () => {
    return (
        <div className="App">
            <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
                <div className="ml-6 pt-1">
                    <h1 className="text-2xl text-blue-700 leading-tight">
                        Kata - A one stop to manage your team & projects
                    </h1>
                    <br />
                    <p className="text-base text-gray-700 leading-normal">
                        Have much fun using it
                    </p>
                    <br />
                    <a href="/register" class="no-underline hover:underline text-blue-500 text-lg">Register
                    </a><br />


                    <a href="/login" class="no-underline hover:underline text-blue-500 text-lg">Login
                    </a>
                </div>
            </div>

        </div >
    );

}

export default Home;