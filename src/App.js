import './App.css';
import React, {useEffect, useState} from 'react';
import CardList from './components/card-list/card-list.component';

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')
  useEffect(()=>{
     const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const newData = await response.json();
      setMonsters(newData)
    };  
    fetchData();
  }, [])
  const filteredMonsters = monsters.filter(monster=> 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
  return (
    <div>
      <h1 className='heading'>Monsters Rolodex</h1>
      <input type='search' placeholder='search monster' onChange={ e => setSearchField(e.target.value)} />
      <CardList monsters = {filteredMonsters} /> 
    </div>   
  );
}

export default App;
