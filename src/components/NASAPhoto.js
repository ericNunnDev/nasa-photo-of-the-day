import React, { useState, useEffect } from "react";
import axios from "axios";

const NASAPhoto = () => {
const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
            console.log(res.data)
            setPhoto(res.data.explanation)
        })
        .catch(e => {
            console.log("You done messed up man", e);
        });
    }, []);

    return (
        <div>
           <span>{photo}</span> 
        </div>
    )
}

export default NASAPhoto;