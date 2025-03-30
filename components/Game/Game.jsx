import React from 'react';
import './game.css'
import Board from '../board/Board';
import { useState } from 'react';
import {whoIsWinner} from "./../../service/whoIsWinner.js"
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setxIsNext] = useState(true)
    const [user1Score, setUser1score] = useState(0)
    const [user2Score, setUser2score] = useState(0)
    const winner = whoIsWinner(board)
    const [counter, setCounter] = useState(0)
    const [flag, setFlag] = useState(false)
    if(winner && !flag){
        if(counter%2==1){
            setUser1score(user1Score+1)
            setFlag(true)
        }
        else{
            setUser2score(user2Score+1)
            setFlag(true)
        }
    }
    
    const StartNewGame = () => {
        return(
            <button className="start-btn" onClick={()=>{setBoard(Array(9).fill(null)), setFlag(!flag)}}> Очистить поле </button>
        );
    }

    const handleClick = (index) => {
        const boardCopy = [...board]
        if(boardCopy[index] || winner){
            return null
        }
        boardCopy[index]=( xIsNext ? "X" : "O")
        setxIsNext(!xIsNext)
        setBoard(boardCopy)
        if(!flag){setCounter(counter+1)}
        
    }
    return (
        <div className="wrapper">
            <div className="score-box">
                <span className="player">Игрок 1: {user1Score} побед</span>
                <span className="player">Игрок 2: {user2Score} побед</span>
            </div>
            
            
            

            <Board squares={board} click={handleClick}></Board>
            <div className='current'>{(winner ? 'Победитель: ' + winner : 'Сейчас ходит: '+ (xIsNext ? "X" : "O"))}</div>
            <StartNewGame></StartNewGame>
            
        </div>
    );
}


export default Game;
