
import './App.css';
import {useEffect, useState} from 'react';
import Card from './card';
import Inputb from './input';
// use effect takes two parameters, function and dependency[array] . empty array [] means on mount ie the function will only be called once, when the page loads



function App() {

  const [dataArray, setDataArray] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredMonster, setNow] = useState(dataArray);
  
useEffect(() => {
fetch('https://jsonplaceholder.typcode.com/users').then (data => {return data.json()
}).then(result => {
  console.log(result)
  setDataArray(result)
}).catch(err => console.log(err));
}, [])

const handleText = (e) => {
  setSearch(e.target.value.toLowerCase());
}

console.log(search);

useEffect(()=> {
  let filtered = dataArray.filter(cur => {
    return cur.name.toLowerCase().includes(search);
  })
  
    setNow(filtered);

},[search])

  return (
    <div className="App flex flex-col flex-wrap justify-between items-center">
       <h1 class="text-5xl text-green-600 font-bold italic mb-5 mt-12">MonSTer RoLodEX</h1>
       
      <Inputb changeText = {handleText} />
      <div className='flex flex-wrap items-center justify-center w-screen h-3/4'>
      {filteredMonster.map((cur, index) => <Card object = {cur} key={index}/>)}
      </div>
    </div>
  );
}

export default App;
