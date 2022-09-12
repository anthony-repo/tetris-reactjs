import './Tetris.css';

import Board from './Board';
import GameStats from './GameStats';
import Previews from './Previews';
import GameController from './GameController';

import { useBoard } from '../hooks/useBoard';
import { useGameStats } from '../hooks/useGameStats';
import { usePlayer } from '../hooks/usePlayer';

const Tetris = ({ rows, columns, setGameOver}) => {
    //Game stats on the right side of the tetris board
    const [gameStats, addLinesCleared] = useGameStats();
    //player is the current tetromino that the player is using
    const [player, setPlayer, resetPlayer] = usePlayer();
    //board is the status of the current board
    const [board, setBoard] = useBoard( {
        rows, columns, player, resetPlayer, addLinesCleared });
    
    return (
        <div className="Tetris">
            <Board board={board} />
            <Previews tetrominoes={player.tetrominoes} />
            <GameStats gameStats={gameStats} />
            <GameController 
                board={board}
                gameStats={gameStats}
                player={player}
                setGameOver={setGameOver}
                setPlayer={setPlayer}
                />
        </div>
    );
}

export default Tetris;