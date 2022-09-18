import './Tetris.css';

import Board from './Board';
import GameStats from './GameStats';
import Previews from './Previews';

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
        rows, columns, player, setPlayer, resetPlayer, addLinesCleared });
    
    
    return (
        <div className="Tetris">
            <Board board={board}
                player={player}
                setGameOver={setGameOver}
                setPlayer={setPlayer}
                gameStats={gameStats}
                />
            <div className="Tetris-sidebar">
                <Previews tetrominoes={player.tetrominoes} />
                <GameStats gameStats={gameStats} />
            </div>
        </div>
    );
}

export default Tetris;