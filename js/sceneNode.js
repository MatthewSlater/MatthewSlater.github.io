var SceneNode = (function () {
    function SceneNode(pMatrix) {
        this.setMatrix(pMatrix);
        this.mChildren = [];
    }

    SceneNode.prototype.getMatrix = function () {
        return this.mMatrix;
    };

    SceneNode.prototype.setMatrix = function (pMatrix) {
        this.mMatrix = pMatrix;
    };

    SceneNode.prototype.pushChild = function (pChild) {
        this.mChildren.push(pChild);
    };

    SceneNode.prototype.pullChild = function (pIndex) {
        return this.mChildren[pIndex];
    };

    SceneNode.prototype.getLength = function () {
        return this.mChildren.length;
    };

    SceneNode.prototype.draw = function (pContext, pTransformMatrix) {
        var transformMatrix, i;

        transformMatrix = pTransformMatrix.multiply(this.getMatrix());
        transformMatrix.setTransform(pContext);
        pContext.lineWidth = 5;
        pContext.fillStyle = "#ffffff";

        for (i = 0; i < this.getLength(); i += 1) {
            this.pullChild(i).draw(pContext, transformMatrix);
            pContext.fillStyle = "#ffffff";
        }

        transformMatrix.setTransform(pContext);
    };

    SceneNode.prototype.update = function (deltaTime) {
        var i;

        for (i = 0; i < this.getLength(); i += 1) {
            if (typeof this.pullChild(i).update === "function") {
                this.pullChild(i).update(deltaTime);
            }
        }
    };

    return SceneNode;
}());