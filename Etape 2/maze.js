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
            numberOfSteps++;
            gretelCase.x++;
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x + 1][gretelCase.y] = "R";
            lastCase.x = gretelCase.x;
            lastCase.y = gretelCase.y;
            gretelCase.x++;
            break;
        case "X":
            moveRight(gretelCase, lastCase);
            break;
        case "R":
            moveRight(gretelCase, lastCase);
            break;
    }

    log_maze();
    return gretelCase;
}

function moveRight(gretelCase, lastCase) {
    switch (maze[gretelCase.x][gretelCase.y + 1]) {
        case "G":
            numberOfSteps++;
            gretelCase.y++;
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x][gretelCase.y + 1] = "R";
            lastCase.x = gretelCase.x;
            lastCase.y = gretelCase.y;
            gretelCase.y++;
            break;
        case "X":
            moveUp(gretelCase, lastCase);
            break;
        case "R":
            moveUp(gretelCase, lastCase);
            break;
    }
    return gretelCase;
}

function moveUp(gretelCase, lastCase) {
    switch (maze[gretelCase.x - 1][gretelCase.y]) {
        case "G":
            numberOfSteps++;
            gretelCase.x--;
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x - 1][gretelCase.y] = "R";
            lastCase.x = gretelCase.x;
            lastCase.y = gretelCase.y;
            gretelCase.x--;
            break;
        case "X":
            moveLeft(gretelCase, lastCase);
            break;
        case "R":
            moveLeft(gretelCase, lastCase);
            break;
    }
    return gretelCase;
}

function moveLeft(gretelCase, lastCase) {
    switch (maze[gretelCase.x][gretelCase.y - 1]) {
        case "G":
            numberOfSteps++;
            gretelCase.y--;
            console.log("You win!");
            break;
        case "0":
            numberOfSteps++;
            maze[gretelCase.x][gretelCase.y - 1] = "R";
            lastCase.x = gretelCase.x;
            lastCase.y = gretelCase.y;
            gretelCase.y--;
            break;
        case "X":

        case "R":
            numberOfSteps++;
            console.log("Mon lastCase vaut " + lastCase.x + " " + lastCase.y);
            console.log("Mon gretelCase vaut " + gretelCase.x + " " + gretelCase.y);
            let temp = {
            x: lastCase.x,
            y: lastCase.y
            }
            if(gretelCase.x  - lastCase.x === 0) { lastCase.y--;}
            if(gretelCase.y - lastCase.y === 0) {lastCase.x--;}
            gretelCase.x = temp.x;
            gretelCase.y = temp.y;
            console.log("Mon lastCase vaut " + lastCase.x + " " + lastCase.y);
            console.log("Mon gretelCase vaut " + gretelCase.x + " " + gretelCase.y);

            break;
    }
    return gretelCase;
}


function move(startCase) {
    let gretelCase = {...startCase}; //clone - spread method
    let lastCase = {...gretelCase};
    while (maze[gretelCase.x][gretelCase.y] !== "G") {
        moveDown(gretelCase, lastCase);
    }
    return gretelCase;
}

move(startCase);

/* version recursive (trop de recursivité, cela ne marche pas)
function move(startCase, lastCase) {
   let gretelCase = { ...startCase}; //clone - spread method
    let lastCase = { ...gretelCase};
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
*/