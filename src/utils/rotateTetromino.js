
import { isValidMovement } from './checkValidMovement'




export const rotateTetromino = ({ board, player, setPlayer }) => {


    const shape = player.tetromino.shape[0]
        .map((_, col) => 
            player.tetromino.shape.map(row => row[col]));
    shape.map(row => row.reverse());
    const position = player.position;
    if (isValidMovement({ board, position, shape })) {
        setPlayer({ ...player, tetromino: { ...player.tetromino, shape} });
    } else {
        return false;
    }
}
   


  
export default rotateTetromino;