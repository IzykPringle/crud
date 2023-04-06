import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../App';

function ItemDetails() {
    let navigate = useNavigate();
    const { user, setItems, loggedIn, detailItem, setDetailItem } = useContext(appContext);
    const [editing, setEditiing] = useState(false);
    let editButton = '';
    let deleteButton = '';
    let name = <> <h3> {detailItem.itemname} </h3> <br></br> </>;
    let description = <> <div> {detailItem.description.length > 100 ? detailItem.description.substring(0, 100) + '...' : detailItem.description} </div> <br></br> </>;
    let stock = <> <div> In Stock: {detailItem.quantity} </div> <br></br> </>;
    let itemid = <> <div>Product ID: {detailItem.id}</div> <br></br> </>;
    let id = <> <div>Inventory Manager ID: {detailItem.userid}</div> <br></br> </>;

    if (loggedIn) {
        if (detailItem.userid == user[0].id) {
            editButton = <button onClick={() => setEditiing(true)}>Edit</button>
            deleteButton = <button onClick={() => deleteItem()}>Delete</button>
        }
    }

    if (editing) {
        name = <> <h3> Name: <input type='text' placeholder={detailItem.itemname} /> </h3> <br></br> </>;
        description = <> <div> Description: <input type='text' placeholder={detailItem.description} /> </div> <br></br> </>;
        stock = <> <div> Quantity: <input type='text' placeholder={detailItem.quantity} /> </div> <br></br> </>;
        id = '';
        itemid = '';

        editButton = <button onClick={() => setEditiing(false)}>Save</button>;
        deleteButton = '';
    }

    function deleteItem() {

        fetch('http//localhost:8080/itemdetails', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(detailItem)
        })
            .then(alert(`Item deleted!`))
            .then(navigate('/myprofile'))
    }


    return (
        <>
            <div id='detailitemwrapper'>
                {name}
                {description}
                {stock}
                {itemid}
                {id}
                {editButton}
                {deleteButton}
            </div>
        </>
    )
}

export default ItemDetails;