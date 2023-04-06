import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../App';

function Profile() {
    let navigate = useNavigate();
    const { items, user, setDetailItem } = useContext(appContext);
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
            <div id='profilepagewrapper'>
                <div id='profilewrapper'>
                    <div>  First Name: {user[0].firstname} </div>
                    <div> Last Name: {user[0].lastname} </div>
                    <div>   Username: {user[0].username} </div>
                    <div>User ID: {user[0].id}</div>
                    <button>Edit Profile</button>
                    <button>Change Password</button>
                    <button>Delete Account</button>
                </div>
                <div id='myitems'> My Items:
                    <div id="itemcontainer">
                        {userItems.length !== 0 ? userItems.map((item) => <div id="itembox" key={item.id} onClick={() => [setDetailItem(item), navigate('/itemdetails')]}>
                            <div> {item.itemname} </div> <br></br>
                            <div> {item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description} </div> <br></br>
                            <div> In Stock: {item.quantity} </div>
                        </div>) : 'You do not have any items'}
                    </div>
                </div>
                <div id='newitemwrapper'>
                    <div>  Add New Item: </div>
                    <div>  Item Name <input type='text' onChange={(e) => setItemName(e.target.value)} /> </div>
                    <div>  Description <input type='text' onChange={(e) => setDescription(e.target.value)} /> </div>
                    <div>   Quantity <input type='number' onChange={(e) => setQuantity(e.target.value)} /> </div>
                    <div>  <button onClick={() => addItem()}>Add Item</button> </div>
                </div>
            </div>
        </>
    )
}

export default Profile;