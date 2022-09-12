
import { isValidMovement } from './checkValidMovement'

export const moveTetromino = ({board, player, setPlayer, movement}) => {
    const newRow = player.position.row + movement.row;
    const newColumn = player.position.column + movement.column;
    const position = {row: newRow, column: newColumn};
    console.log(position);
    const shape = player.tetromino.shape;

    if (!isValidMovement({ board, position, shape})) {
            return false;
    }
    setPlayer({ ...player, position: position});
};

export default moveTetromino;