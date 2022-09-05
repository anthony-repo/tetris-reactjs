import {defaultCell} from './Cell';

//building a rows x columns dimension board with empty cells
export const buildBoard = ({ rows, columns }) => {
    const buildRows = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({ ...defaultCell}))
    );
    console.log(buildRows);

    return {
        rows: buildRows,
        size: {rows, columns}
    }
}