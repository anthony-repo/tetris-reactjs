import Menu from './Menu';
import { useGameOver } from '../hooks/useGameOver';

const Tetris = ({rows, columns}) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    const start = () => {
        resetGameOver();
        console.log(`Start game over is ${gameOver}`); 
    };

    return (
        <div className ="Tetris">
            <Menu onClick={start} />
        </div>
    );
};

export default Tetris;