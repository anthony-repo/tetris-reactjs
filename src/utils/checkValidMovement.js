

export const isValidMovement= ({ board, position, shape }) => {
    for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape[0].length; x++) {
            if (shape[y][x]) {
                const row = y + position.row;
                const column = x + position.column;  
                if (!isWithinBoard({ board, row, column })) {
                    return false;
                } else {
                    if (hasCollision({ board, row, column })) {
                        return false;
                    }
                }
                    
            }
        }
    }
    return true;
};

export const isWithinBoard = ({ board, row, column}) => {
    return board.rows[row] && board.rows[row][column];
};

export const hasCollision = ({ board, row, column}) => {
    return board.rows[row][column].occupied === true;
}