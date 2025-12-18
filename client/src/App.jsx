import { useState } from 'react'
import axios from 'axios'
import PokemonCard from './components/PokemonCard'
import './App.css'

function App() {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonData, setPokemonData] = useState(null)
  const [error, setError] = useState('')

  const fetchPokemon = async () => {
    if (!pokemonName) return
    try {
      setError('')
      
      const response = await axios.get(`http://localhost:3000/pokemon/${pokemonName}`)
      
    
      setPokemonData(response.data) 
      console.log("Data loaded into State:", response.data)
    
    } catch (err) {
      setPokemonData(null)
      setError(`${err}\nCheck Spelling`)
    }
  }

  const clearData = () => {
      setPokemonName('');
      setPokemonData(null);
      setError('');
  }

  return (
    <div className="pokedex-container">
      <h1>Pocket Search</h1>
      
      <div className="search-interface">
        <input 
          type="text" 
          placeholder="Enter Pokemon Name" 
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <div className="search-btn">
        <button onClick={fetchPokemon}>SEARCH</button>
        <button className="clear-btn" onClick={clearData}>CLEAR</button>
        </div>

      </div>

      {error && <p className="error-msg">{error}</p>}

      <PokemonCard data={pokemonData} />
      
    </div>
  )
}

export default App