import { defaultCell } from './Cell';
import handleFastDropping from './handleFastDropping';
import { transferToBoard } from './Tetrominoes';

//building a rows x columns dimension board with empty cells
export const buildBoard = ({ rows, columns }) => {
    const buildRows = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({ ...defaultCell}))
    );

    return {
        rows: buildRows,
        size: { rows, columns }
    }
};



export const nextBoard = ({ board, player, setPlayer, resetPlayer, addLinesCleared }) => {
    const { tetromino, position } = player;

    let rows = board.rows.map((row) =>
        row.map((cell) => (cell.occupied ? cell : {...defaultCell}))
    );

    


    


    rows = transferToBoard({
        className: tetromino.className,
        isOccupied: player.collided,
        position: position,
        rows,
        shape: tetromino.shape
    });

    

    
    let linesCleared = 0;

    if (player.collided) {
        const emptyRow = rows[0].map((_) => ({ ...defaultCell }));
        rows = rows.reduce((newBoard, row) => {
            if (row.every((cell) => cell.occupied)) {
                linesCleared++;
                newBoard.unshift([ ...emptyRow ]);
            } else {
                newBoard.push(row);
            }

        return newBoard;

        }, []);
    }

    
   

    if (player.collided || player.isFastDropping) {
        resetPlayer();
    }

    if (linesCleared > 0) {
        addLinesCleared(linesCleared);
    }

    return {
        rows,
        size: { ...board.size }
    };
}
    

