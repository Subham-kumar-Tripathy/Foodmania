import React, { useState, useEffect } from "react";

const UserFunction = () => {
    const [userinfo, setUserinfo] = useState({
        name: "dummy",
        location: "Default",
        avatar_url: "",
    });

    useEffect(() => {
        const fetchUserInfo = async () => {
            const response = await fetch("https://api.github.com/users/Subham-kumar-Tripathy");
            const json = await response.json();
            setUserinfo(json);
            console.log(json);
        };

        fetchUserInfo();
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    const { name, location, avatar_url } = userinfo;

    return (
        <div>
            <img src={avatar_url} alt="User Avatar" />
            <h1>Education: Master of Computer Application</h1>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
        </div>
    );
};

export default UserFunction;

