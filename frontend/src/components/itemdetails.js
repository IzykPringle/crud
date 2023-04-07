import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../App';

function ItemDetails() {
    let navigate = useNavigate();
    const { user, items, setItems, loggedIn, detailItem, setDetailItem } = useContext(appContext);
    const [editing, setEditiing] = useState(false);
    const [description, setDescription] = useState();
    const [itemname, setItemName] = useState();
    const [quantity, setQuantity] = useState();
    let editButton = '';
    let deleteButton = '';
    let name = <> <h3> {detailItem.itemname} </h3> <br></br> </>;
    let descriptiondiv = <> <div id='bodytext'> {detailItem.description} </div> <br></br> </>;
    let stock = <> <div> In Stock: {detailItem.quantity} </div> <br></br> </>;
    let itemid = <> <div>Product ID: {detailItem.id}</div> <br></br> </>;
    let id = <> <div>Inventory Manager ID: {detailItem.userid}</div> <br></br> </>;

    if (loggedIn) {
        if (detailItem.userid === user[0].id) {
            editButton = <button onClick={() => setEditiing(true)}>Edit</button>
            deleteButton = <button onClick={() => deleteItem()}>Delete</button>
        }
    }

    if (editing) {
        name = <> <h3> Name: <input type='text' placeholder={detailItem.itemname} onChange={(e) => setItemName(e.target.value)} /> </h3> <br></br> </>;
        descriptiondiv = <> <div id='bodytext'> Description: <input type='text' placeholder={detailItem.description} onChange={(e) => setDescription(e.target.value)} /> </div> <br></br> </>;
        stock = <> <div> Quantity: <input type='number' placeholder={detailItem.quantity} onChange={(e) => setQuantity(e.target.value)} /> </div> <br></br> </>;
        id = '';
        itemid = '';

        editButton = <button onClick={() => updateItem()}>Save</button>;
        deleteButton = '';
    }

    function deleteItem() {

        let newitemlist = items.filter(item => item.id !== detailItem.id);
        setItems(newitemlist);
        setDetailItem([]);

        fetch('http://localhost:8080/itemdetails', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(detailItem)
        })
            .then(alert(`Item deleted!`))
            .then(navigate('/myprofile'))
    }

   async function updateItem() {
    if (itemname.length == undefined || description.length == undefined || quantity.length == undefined) {
        alert('please fill in all values')
        return
    }
    let newitemlist = items.filter(item => item.id !== detailItem.id);
    let updatedItem = { id: detailItem.id, userid: detailItem.userid, itemname: itemname, description: description, quantity: quantity };
    setItems(newitemlist);
    setItems((items) => [...items, updatedItem])

        await setDetailItem(updatedItem)
        console.log('detail item: ', detailItem)

      await fetch('http://localhost:8080/itemdetails', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedItem)
        })
        // .then(alert(`Item updated!`))
        // .then(navigate('/itemdetails'))
        setEditiing(false);
    }


    return (
        <>
            <div id='detailitemwrapper'>
                {name}
                {descriptiondiv}
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