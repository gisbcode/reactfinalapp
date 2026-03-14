import React from "react";
import './App.css';
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/gisbcode" target="blank">
            Giovanna Bellon
          </a>{" "}
          and is open sourced on{" "}
          <a href="https://github.com/gisbcode/reactfinalapp" target="blank">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://reactfinalappgio.netlify.app/" target="blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
