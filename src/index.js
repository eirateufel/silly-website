import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {vh, vw} from "./lib/VminVmax";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const element = document.elementFromPoint(event.pageX - window.scrollX, event.pageY - window.scrollY);
  if (element && element.classList !== null && element.classList[0] === "grid-item") {
    element.style.backgroundColor = "rgb(38, 40, 49)";
  }
});

if (vh() > vw() * 1) {
  document.getElementById("header").style.height = "33vh";
  document.getElementById("kittens").style.width = "25vmin";
  document.getElementById("volken").style.height = "20vmin";
}

reportWebVitals();
