import { useState, useCallback } from 'react';

//when user starts running the app/the game is over
//it should pop up a button for user to start the game
export const useGameOver = () => {
    //default state of the game is always 'gameover = true'
    const [GameOver, setGameOver] = useState(true);

    
    const resetGameOver = useCallback(() => {
        setGameOver(false);
    }, []);

    return [GameOver, setGameOver, resetGameOver];
}

