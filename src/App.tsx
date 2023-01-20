import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { AppUrls } from "./ Types/Apptypes";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageStructure } from "./Components/PageStructure/PageStructure";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={AppUrls.HOME} />} />
        <Route path="/:page" element={<PageStructure />} />
      </Routes>
    </div>
  );
};

export default App;
