import React, { useState, useEffect } from "react";
import NASAInfo from "./NASAInfo";
import axios from "axios";

const NASAPhoto = () => {
const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
            setPhoto(res.data.hdurl)
        })
        .catch(e => {
            console.log("NASAPhoto error", e);
        });
    }, []);

    return (
        <div>
           <img className="APOD" src={photo} alt="NASA" />
           <NASAInfo />
        </div>
    )
}

export default NASAPhoto;