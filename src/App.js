
import './App.css';
import {useEffect, useState} from 'react';
import Card from './card';
import Inputb from './input';
// use effect takes two parameters, function and dependency[array] . empty array [] means on mount ie the function will only be called once, when the page loads



function App() {

  const [dataArray, setDataArray] = useState([]);
  const [search, setSearch] = useState('');
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users').then (data => {return data.json()
}).then(result => {
  console.log(result)
  setDataArray(result)
}).catch(err => console.log(err));
}, [])

const handleText = (e) => {
  setSearch(e.target.value)
}

console.log(search);
  return (
    <div className="App">
      <Inputb changeText = {handleText} />
      
      {dataArray.map((cur, index) => <Card object = {cur} key={index}/>)}
    </div>
  );
}

export default App;
