/*global Vector,Matrix,Roof,Wall,Door,Window,SceneNode*/

var House = (function () {

    function House(pPosition) {
        var windowMatrix, node;
        this.setPosition(pPosition);
        this.mSceneGraph = new SceneNode(Matrix.createTranslation(pPosition));

        this.mSceneGraph.pushChild(new Roof());
        this.mSceneGraph.pushChild(new Wall());
        this.mSceneGraph.pushChild(new Door());

        windowMatrix = Matrix.createTranslation(new Vector(25, 125));
        node = new SceneNode(windowMatrix);
        node.pushChild(new Window());
        this.mSceneGraph.pushChild(node);

        windowMatrix = Matrix.createTranslation(new Vector(145, 125));
        node = new SceneNode(windowMatrix);
        node.pushChild(new Window());
        this.mSceneGraph.pushChild(node);

        this.mSceneGraph.setMatrix(
            this.mSceneGraph.getMatrix().multiply(Matrix.createRotation(Math.PI))
        );

        this.mRotation = 0;
        this.mScale = 1;
    }

    House.prototype.setPosition = function (pPosition) {
        this.mPosition = pPosition;
    };

    House.prototype.getPosition = function () {
        return this.mPosition;
    };

    House.prototype.setRotation = function (pRotation) {
        this.mRotation = pRotation;
    };

    House.prototype.getRotation = function () {
        return this.mRotation;
    };

    House.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };

    House.prototype.getScale = function () {
        return this.mScale;
    };

    House.prototype.draw = function (pContext, pMatrix) {
        this.mSceneGraph.draw(pContext, pMatrix);
    };

    House.prototype.update = function (deltaTime) {
        var translateMatrix;

        this.mRotation += deltaTime * 17; // Speed of cycles
        this.mScale += deltaTime / 8; // Speed of growth
        this.mPosition = (new Vector(this.mRotation * this.mScale, 0)
            .multiply(deltaTime)).add(this.getPosition());

        // Rotate
        translateMatrix = Matrix.createRotation(this.mRotation);
        // Scale
        translateMatrix = translateMatrix.multiply(
            Matrix.createScale(new Vector(this.mScale, this.mScale))
        );
        //Translate
        translateMatrix = translateMatrix.multiply(
            Matrix.createTranslation(this.getPosition())
        );

        // When a house leaves the screen make it draw from the bottom
        if (this.mPosition.getX() > 400) {
            this.setPosition(new Vector(0, 0));
            this.setRotation(0);
            this.setScale(0);
        }

        this.mSceneGraph.setMatrix(translateMatrix); // Set changes
    };

    return House;
}());