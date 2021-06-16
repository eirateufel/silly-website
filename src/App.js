import rezin from "./rezin-not-clear.png";
import rezinChosen from "./rezin-not-clear-chosen.png";

import kittens from './kittens.png';
import flower from "./flower1.png";
import volken from './volken.png';
import angel from './angel.png';
import './App.css';
import React from 'react';
import {vmin, vmax, vw, vh} from "./lib/VminVmax";

function GridItem(props) {
  return <div 
      className="grid-item"
      onClick={props.onClick}
      id={props.id}
    ></div>
}

function changeColor(e) {
  const isErazor = document.getElementById("rezin").classList.contains("erazor_chosen")
  if (isErazor) e.target.style.backgroundColor = "rgb(38, 40, 49)";
  else {
    const index228 = Math.floor(Math.random() * 3);
    let index151 = Math.floor(Math.random() * 2) + index228 + 1;
    index151 = index151 >= 3 ? index151 - 3 : index151;
    const indexLast = [0, 1, 2].filter(index => ![index228, index151].includes(index))[0]
    const rgbValues = {
      [index151] : 151,
      [index228] : 228,
      [indexLast] : Math.floor(Math.random()*(228 - 151)) + 151
    }
    e.target.style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
  }
}

function changeAnimation (target) {
  if (target.style.animationPlayState !== "paused") {
    console.log("running => paused")
    target.style.animationPlayState = "paused"
  }
  else {
    console.log("paused => running")
    target.style.animationPlayState = "running"
  }
}

function chooseErazor(e) {
  const classList = e.target.classList;
  console.log(classList.contains("rezin"))
  if (classList.contains("rezin")) {
    console.log("Erazor");
    if (!classList.contains("erazor_chosen")) {
      e.target.src = rezinChosen;
      e.target.classList.add("erazor_chosen");
    }
    else {
      e.target.src = rezin;
      e.target.classList.remove("erazor_chosen")
    }
    console.log(e.target.src)
  }
}

function changeKittensAnimation (e) {
  /*const kittens = document.getElementById("kittens");
  console.log("kittens", kittens.getBoundingClientRect())*/

  const heightCoefficient1 = vw() < 450 ? 0.3 : 0.5

  const isKittens = (
    (e.pageX > 0.5 * vmax() - 0.28 * vmin() 
    && e.pageX < 0.5 * vmax() + 0.28 * vmin()) 
    && (e.pageY < heightCoefficient1 * vh() - 0.10 * vmin() 
    && e.pageY > heightCoefficient1 * vh() - 0.45 * vmin()))

  if (isKittens) changeAnimation (document.getElementById("kittens"))

  /*const element = document.elementFromPoint(e.pageX, e.pageY);
  console.log("Element", element)
  const angel = document.getElementById("angel");
  console.log("Angel", angel.getBoundingClientRect())*/
}

function changeAngelAnimation (e) {
  if (e.target.classList[0] === "angel") changeAnimation (e.target)
}


function App() {
  let items = [];
  for (let i = 1; i < 5000; i++) items.push(<GridItem id={i} key={i} onClick = {(e) => changeColor(e)} />)

  return (
    <div className="App">
      <header className="App-header" id="header" onClick = {(e) => changeKittensAnimation(e)}>
        <img src={kittens} className="kittens" alt="kittens" id="kittens"/>
        <img src={volken} className="volken" alt="clouds" id="volken"/>
        <img src={angel} className="angel" alt="angel" id="angel" onClick = {(e) => changeAngelAnimation(e)}/>
        <img src={rezin} className="rezin rezin_unchozen" alt="eraze" id="rezin" onClick = {(e) => chooseErazor(e)}/>
        <img src={flower} className="flower" id="flower"/>
      </header>
      <div className="grid-container" id="grid-container">
        {items}
      </div>
    </div>
  );
}

export default App;
