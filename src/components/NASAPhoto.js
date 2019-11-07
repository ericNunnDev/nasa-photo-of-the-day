import React, { useState, useEffect } from "react";
import Explanation from "./Explanation";
import axios from "axios";
import styled from "styled-components";

const NASAPhoto = () => {
const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
            console.log(res.data)
            setPhoto(res.data.hdurl)
        })
        .catch(e => {
            console.log("You done messed up man", e);
        });
    }, []);

    return (
        <div>
           <img src={photo} alt="NASA" />
           <Explanation />
        </div>
    )
}

export default NASAPhoto;