import React, { useState } from 'react';
import Board from './Board';
import "./GameStyle.css";
import { calculateWinner } from '../../helpers';

const Game = () => {
    const [board,  setBoard] =useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] =useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };
    const handleRest = () => {
        setBoard(Array(9).fill(null));
    }
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            <button onClick={handleRest}>Reset</button>
        </div>
    );
};

export default Game;