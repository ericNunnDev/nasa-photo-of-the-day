import React, { useState, useEffect } from "react";
import axios from "axios";

const NASAInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
            setInfo(res.data.explanation)
        })
        .catch(e => {
            console.log("NASAInfo Error", e);
        });
    }, []);

    return (
        <div>
            <p>{info}</p>
        </div>
    )
}

export default NASAInfo;