import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../App';

function Profile() {
    const { items, user } = useContext(appContext);
    const [description, setDescription] = useState();
    const [itemname, setItemName] = useState();
    const [quantity, setQuantity] = useState();
    let userItems = items.filter(item => item.userid == user[0].id)


    function addItem() {
        let newItem = { userid: user[0].id, itemname: itemname, description: description, quantity: quantity };
        fetch('http//localhost:8080/additem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        })
            .then(alert(`New item added!`))
    }


    return (
        <>

            First Name: {user[0].firstname}
            Last Name: {user[0].lastname}
            Username: {user[0].username}
            <button>Edit</button>
            <button>Change Password</button>
            <button>Delete Account</button>
            My Items:
            {userItems.map((item) => {
                <div key={item.id}>
                    {item.itemname}
                    <button>Delete</button>
                </div>
            })}

            Add New Item:

            Item Name <input type='text' onChange={(e) => setItemName(e.target.value)} />
            Description <input type='text' onChange={(e) => setDescription(e.target.value)} />
            Quantity <input type='number' onChange={(e) => setQuantity(e.target.value)} />

            <button onClick={() => addItem()}>Add Item</button>


        </>
    )
}

export default Profile;