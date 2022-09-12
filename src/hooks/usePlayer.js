import { useState, useCallback, useRef, useEffect } from 'react';

import { randomTetromino } from '../utils/Tetrominoes';

const buildPlayer = (previousPlayer) => {
    let tetrominoes;
    
    if (previousPlayer) {
        //tetrominoes works like a queue,
        //unshift will add a new random tetromino to the end
        //of the player's tetrominoes
        tetrominoes = [...previousPlayer.tetrominoes];
        tetrominoes.unshift(randomTetromino());
    } else {
        //player is initialized with 4 tetrominoes
        tetrominoes = Array(4)
            .fill(0)
            .map((_) => randomTetromino());
    }

    //spawns a new tetromino on the board
    return {
        collided: false,
        isFastDropping: false,
        position: { row: 0, column: 4 },
        tetrominoes,
        tetromino: tetrominoes.pop()
    };
};

export const usePlayer = () => {
    //initializing a player
    const [player, setPlayer] = useState(buildPlayer());

    const resetPlayer = useCallback(() => {
        setPlayer((previousPlayer) => buildPlayer(previousPlayer));
    }, []);

    return [player, setPlayer, resetPlayer];
}