import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Person name="Rubel" job="Karateka"></Person>
        <Person name="Jasim" job="thela gari chalok"></Person>
        <Person name="Bapparaz" job="cheka khaoa"></Person>
        <Person name="Elias K" job="sapure"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: "2px solid red", margin: "2px" }}>
      <h1>Name: {props.name}</h1>
      <h3>Job: {props.job}</h3>
    </div>
  );
}

export default App;
