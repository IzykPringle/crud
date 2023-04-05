import React, { useContext } from "react";
import { appContext } from '../App';

function Home() {
    const { loggedIn, items } = useContext(appContext);



    return (
        <>


            {items !== undefined ? items.map((item) => <div key={item.id}>{item.itemname}</div>) : ''}



        </>
    )
}

export default Home;