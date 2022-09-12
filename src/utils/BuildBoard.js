import { defaultCell } from './Cell';

import { transferToBoard } from './Tetrominoes';

//building a rows x columns dimension board with empty cells
export const buildBoard = ({ rows, columns }) => {
    const buildRows = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({ ...defaultCell}))
    );

    return {
        rows: buildRows,
        size: {rows, columns}
    }
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
    const { tetromino, position } = player;

    let rows = board.rows.map((row) =>
        row.map((cell) => (cell.occupied ? cell : {...defaultCell}))
    );

    rows = transferToBoard({
        className: tetromino.className,
        isOccupied: player.collided,
        position,
        rows,
        shape: tetromino.shape
    });
    
    if (player.collided || player.isFastDropping) {
        resetPlayer();
    }
    
    return {
        rows,
        size: { ...board.size }
    };
}
    

