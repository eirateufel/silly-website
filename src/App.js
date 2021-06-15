//import logo from './logo.svg';
import './App.css';

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
}

function App() {
  let items = [];
  for (let i = 1; i < 5100; i++) items.push(<GridItem num={i} key={i} onMouseOver ={(e) => changeColor(e)} />)

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://images-na.ssl-images-amazon.com/images/I/914%2BTmOpT3L._AC_SY741_.jpg" className="App-logo" alt="logo" />

      </header>
      <div className="grid-container">
        {items}
      </div>
    </div>
  );
}

export default App;

/**
 * <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
 */