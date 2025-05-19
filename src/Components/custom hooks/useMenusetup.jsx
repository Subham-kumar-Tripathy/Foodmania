import React from 'react'
import { useState,useEffect } from 'react';

const useMenusetup = (resid) => {
    const [menu,setmenu]=useState(null);
    useEffect(()=>{
        if (resid) {
            fetchmenu();
        }
    },[resid]);

    async function fetchmenu() {
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resid+"&submitAction=ENTER");
        const json=await data.json();
        console.log("subha"+json)
        setmenu(json.data)
    };
    return menu;
}

export default useMenusetup;
