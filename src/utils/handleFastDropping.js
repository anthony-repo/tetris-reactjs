import moveTetromino from "./moveTetromino";

export const handleFastDropping = ({ board, player, setPlayer }) => {
    let position = player.position;
    let max = board.size.rows - position.row + 1;
    let row = 0;
    for (let i = 0; i < max; i++) {
        const movement = { row: i, column: 0 };
        const collided = moveTetromino({ board, player, setPlayer, movement });
        if (collided) {
            break;
        }
        row = position.row + i;
    }

    return {
        row: row,
        column: position.column
    }
};

export default handleFastDropping;

