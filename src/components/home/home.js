import React from 'react';
import './home.css'

const Home = ( {setLogInUser, user} ) => {
    return (
        <div className="home">
            <h1>Welcome, {user}</h1>
            <div className="button" onClick={() => setLogInUser({})}>Logout</div>
        </div>
    )
}

export default Home;