import logo from "./logo.svg";
import "./App.css";
import Sum from "./Sum";

const hello = "Wello, World!";

const Welcome = (name) => {
  name = "Giulia";
  return <h1>Hello, {name}</h1>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{hello} </h1>
        <Welcome />
        <Sum />
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
