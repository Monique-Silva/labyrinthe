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

function moveDown(gretelCase, lastCase) {
    switch (maze[gretelCase.x + 1][gretelCase.y]) {
        case "G":
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x][gretelCase.y + 1] = "R";
            lastCase.x = gretelCase.x;
            lastCase.y= gretelCase.y;
            gretelCase.x++;
            break;
        case "X":
            moveRight(gretelCase, lastCase);
            break;
        case "R":
            moveRight(gretelCase, lastCase);
            break;
        default:
            numberOfSteps++;
            gretelCase = lastCase;
    }

    log_maze();
    return gretelCase;
}

function moveRight(gretelCase, lastCase) {
    switch (maze[gretelCase.x][gretelCase.y + 1]) {
        case "G":
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x][gretelCase.y + 1] = "R";
            lastCase = maze[gretelCase.x][gretelCase.y];
            gretelCase.y++;
            break;
        case "X":
            moveUp(gretelCase, lastCase);
            break;
        case "R":
            moveUp(gretelCase, lastCase);
            break;
        default:
            numberOfSteps++;
            gretelCase = lastCase;
    }
    return gretelCase;
}

function moveUp(gretelCase, lastCase) {
    switch (maze[gretelCase.x - 1][gretelCase.y]) {
        case "G":
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x - 1][gretelCase.y] = "R";
            lastCase = maze[gretelCase.x][gretelCase.y];
            gretelCase.x--;
            break;
        case "X":
            moveLeft(gretelCase, lastCase);
            break;
        case "R":
            moveLeft(gretelCase, lastCase);
            break;
        default:
            numberOfSteps++;
            gretelCase = lastCase;
    }
    return gretelCase;
}

function moveLeft(gretelCase, lastCase) {
    switch (maze[gretelCase.x][gretelCase.y - 1]) {
        case "G":
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x][gretelCase.y - 1] = "R";
            lastCase = maze[gretelCase.x][gretelCase.y];
            gretelCase.y--;
            break;
        case "X":
            moveDown(gretelCase, lastCase);
            break;
        case "R":
            moveDown(gretelCase, lastCase);
            break;
        default:
            numberOfSteps++;
            gretelCase = lastCase;
    }
    return gretelCase;
}

function move(startCase) {
    let gretelCase = startCase;
    let lastCase = startCase;
    moveDown(gretelCase, lastCase);
    if (maze[gretelCase.x][gretelCase.y] === "G") {
        console.log("You win!");
        return;
    }
    else {
        move(gretelCase, lastCase);
        return gretelCase
    }
}

move(startCase);
