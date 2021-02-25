import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name="Rubel" job="Karateka"></Person>
        <Person name="Jasim" job="thela gari chalok"></Person>
        <Person name="Bapparaz" job="cheka khaoa"></Person>
        <Person name="Elias K" job="sapure"></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const { name, price } = props.product;
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  };
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: "2px solid red", width: "400px", margin: "2px" }}>
      <h3>Name: {props.name}</h3>
      <p>Job: {props.job}</p>
    </div>
  );
}

export default App;
