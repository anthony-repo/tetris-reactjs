import './Board.css';

import BoardCell from './BoardCell';
import moveTetromino from '../utils/moveTetromino'
import rotateTetromino from '../utils/rotateTetromino';
import { useState, useEffect } from 'react';
import { mappedInput, Action } from '../utils/InputMapping';

import { useInterval } from '../hooks/useInterval';


const Board = ( { board, player, setGameOver, setPlayer } ) => {


    //styling the board by setting up a grid of 20 x 10
    const boardStyle = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    }

    useInterval(() => {
        const movement = {row: 1, column: 0};
        moveTetromino({ board, player, setPlayer, movement});
    }, 1000);
    
    const handleInput = ( { code } ) => {
        const keyPressed = mappedInput(code);
        console.log(code);
        console.log(keyPressed);
        if (keyPressed === Action.Quit) {
            setGameOver(true);
        }
        if (keyPressed === Action.Pause) {
            console.log(keyPressed);
        }
        if (keyPressed === Action.slowDrop) {
            const movement = {row: 1, column: 0};
            moveTetromino({ board, player, setPlayer, movement})
        }
        if (keyPressed === Action.fastDrop) {
            console.log(keyPressed);
        }
        if (keyPressed === Action.moveLeft) {
            const movement = {row: 0, column: -1};
            moveTetromino({ board, player, setPlayer, movement})
        }
        if (keyPressed === Action.moveRight) {
            const movement = {row: 0, column: 1};
            moveTetromino({ board, player, setPlayer, movement})
        }
        if (keyPressed === Action.Rotate) {
            //rotate the tetromino
            rotateTetromino({ board, player, setPlayer });
        }
        
    }

    const [focused, setFocused] = useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    useEffect(() => {
        if (focused) {
          console.log("element has focus");
        } else {
          console.log("element does NOT have focus");
        }
      }, [focused]);


    return (
        //Rendering the board
        //board is a 20 x 10 matrix/2d array
        //each element in the board is a cell, default to defaultCell
        //when a tetromino piece appears on the board,
        //the board renders the cells which form the tetromino piece
        <div className="Board"  
            role="button" 
            tabIndex="0"
            onKeyDown={handleInput}
            style = {boardStyle}
            onFocus={onFocus}
            onBlur={onBlur}
            >
            { board.rows.map((row, y) =>
                row.map((cell, x) => (
                    <BoardCell key = {x * board.size.columns + x} cell={cell} />)
                    )
                )   
            }
        </div>
        
    )
}

export default Board; 