import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";

// import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Header />
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
