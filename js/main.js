/*global window,alert,document,Vector,console,House,
Matrix,SceneNode,Wall,Door,Roof,Window,requestAnimationFrame*/

function onLoad() {
    var mainCanvas, mainContext, rootScene, lastTime, i;

    function initialiseCanvasContext() {
        var house;

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

        for (i = 0; i < 10; i += 1) {
            house = new House(new Vector(0, 0));
            house.setScale(i / 80); // Starting point of the typhoon
            house.setRotation(i);

            rootScene.pushChild(house);
        }
    }

    function update(deltaTime) {
        rootScene.update(deltaTime);
    }

    function draw() {
        mainContext.fillStyle = "#0000ff";
        rootScene.draw(mainContext,
            Matrix.createTranslation(
                new Vector(mainCanvas.width / 2, mainCanvas.height / 2)
            ));
    }

    function gameLoop() {
        var deltaTime, thisTime;
        thisTime = Date.now();
        deltaTime = thisTime - lastTime;
        deltaTime /= 1000;
        update(deltaTime);
        draw();
        lastTime = Date.now();
        requestAnimationFrame(gameLoop);
    }

    initialiseCanvasContext();
    lastTime = Date.now();
    gameLoop();
}

window.addEventListener('load', onLoad, false);