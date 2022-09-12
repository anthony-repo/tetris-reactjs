

export const isValidMovement= ({ board, position, shape }) => {
    for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape[0].length; x++) {
            if (shape[y][x]) {
                console.log(position);
                const row = y + position.row;
                const column = x + position.column;  
                if (!isWithinBoard({ board, row, column }) &&
                    hasCollision({ board, row, column})) {
                    return false;
                    }         
            }
        }
    }
    return true;
};

const isWithinBoard = ({ board, row, column}) => {
    return board.rows[row] && board.rows[row][column];
};

const hasCollision = ({ board, row, column}) => {
    return board.rows[row][column].occupied === true;
}