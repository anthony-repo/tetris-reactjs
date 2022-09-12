import "./GameController.css"

import moveTetromino from '../utils/moveTetromino'
import rotateTetromino from '../utils/rotateTetromino';
import { mappedInput, Action } from '../utils/InputMapping';


const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer   
}) => {
    const handleInput = ( { code } ) => {
        const keyPressed = mappedInput(code);
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
            rotateTetromino({ board, player, setPlayer });
        }
        
    }



    return (
        <input 
            className="GameController" 
            onKeyDown={handleInput}
            autoFocus
        />
    );
}

export default GameController;