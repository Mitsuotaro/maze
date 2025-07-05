const { 
    Engine, 
    Render, 
    Runner, 
    World, 
    Bodies 
} = Matter;

const engine = Engine.create();
const { world } = engine;

const cells = 4;
const width = 600;
const height = 600;

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: width,
        height: height,
        wireframes: true,
    },
});

Render.run(render);
Runner.run(Runner.create(), engine);

//WALLS
const walls = [
    Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true}),
    Bodies.rectangle(width / 2, height, width, 40, { isStatic: true}),
    Bodies.rectangle(0, height / 2, 40, height, { isStatic: true}),
    Bodies.rectangle(width, height / 2, 40, height, { isStatic: true}),
];
World.add(world, walls);

// MAZE GENERATION
const grid = Array(cells)
    .fill(null)
    .map(() => Array(cells).fill(false));
// console.log("grid: ", grid);

const verticals = Array(cells)
    .fill(null)
    .map(() => Array(cells - 1).fill(false));
 

const horizontals = Array(cells - 1)
    .fill(null)
    .map(() => Array(cells).fill(false));
 
const startRow = Math.floor(Math.random() * cells);
const startCol = Math.floor(Math.random() * cells);

function iterateCells(row, column){
    // If this cell have been visited/marked at (row, column), return
    if(grid[row][column]) return;

    // Mark this cell as visited
    grid[row][column] = true;

    // Assemble randomly-ordered list of neighbors
    const list = [];

    // For each neighbors... (iteration)

    // See if that neighbor is out of bounds (outside of the grid)

    // If cell is already visited, continue to next neighbor

    // Remove the wall either vertical or horitonzal wall
    
    // Visit that next cell
    console.log("grid: ", grid);
}
