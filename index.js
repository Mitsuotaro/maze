const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const engine = Engine.create();
const { world } = engine;

const width = 800;
const height = 600;

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: width,
        height: height,
        wireframes: false,
    },
});

Render.run(render);
Runner.run(Runner.create(), engine);

World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
}));

//WALLS
const walls = [
    Bodies.rectangle(400, 0, 800, 40, { isStatic: true}), // TOP
    Bodies.rectangle(0, 400, 40, 800, { isStatic: true}), // LEFT
    Bodies.rectangle(800, 400, 40, 800, { isStatic: true}), // RIGHT
    Bodies.rectangle(0, 600, 1600, 40, { isStatic: true}), // BOTTOM
];
World.add(world, walls);

//RANDOM SHAPES
for(let i = 0; i < 140; i++){
    let positionX = Math.random() * width;
    let positionY = Math.random() * height;
    let randHeight = Math.random() * 100;
    let randWidth = Math.random() * 100;
    
    World.add(world, Bodies.rectangle(positionX, positionY, randHeight, randWidth));
}