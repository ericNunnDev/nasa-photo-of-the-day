import React, { useState, useEffect } from "react";
import { Card, CardImg } from "reactstrap";
import NASAInfo from "./NASAInfo";
import axios from "axios";

const NASAPhoto = () => {
const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=LaMzze60RNo3tcPnmY6x9J3j1owDp78ss6J2U3ts`)
        .then(res => {
            console.log(res.data)
            setPhoto(res.data.hdurl)
        })
        .catch(e => {
            console.log("NASAPhoto error", e);
        });
    }, []);

    return (
        <div>
            <Card className="p-2">
                <CardImg max height="600" src={photo} alt="NASA" />
            </Card>
           <NASAInfo />
        </div>
    )
}

export default NASAPhoto;