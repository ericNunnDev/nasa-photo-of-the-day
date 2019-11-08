import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
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
      <AppWrapper className="App">
      <Title>NASA Astronomy Photo of the Day</Title>
      <Date>{date}</Date>
      <NASAPhoto />
      </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #333;
  color: #FFF;
  height: 100vh;
`
const Title = styled.h1`
  font-family: 'Big Shoulders Display', cursive;
  padding-top: 10px;
`
const Date = styled.p`
  font-weight: bold;
`
export default App;
