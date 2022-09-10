import './Board.css';

import BoardCell from './BoardCell';

const Board = ( { board } ) => {
    //styling the board by setting up a grid of 20 x 10
    const boardStyle = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    }
    return (
        <div className="Board" style = {boardStyle}>
            { board.rows.map((row, y) =>
                row.map((cell, x) => (
                    <BoardCell key = {x * board.size.columns + x} cell={cell} />)
                    )
                )   
            }
        </div>
    )
}

export default Board; 