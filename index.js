const { 
    Engine, 
    Render, 
    Runner, 
    World, 
    Bodies 
} = Matter;

const engine = Engine.create();
const { world } = engine;

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
const grid = Array(3)
    .fill(null)
    .map(() => Array(3).fill(false));

console.log("grid: ", grid);