import { useState, useCallback } from 'react';

const buildGameStats = () => ({
    level: 1,
    linesCleared: 0,
    linesPerLevel: 10,
    points: 0
});

export const useGameStats = () => {
    //const [gameStats, setGameStats] = useState(buildGameStats());
    const [gameStats] = useState(buildGameStats());
    const addLinesCleared = useCallback(() => {}, []);

    return [gameStats, addLinesCleared];
}