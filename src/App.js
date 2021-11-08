import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

    const [poke, setPoke] = useState([]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res=>{
              setPoke(res.data.results)})
            .catch(err => {console.error(err)})
    }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon API</h1>
      </header>
      <button>Fetch Pokemon</button>
      <ul>
        {poke.map((pokemon)=>{
          return <li>{pokemon.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
