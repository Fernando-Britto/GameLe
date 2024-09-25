import { useState } from "react"

const useGamele = ( randomGame )=>{
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGame = () =>{

    }

    const addNewGame = () =>{

    }

    const handleKeyUp = ({ key }) =>{

        if(key === 'Backspace'){
            setCurrentGuess((prev)=>{
                return prev.slice(0,-1)
            })
            return
        }

        if (/^[A-Za-z0-9_()\- ]$/.test(key)){
            if(currentGuess.length < randomGame.length)
                setCurrentGuess((prev)=>{
                    return prev + key
                })
            console.log(currentGuess)
        }
    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyUp }
}
export default useGamele