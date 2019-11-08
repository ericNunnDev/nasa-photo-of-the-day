import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const NASAInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=LaMzze60RNo3tcPnmY6x9J3j1owDp78ss6J2U3ts`)
        .then(res => {
            setInfo(res.data.explanation)
        })
        .catch(e => {
            console.log(e);
        });
    }, []);

    return (
        <div>
           <Info className="px-4">{info}</Info>
        </div>
    )
}

const Info = styled.p`
font-family: 'Roboto', sans-serif;
`

export default NASAInfo;