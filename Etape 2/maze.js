let numberOfSteps = 0;
let maze = [
    ["S", "X", "0", "0", "0", "0", "0"],
    ["0", "X", "0", "X", "X", "0", "X"],
    ["0", "X", "0", "X", "G", "0", "0"],
    ["0", "0", "0", "0", "X", "X", "0"],
    ["0", "X", "0", "1", "0", "0", "0"],
    ["0", "X", "0", "0", "0", "X", "0"],
]
let startCase = maze["S"];

function move (startCase) {
    let startCase = gretelCase;
    moveDown(gretelCase);
    move (gretelCase);
}
 
function moveDown(numberOfSteps, maze, gretelCase) {
    switch (maze[x] [y - 1]) {
        case "G":
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[x] [y - 1] = "R";
            gretelCase = maze[x] [y - 1];
            break;
        case "X":
            moveRight(numberOfSteps, maze, gretelCase);
            break;
        case "R":
            maze[x] [y - 1] = "0";
            moveRight(numberOfSteps, maze, gretelCase);
            break;
            break;
    }
}

function moveRight(numberOfSteps, maze, gretelCase) {
    switch (maze[x + 1] [y]) {
        case "G":
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[x + 1] [y] = "R";
            gretelCase = maze[x + 1] [y];
            break;
        case "X":
            moveUp(numberOfSteps, maze, gretelCase);
            break;
        case "R":
            maze[x + 1] [y] = "0";
            moveUp(numberOfSteps, maze, gretelCase);
            break;
    }
}

function moveUp(numberOfSteps, maze, gretelCase) {
    switch (maze[x] [y + 1]) {
        case "G":
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[x] [y + 1] = "R";
            gretelCase = maze[x] [y + 1];
            break;
        case "X":
            moveLeft(numberOfSteps, maze, gretelCase);
            break;
        case "R":
            maze[x] [y + 1] = "0";
            moveLeft(numberOfSteps, maze, gretelCase);
            break;
    }
}

function moveLeft(numberOfSteps, maze, gretelCase) {
    switch (maze[x - 1] [y]) {
        case "G":
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[x - 1] [y] = "R";
            gretelCase = maze[x - 1] [y];
            break;
        case "X":
            moveDown(numberOfSteps, maze, gretelCase);
        case "R":
            maze[x - 1] [y] = "0";
            moveDown(numberOfSteps, maze, gretelCase);
    }
}

function move (startCase) {
    moveDown(startCase);
    move (gretelCase);
}

 
move(startCase);