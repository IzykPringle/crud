import React, { useContext } from 'react';
import { appContext } from '../App';

function SignUp() {
    return (
        <>

            first name <input type='text' />
            last name <input type='text' />
            user name <input type='text' />
            password <input type='password' />
            <button>Submit</button>



        </>
    )
}

export default SignUp;