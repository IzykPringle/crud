import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../App';

function Profile() {
    const {items, user } = useContext(appContext);
    let userItems = items.filter(item => item.userid == user[0].id)
    return (
        <>

            First Name:
            Last Name:
            Username:
            Password:
            <button>Edit</button>
            <button>Delete Account</button>
            My Items:
            {console.log(items)}
            {console.log(userItems)}
            {console.log(user[0].id)}
            {userItems.map((item) => <div key={item.id}>{item.itemname}</div>)}

            Add New Item:

            <button>Add Item</button>


        </>
    )
}

export default Profile;