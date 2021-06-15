import logo from './kittens.png';
import volken from './volken.png';
import angel from './angel.png'
import './App.css';

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  console.log("Right click");
  //const element = document.elementFromPoint(event.pageX, event.pageY);
  console.log(event.pageX, event.pageY)
});

function GridItem(props) {
  return <div 
      className="grid-item"
      onClick={changeColor}
    ></div>
}

function changeColor(e) {
  console.log("CHANGE COLOR onMouseMove ", e);
  const index228 = Math.floor(Math.random() * 3);
  let index151 = Math.floor(Math.random() * 2) + index228 + 1;
  console.log(index151)
  index151 = index151 >= 3 ? index151 - 3 : index151;
  const indexLast = [0, 1, 2].filter(index => ![index228, index151].includes(index))[0]
  console.log(index151, index228, indexLast)
  const rgbValues = {
    [index151] : 151,
    [index228] : 228,
    [indexLast] : Math.floor(Math.random()*(228 - 151)) + 151
  }
  e.target.style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;

  if (e.type === 'contextmenu') {
    console.log('Right click');
  }
}

function App() {
  let items = [];
  for (let i = 1; i < 5100; i++) items.push(<GridItem num={i} key={i} onMouseOver ={(e) => changeColor(e)} />)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={volken} className="volken" />
        <img src={angel} className="angel" />
      </header>
      <div className="grid-container">
        {items}
      </div>
    </div>
  );
}

export default App;