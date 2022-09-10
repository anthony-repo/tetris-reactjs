import "./GameController.css"

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
        console.log(code);
        if (keyPressed === Action.Quit) {
            setGameOver(true);
        }
        if (keyPressed === Action.Pause) {
            console.log(keyPressed);
        }
        if (keyPressed === Action.slowDrop) {
            console.log(keyPressed);
        }
        if (keyPressed === Action.fastDrop) {
            console.log(keyPressed);
        }
        if (keyPressed === Action.moveLeft) {
            console.log(keyPressed);
        }
        if (keyPressed === Action.moveRight) {
            console.log(keyPressed);
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