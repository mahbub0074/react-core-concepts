import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anowar','jafor','Alomgir','salman']
  const products = [
    {name :'Photoshop', price :'$90.99'},
    {name :'Illustrator', price :'$60.99'},
    {name :'PDF Reader', price :'$20.99'}
  ]
  
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
            I am a react person.
        </p>
        <Counter></Counter>
        <Users> </Users>

       <ul>
         {
           nayoks.map(nayok =><li>{nayok}</li>)
         }
         {

         products.map(product =><li>{product.name}</li>)
         }
         {

         }
  
       </ul>
       {
         products.map(product =><Product product={product}></Product>)
       }
       

        <Person name='Munna' job = 'football'></Person>
        <Person name ="Masum" job = 'Dorshok'></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data)); 
  }, [])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }

      </ul>
      
      
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () =>setCount(count +1);
    //const newCounter = count +1;
    //setCount(newCounter);
    
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() =>setCount(count +1)}>Increase</button>
      <button onMouseMove = {()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border:'1px solid grey',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  //console.log(props);
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
  <button>Buy Now</button>
    
    </div>
  )

}

function Person(props){
  return (
    <div style = {{border:'2px solid gold', width:'400px'}}>
      <h3>My Name:{props.name}</h3>
  <p>My Profession:{props.job}</p>

    </div>
  )
}
export default App;
