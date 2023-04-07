import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../App';

function Profile() {
    let navigate = useNavigate();
    const { items, setItems, user, detailItem, setDetailItem } = useContext(appContext);
    const [description, setDescription] = useState();
    const [itemname, setItemName] = useState();
    const [quantity, setQuantity] = useState();



    let userItems = items.filter(item => item.userid == user[0].id);
    let addeditem = {};


    async function addItem() {
        let newItem = { userid: user[0].id, itemname: itemname, description: description, quantity: quantity };
        addeditem = await fetch('http://localhost:8080/additem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        })
            .then(alert(`New item added!`))
            .then(res => res.json())
            .then(data => {
                newItem.id = data[0].id;
                return newItem;
            })
            setItems((items) => [...items, addeditem])
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
                <div id='myitems'> <h3>My Items:</h3>
                    <div id="itemcontainer">
                        {userItems.length !== 0 ? userItems.map((item) =>
                            <div id="itembox" key={item.id} onClick={() => [setDetailItem(item), navigate('/itemdetails')]}>
                                <div> {item.itemname} </div> <br></br>
                                <div> {item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description} </div> <br></br>
                                <div> In Stock: {item.quantity} </div>
                            </div>) : userItems.map((item) =>
                                <div id="itembox" key={item.id} onClick={() => [setDetailItem(item), navigate('/itemdetails')]}>
                                    <div> {item.itemname} </div> <br></br>
                                    <div> {item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description} </div> <br></br>
                                    <div> In Stock: {item.quantity} </div>
                                </div>)}
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