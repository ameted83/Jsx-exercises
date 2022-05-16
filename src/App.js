import logo from "./logo.svg";
import "./App.css";

const hello = <h1>"Wello, World!"</h1>;

const welcome = (name) => {
  return <h1>Hello, {name}</h1>;
};

const sum = (a, b) => {
  return <h2>{a + b}</h2>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {hello}
        {welcome("Giulia")}
        {sum(2, 3)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
