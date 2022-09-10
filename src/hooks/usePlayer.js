import { useState, useCallback, useRef, useEffect } from 'react';

import { randomTetromino } from '../utils/Tetrominoes';

const buildPlayer = (previousPlayer) => {
    let tetrominoes;
    
    if (previousPlayer) {
        tetrominoes = [...previousPlayer.tetrominoes];
        tetrominoes.unshift(randomTetromino());
    } else {
        tetrominoes = Array(4)
            .fill(0)
            .map((_) => randomTetromino());
    }

    return {
        collided: false,
        isFastDropping: false,
        position: { row: 0, column: 4 },
        tetrominoes,
        tetromino: tetrominoes.pop()
    };
};

export const usePlayer = () => {
    const [player, setPlayer] = useState(buildPlayer());

    const resetPlayer = useCallback(() => {
        setPlayer((previousPlayer) => buildPlayer(previousPlayer));
    }, []);

    return [player, setPlayer, resetPlayer];
}