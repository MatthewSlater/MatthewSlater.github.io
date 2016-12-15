/*global Vector,alert*/

var Matrix = (function () {

    function Matrix(pA, pB, pC, pD, pE, pF, pG, pH, pI) {
        this.mArray = [];
        this.mArray.push([], [], []);

        this.mArray[0].push(pA, pB, pC);
        this.mArray[1].push(pD, pE, pF);
        this.mArray[2].push(pG, pH, pI);
    }

    Matrix.prototype.setElement = function (pElement, pX, pY) {
        this.mArray[pX][pY] = pElement;
    };

    Matrix.prototype.getElement = function (pX, pY) {
        return this.mArray[pX][pY];
    };

    Matrix.createIdentity = function () {
        return new Matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);
    };

    Matrix.createTranslation = function (pVec) {
        return new Matrix(1, 0, pVec.getX(), 0, 1, pVec.getY(), 0, 0, 1);
    };

    Matrix.createScale = function (pVec) {
        return new Matrix(pVec.getX(), 0, 0, 0, pVec.getY(), 0, 0, 0, 1);
    };

    Matrix.createRotation = function (pAngle) {
        return new Matrix(Math.cos(pAngle), -Math.sin(pAngle),
            0, Math.sin(pAngle), Math.cos(pAngle), 0, 0, 0, 1);
    };

    Matrix.prototype.multiply = function (pMatrix) {
        var resultMartix, i, j, n, rowLeft, columnRight, resultSpace;
        resultMartix = new Matrix(0, 0, 0, 0, 0, 0, 0, 0, 0);
        resultSpace = 0;

        for (i = 0; i < 3; i += 1) {
            rowLeft = [this.getElement(i, 0),
                this.getElement(i, 1), this.getElement(i, 2)];

            for (j = 0; j < 3; j += 1) {
                columnRight = [pMatrix.getElement(0, j),
                    pMatrix.getElement(1, j), pMatrix.getElement(2, j)];

                for (n = 0; n < 3; n += 1) {
                    resultSpace += rowLeft[n] * columnRight[n];
                }
                resultMartix.setElement(resultSpace, i, j);
                resultSpace = 0;
            }
        }

        return resultMartix;
    };

    Matrix.prototype.multiplyVector = function (pVector) {
        var resultVector;
        resultVector = new Vector(0, 0, 0);

        resultVector.setX(this.getElement(0, 0) * pVector.getX() +
            this.getElement(0, 1) * pVector.getY() +
            this.getElement(0, 2) * pVector.getZ());

        resultVector.setY(this.getElement(1, 0) * pVector.getX() +
            this.getElement(1, 1) * pVector.getY() +
            this.getElement(1, 2) * pVector.getZ());

        resultVector.setZ(this.getElement(2, 0) * pVector.getX() +
            this.getElement(2, 1) * pVector.getY() +
            this.getElement(2, 2) * pVector.getZ());

        return resultVector;
    };

    Matrix.prototype.setTransform = function (pContext) {
        pContext.setTransform(this.getElement(0, 0), this.getElement(1, 0),
            this.getElement(0, 1), this.getElement(1, 1), this.getElement(0, 2),
            this.getElement(1, 2));
    };

    Matrix.prototype.transform = function (pContext) {
        pContext.transform(this.getElement(0, 0), this.getElement(1, 0),
            this.getElement(0, 1), this.getElement(1, 1), this.getElement(0, 2),
            this.getElement(1, 2));
    };

    return Matrix;
}());