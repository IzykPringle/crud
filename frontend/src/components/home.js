import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { appContext } from '../App';

function Home() {
    let navigate = useNavigate();
    const { loggedIn, items, setDetailItem } = useContext(appContext);



    return (
        <>
            <div id="itemcontainer">

                {items.length > 0 ? items.map((item) =>
                    <div id="itembox" key={item.id} onClick={() => [setDetailItem(item), navigate('/itemdetails')]}>
                        <h4> {item.itemname} </h4> <br></br>
                        <div> {item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description} </div> <br></br>
                        <div> In Stock: {item.quantity} </div>
                    </div>)
                    : ''}

            </div>

        </>
    )
}

export default Home;