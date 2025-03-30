import React from 'react';
import './board.css'
import { uid } from 'uid';
import Square from '../square/Square';
const Board = ({squares, click}) => {
    return (
        <div className="board">
            {squares.map((square, i)=>{
                return(
                    <Square key={uid()} value={square} onClick={()=>{click(i)}} ></Square>
                );
            })}
        </div>
    );
}

export default Board;
