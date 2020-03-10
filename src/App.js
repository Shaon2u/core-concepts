import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const names = ['Rubel Khan', 'Shakib Hasan', 'Omar Khan', 'ovi khan']
const products = [
  {name: "Photoshop", price: '$112'},
  {name: "Illustrator", price: '$100'},
  {name: "PDF", price: '$00'},
  {name: "inDesign", price: '$250'}
]
const productNames = products.map(product => product.name)
  return (
    <div className="App">
      <header className="App-header">
        <p>I'm a React developer</p>
        <Counter> </Counter>
        <Users> </Users>
      <ul>
        {names.map(name => <li>{names}</li>)}
        {products.map(product => <li> {product.name} </li>)}
      </ul>

      {products.map(product => <Product product={product}> </Product>)}
        <Product product={products[0]}> </Product>
        <Product product={products[1]}> </Product>
        <Product product={products[2]}> </Product>
      <Person name="Rubel Hasan" job="Actor"> </Person>
      <Person name="Sakib Hasan" job="Cricketer"> </Person>
      <Person name="Omar KHan" job="Businessman"> </Person>
      </header>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    setCount(count +1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
        <button onMouseMove={() => setCount(count - 1)}> On Mouse move (-)</button>
        <button onClick={() => setCount(count - 1)}> Decrease </button>
        <button onClick={() => setCount(count +1)}>Increase</button>
        <button onMouseMove={() => setCount(count + 1)}> On Mouse move (+)</button>
    </div>
  )
};
function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
    }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
      </ul>
    </div>
  )
}
function Product(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '200px',
    margin: '20px',
    padding: '30px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}
function Person(props) {
  const personStyle={
    border: '2px solid red',
    width: '400px',
    margin: '10px'
  }
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3> Profession: {props.job}</h3>
  </div>
  )
}
export default App;
