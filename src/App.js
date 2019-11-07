import React, { useState, useEffect } from "react";
import axios from "axios";
import NASAPhoto from "./components/NASAPhoto";
import "./App.css";

require("dotenv").config()

function App() {
  const [date, setDate] = useState([]);

  const key = process.env.API_KEY;

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    .then(res => {
        setDate(res.data.date)
    })
    .catch(e => {
        console.log(e);
    });
  })

  return (
    <div className="App">
      <h1>NASA Astronomy Photo of the Day</h1>
      <p>{date}</p>
      <NASAPhoto />
    </div>
  );
}

export default App;
