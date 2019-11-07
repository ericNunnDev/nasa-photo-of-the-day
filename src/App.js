import React, { useState, useEffect } from "react";
import axios from "axios";
import NASAPhoto from "./components/NASAPhoto";
import "./App.css";

function App() {
  const [date, setDate] = useState('');

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=LaMzze60RNo3tcPnmY6x9J3j1owDp78ss6J2U3ts`)
    .then(res => {
        setDate(res.data.date)
    })
    .catch(e => {
        console.log(e);
    });
  }, []);

  return (
    <div className="App">
      <h1>NASA Astronomy Photo of the Day</h1>
      <p>{date}</p>
      <NASAPhoto />
    </div>
  );
}

export default App;
