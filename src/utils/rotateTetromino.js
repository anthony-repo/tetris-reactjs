
  
export const rotateTetromino = ({ board, player, setPlayer }) => {


    const shape = player.tetromino.shape[0]
        .map((_, col) => 
            player.tetromino.shape.map(row => row[col]));
    shape.map(row => row.reverse());

    setPlayer({ ...player, tetromino: { ...player.tetromino, shape} });
};


  
export default rotateTetromino;