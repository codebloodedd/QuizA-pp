import axios from "axios";
import { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {

  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element= {<Home
          // name = {name}
          // setName = {setName}
          // getApiData = {getApiData}
        />} exact/>
        <Route path="/result" element= {<Result/>} exact/>
        <Route path="/quiz" element= {<Quiz/>} exact/>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
