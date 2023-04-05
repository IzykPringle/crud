import React, { useContext } from 'react';
import { appContext } from '../App';

function Header () {

    const { loggedIn, setLoggedIn } = useContext(appContext)
    let loginButtonText = 'Login';
    let signUpButtonText = 'Sign Up';

if (loggedIn) {
loginButtonText = 'Logout';
signUpButtonText = 'My Profile';
}


    return (
        <>
        Food Viewer
        <button>{loginButtonText}</button>
        <button>{signUpButtonText}</button>
        <input type='search'/>
        <button>Search</button>
        
        
        </>
    )
}

export default Header;