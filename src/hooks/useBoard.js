import { useState, useEffect } from 'react';
import { buildBoard, nextBoard } from '../utils/BuildBoard';


export const useBoard = ( {
    rows, columns, player, setPlayer, resetPlayer, addLinesCleared} ) => {

    const [board, setBoard] = useState(buildBoard({ rows, columns }));
    useEffect(() => {
        setBoard((previousBoard) =>
            nextBoard({
                board: previousBoard,
                player,
                setPlayer,
                resetPlayer,
                addLinesCleared
            })
        )
    }, [player, resetPlayer, addLinesCleared]);

    return [board];
}