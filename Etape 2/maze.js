let numberOfSteps = 0;
let maze = [
    ["X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "S", "X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "X", "0", "X", "X", "0", "X", "X"],
    ["X", "0", "X", "0", "X", "G", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "X", "X", "0", "X"],
    ["X", "0", "X", "0", "X", "0", "0", "0", "X"],
    ["X", "0", "X", "0", "0", "0", "X", "0", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X"],
]


const startCase = {
    x: 1,
    y: 1
};
function log_maze() {
    for (let i = 0; i < maze.length; i++) {
        //for (let j = 0; j < maze[i].length; j++) {
        console.log(maze[i].join());
        //}
    }
    console.log('\n');
}

function moveDown(gretelCase) {
    switch (maze[gretelCase.x + 1][gretelCase.y]) {
        case "G":
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x + 1][gretelCase.y] = "R";
            gretelCase.x++;
            break;
        case "X":
            moveRight(gretelCase);
            break;
        case "R":
            maze[gretelCase.x + 1][gretelCase.y] = "0";
            moveRight(gretelCase);
            break;
    }
    log_maze();
    return gretelCase;
}

function moveRight(gretelCase) {
    switch (maze[gretelCase.x][gretelCase.y + 1]) {
        case "G":
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x][gretelCase.y + 1] = "R";
            gretelCase.y++;
            break;
        case "X":
            moveUp(gretelCase);
            break;
        case "R":
            maze[gretelCase.x][gretelCase.y + 1] = "0";
            moveUp(gretelCase);
            break;
    }
    return gretelCase;
}

function moveUp(gretelCase) {
    switch (maze[gretelCase.x - 1][gretelCase.y]) {
        case "G":
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x - 1][gretelCase.y] = "R";
            gretelCase.x--;
            break;
        case "X":
            moveLeft(gretelCase);
            break;
        case "R":
            maze[gretelCase.x - 1][gretelCase.y] = "0";
            moveLeft(gretelCase);
            break;
    }
    return gretelCase;
}

function moveLeft(gretelCase) {
    switch (maze[gretelCase.x][gretelCase.y - 1]) {
        case "G":
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x][gretelCase.y - 1] = "R";
            gretelCase.y--;
            break;
        case "X":
            moveDown(gretelCase);
            break;
        case "R":
            maze[gretelCase.x][gretelCase.y - 1] = "0";
            moveDown(gretelCase);
            break;
    }
    return gretelCase;
}

function move(startCase) {
    let gretelCase = startCase;
    maze[gretelCase.x][gretelCase.y] = "R";
    moveDown(gretelCase);
    if (maze[gretelCase.x][gretelCase.y] === "G") {
        console.log("You win!");
        return;
    }
    else {
        move(gretelCase);
        return gretelCase
    }
}

move(startCase);
