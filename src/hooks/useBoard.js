import { useState } from 'react';
import { buildBoard } from '../utils/BuildBoard';

export const useBoard = ( {rows, columns} ) => {
    const [board] = useState(buildBoard( { rows, columns } ));

    return [board];
}