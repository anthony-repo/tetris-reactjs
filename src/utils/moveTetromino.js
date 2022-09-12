
import { isValidMovement} from './checkValidMovement'

export const moveTetromino = ({board, player, setPlayer, movement}) => {
    const newRow = player.position.row + movement.row;
    const newColumn = player.position.column + movement.column;
    const position = {row: newRow, column: newColumn};
    const shape = player.tetromino.shape;
    let collided = false;
  
    
    if (!isValidMovement({ board, position, shape })) {
        if (movement.row === 1) {
            collided = true;
            setPlayer({ ...player, collided});
        }
        return;
    }

    setPlayer({ ...player, position: position});
    
};

export default moveTetromino;