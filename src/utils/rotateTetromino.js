

export const rotateTetromino = ({ board, player, setPlayer }) => {

    const newShape = player.tetromino.shape[0]
        .map((_, col) => 
            player.tetromino.shape.map(row => row[col]));
    console.log(newShape);

}



  
export default rotateTetromino;