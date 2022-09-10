export const Action = {
    moveLeft: "moveLeft",
    moveRight: "moveRight",
    Rotate: "Rotate",
    slowDrop: "slowDrop",
    fastDrop: "fastDrop",
    Pause: "Pause",
    Quit: "Quit"
};

export const Key = {
    ArrowLeft: Action.moveLeft,
    ArrowRight: Action.moveRight,
    KeyQ: Action.Rotate,
    ArrowDown: Action.slowDrop,
    Space: Action.fastDrop,
    Enter: Action.Pause,
    Escape: Action.Quit
};

export const mappedInput = (input) => Key[input];