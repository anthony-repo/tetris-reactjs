import Menu from './Menu';
import Tetris from './Tetris';
import { useGameOver } from '../hooks/useGameOver';

//default Tetris board size 20 x 10
const rows = 20;
const columns = 10;

//1.creating an empty board
const Game = () => {
    //to indicate the state of the game
    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    //when game starts, gameOver should be false
    const start = () => {
        resetGameOver();
    }

    return (
        <div className ="Game">
            {gameOver ?  (
                <Menu onClick={start} />
            ) : (
                //when game is not over, a tetris game should be rendered
                <Tetris rows={rows} columns={columns} setGameOver={setGameOver}/>
            )}
        </div>
    );
};

export default Game;