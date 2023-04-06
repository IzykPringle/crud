import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../App';

function ItemDetails() {
    const { user, items, loggedIn, detailItem } = useContext(appContext);
    let editButton = '';
    let deleteButton = '';

    if (loggedIn) {
        if (detailItem.userid == user[0].id) {
            editButton = <button>Edit</button>
            deleteButton = <button>Delete</button>
        }
    }
    return (
        <>
            <div id='detailitemwrapper'>
                <div> {detailItem.itemname} </div> <br></br>
                <div> {detailItem.description.length > 100 ? detailItem.description.substring(0, 100) + '...' : detailItem.description} </div> <br></br>
                <div> In Stock: {detailItem.quantity} </div> <br></br>
                <div>Inventory Manager ID: {detailItem.userid}</div> <br></br>
                {editButton}
                {deleteButton}
            </div>
        </>
    )
}

export default ItemDetails;