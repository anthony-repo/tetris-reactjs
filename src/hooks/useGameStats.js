import { useState, useCallback } from 'react';

const buildGameStats = () => ({
    level: 1,
    linesCleared: 0,
    linesPerLevel: 10,
    points: 0
});

export const useGameStats = () => {
    const [gameStats, setGameStats] = useState(buildGameStats());
    const addLinesCleared = useCallback((lines) => {
        setGameStats((previous) => {
    
            const pointMultiplier = {
                1 : 40,
                2 : 100,
                3 : 300,
                4 : 1200
            };

            const points = pointMultiplier[lines] * previous.level + previous.points;
            const { linesPerLevel } = previous;
            const newLinesCleared = previous.linesCleared + lines;
            const level = (newLinesCleared >= previous.linesPerLevel ? previous.level + 1 : previous.level);
            const linesCleared = newLinesCleared % previous.linesPerLevel;

            return {
                level,
                linesCleared,
                linesPerLevel,
                points
            };
        }, []);
    }, []);

    return [gameStats, addLinesCleared];
}