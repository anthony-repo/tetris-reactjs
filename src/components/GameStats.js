import React from 'react';

import "./GameStats.css";

const GameStats = ({ gameStats }) => {
    const { level, linesCleared, linesPerLevel, points } = gameStats;
    const linesToNextLevel = linesPerLevel - linesCleared;

    return (
        <ul className="GameStats GameStats_info">
            <li>Level</li>
            <li className="value">{level}</li>
            <li>Lines to Next Level</li>
            <li className="value">{linesToNextLevel}</li>
            <li>Points</li>
            <li className="value">{points}</li>
        </ul>
    );
};
// memoizing => not rending over and over again unless GameStats has
// been updated
export default React.memo(GameStats);