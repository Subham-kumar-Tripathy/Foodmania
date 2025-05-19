import React, { useState ,useEffect} from 'react'

const useActivestatus = () => {
    const[onlinestatus,setonlinestatus]=useState(true)
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestatus(false);
        });

        window.addEventListener("online",()=>{
            setonlinestatus(true);
        });
    },[])

    return onlinestatus;
}

export default useActivestatus
