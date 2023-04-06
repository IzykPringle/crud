import React, { useContext } from "react";
import { appContext } from '../App';

function Home() {
    const { loggedIn, items } = useContext(appContext);



    return (
        <>
            <div id="itemcontainer">

                {items !== undefined ? items.map((item) => <div id="itembox" key={item.id}>
                    <div> {item.itemname} </div> <br></br>
                    <div> {item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description} </div> <br></br>
                    <div> In Stock: {item.quantity} </div>
                </div>) : ''}

            </div>

        </>
    )
}

export default Home;