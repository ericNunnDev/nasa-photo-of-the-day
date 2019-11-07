import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import axios from "axios";
import NASAPhoto from "./components/NASAPhoto";
import "./App.css";

function App() {
  const [date, setDate] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => {
        console.log(res.data)
        setDate(res.data.date)
    })
    .catch(e => {
        console.log("You done messed up man", e);
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
