/*global window,alert,document,Vector,console,House,
Matrix,SceneNode,Wall,Door,Roof,Window,requestAnimationFrame*/

function onLoad() {
    var mainCanvas, mainContext, houses, rootScene, lastTime, i;

    houses = [];

    function initialiseCanvasContext() {
        mainCanvas = document.getElementById('mainCanvas');
        if (!mainCanvas) {
            // make a message box pop up with the error.
            alert('Error: I cannot find the canvas element!');
            return;
        }

        mainContext = mainCanvas.getContext('2d');
        if (!mainContext) {
            alert('Error: failed to get context!');
            return;
        }

        rootScene = new SceneNode(Matrix.createIdentity());

        for (i = 0; i < 20; i += 1) {
            houses.push(new House(new Vector(50, 50)));
            houses[i].setScale((i / 2) / 20);
            houses[i].setRotation(i);

            rootScene.pushChild(houses[i]);
        }
    }

    function update(deltaTime) {
        rootScene.update(deltaTime);
    }

    function draw(pDeltaTime) {
        mainContext.fillStyle = "#0000ff";
        rootScene.draw(mainContext,
            Matrix.createTranslation(
                new Vector(mainCanvas.width / 2, mainCanvas.height / 2)
            ));

        Matrix.createScale(
            new Vector(1 + pDeltaTime, 1 + pDeltaTime)
        ).transform(mainContext);
    }

    function gameLoop() {
        var deltaTime, thisTime;
        thisTime = Date.now();
        deltaTime = thisTime - lastTime;
        deltaTime /= 1000;
        update(deltaTime);
        draw(deltaTime);
        lastTime = Date.now();
        requestAnimationFrame(gameLoop);
    }

    initialiseCanvasContext();
    lastTime = Date.now();
    gameLoop();
}

window.addEventListener('load', onLoad, false);