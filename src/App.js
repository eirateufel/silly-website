import kittens from './kittens.png';
import volken from './volken.png';
import angel from './angel.png'
import './App.css';
import React from 'react';

function GridItem(props) {
  return <div 
      className="grid-item"
      onClick={changeColor}
    ></div>
}

function changeColor(e) {
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

function changeKittensAnimation (e) {
  const isKittens = ((e.pageX > 0.5 * vmax() - 0.28 * vmin() && e.pageX < 0.5 * vmax() + 0.28 * vmin()) && (e.pageY < 0.5 * document.documentElement.clientHeight - 0.10 * vmin() && e.pageY > 0.5 * document.documentElement.clientHeight - 0.45 * vmin()))
  console.log("Kittens", isKittens)
  console.log("Y", e.pageY)
  console.log("result", 0.5 * document.documentElement.clientHeight - 0.45 * vmin())
  console.log("0.25 vmin",0.25 * vmin())
  console.log("header height", 0.5 * document.documentElement.clientHeight)

  if (isKittens) changeAnimation (document.getElementById("kittens"))
}

function changeAngelAnimation (e) {
  if (e.target.classList[0] === "angel") changeAnimation (e.target)
}


function App() {
  let items = [];
  for (let i = 1; i < 5100; i++) items.push(<GridItem num={i} key={i} onClick = {(e) => changeColor(e)} />)

  return (
    <div className="App">
      <header className="App-header" id="header" onClick = {(e) => changeKittensAnimation(e)}>
        <img src={kittens} className="kittens" alt="logo" id="kittens"/>
        <img src={volken} className="volken" alt="clouds" />
        <img src={angel} className="angel" alt="angel" onClick = {(e) => changeAngelAnimation(e)}/>
      </header>
      <div className="grid-container">
        {items}
      </div>
    </div>
  );
}

export default App;


function vh() {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return h;
}

function vw() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return w;
}

function vmin() {
  return Math.min(vh(), vw());
}

function vmax() {
  return Math.max(vh(), vw());
}