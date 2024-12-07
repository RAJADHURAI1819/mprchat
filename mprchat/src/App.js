import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mprchat from "./mprchat/mprchat";
import Header from "./mprchat/Header";

function App() {
  return (
    <>
      <Header />
      <div className="Main-style">
        <Mprchat />
      </div>
    </>
  );
}

export default App;
