import React, { useContext, useState } from 'react';
import { appContext } from '../App';

function SignUp() {
    const [fname, setFName] = useState([]);
    const [lname, setLName] = useState([]);
    const [uname, setUName] = useState([]);
    const [pass, setPass] = useState([]);

    function signupUser() {
        let newUser = { firstname: fname, lastname: lname, username: uname, password: pass };
        fetch('http://localhost:8080/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(alert(`New User Created! Welcome ${fname}!`))
    }
    return (
        <>
            <div id='signupwrapper'>
                first name <input type='text' onChange={(e) => setFName(e.target.value)} />
                last name <input type='text' onChange={(e) => setLName(e.target.value)} />
                user name <input type='text' onChange={(e) => setUName(e.target.value)} />
                password <input type='password' onChange={(e) => setPass(e.target.value)} />
                <button onClick={() => signupUser()}>Submit</button>
            </div>
        </>
    )
}

export default SignUp;