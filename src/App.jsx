import { useEffect, useState } from 'react'
import Gamele from './components/Gamele'
import './App.css'
import games from '../data/games.json'

function App() {
  const [randomGame, setRandomGame] = useState(null)
  const ListGames = games.results
  
  useEffect(()=>{
    const randomGameIndex = Math.floor(Math.random() * ListGames.length)
    const getRandomGame = ListGames[randomGameIndex]
    setRandomGame(getRandomGame.name)
    console.log(randomGame)
  },[setRandomGame])

  return (
    <main>
      <h1>hola mundo</h1>
      {
        randomGame && <Gamele randomGame={randomGame} /> 
      }
    </main>
  )
}

export default App
