import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";

export const App = () => {
  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`,
        {}
      )
      .then((res) => {
        console.log(res);
      });
  });
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
