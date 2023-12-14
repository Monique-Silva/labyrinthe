let numberOfSteps = 0;
let maze = [
    ["X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "S", "X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "X", "0", "X", "X", "0", "X", "X"],
    ["X", "0", "X", "0", "X", "G", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "X", "X", "0", "X"],
    ["X", "0", "X", "0", "1", "0", "0", "0", "X"],
    ["X", "0", "X", "0", "0", "0", "X", "0", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X"],
]


const startCase = {
    x: 1,
    y: 1
};

function moveDown(gretelCase) {
    switch (maze[gretelCase.x] [gretelCase.y - 1]) {
        case "G":
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x] [gretelCase.y - 1] = "R";
            gretelCase = maze[gretelCase.x] [gretelCase.y - 1];
            break;
        case "X":
            moveRight(gretelCase);
            break;
        case "R":
            maze[gretelCase.x] [gretelCase.y - 1] = "0";
            moveRight(gretelCase);
            break;
    }
    console.log(maze);
    return gretelCase;
}

function moveRight(gretelCase) {
    switch (maze[x + 1] [y]) {
        case "G":
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x + 1] [gretelCase.y] = "R";
            gretelCase = maze[gretelCase.x + 1] [gretelCase.y];
            break;
        case "X":
            moveUp(gretelCase);
            break;
        case "R":
            maze[gretelCase.x + 1] [gretelCase.y] = "0";
            moveUp(gretelCase);
            break;
    }
    return gretelCase;
}

function moveUp(gretelCase) {
    switch (maze[gretelCase.x] [gretelCase.y + 1]) {
        case "G":
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x] [gretelCase.y + 1] = "R";
            gretelCase = maze[gretelCase.x] [gretelCase.y + 1];
            break;
        case "X":
            moveLeft(gretelCase);
            break;
        case "R":
            maze[gretelCase.x] [gretelCase.y + 1] = "0";
            moveLeft(gretelCase);
            break;
    }
    return gretelCase;
}

function moveLeft(gretelCase) {
    switch (maze[gretelCase.x - 1] [gretelCase.y]) {
        case "G":
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x - 1] [gretelCase.y] = "R";
            gretelCase = maze[gretelCase.x - 1] [gretelCase.y];
            break;
        case "X":
            moveDown(gretelCase);
        case "R":
            maze[gretelCase.x - 1] [gretelCase.y] = "0";
            moveDown(gretelCase);
            break;
    }
    return gretelCase;
}

function move(startCase) {
    let gretelCase = startCase;
    maze[gretelCase.x][gretelCase.y] = "R";
    moveDown(gretelCase);
    move(gretelCase);
    return gretelCase
}

move(startCase);
