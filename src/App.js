import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by
        <a href="https://github.com/gisbcode" target="blank">
          Giovanna Bellon
        </a>{" "}
          and is{" "}
          <a
            href="https://github.com/gisbcode/reactweek5-main/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://reactweek5main.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}


export default App;
