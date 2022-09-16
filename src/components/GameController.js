import "./GameController.css"

import moveTetromino from '../utils/moveTetromino'
import rotateTetromino from '../utils/rotateTetromino';
import { mappedInput, Action } from '../utils/InputMapping';

import { useInterval } from '../hooks/useInterval';

const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer   
}) => {
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

    return (
        <div className="GameController"
            role="button"
            tabIndex="0"
            onKeyDown={handleInput}>
                button
        </div>
    );
}

export default GameController;