import React, { useEffect } from "react";
import useGamele from "../hooks/useGamele";

export default function Gamele ({ randomGame }){
    const { handleKeyUp, currentGuess } = useGamele(randomGame)

    useEffect(()=>{
        window.addEventListener('keyup', handleKeyUp)

        return() => window.removeEventListener('keyup', handleKeyUp)
    },[handleKeyUp])

    return(
        <div><h1>{randomGame}</h1><h3>and the guess is</h3><h2>{currentGuess}</h2></div>
    )
}