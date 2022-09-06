import './Tetris.css';

import Board from './Board';
import GameStats from './GameStats'
import { useBoard } from '../hooks/useBoard';
import { useGameStats } from '../hooks/useGameStats';

const Tetris = ({ rows, columns, setGameOver}) => {
    //const [board, setBoard] = useBoard( {rows, columns} );
    //const [gameStats, addLinesCleared] = useGameStats();
    const [board] = useBoard( {rows, columns} );
    const [gameStats] = useGameStats();
    return (
        <div className="Tetris">
            <Board board={board} />
            <GameStats gameStats={gameStats} />
        </div>
    );
}

export default Tetris;