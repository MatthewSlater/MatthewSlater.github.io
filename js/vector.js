var Vector = (function () {

    function Vector(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }

    Vector.prototype.setX = function (pX) {
        this.mX = pX;
    };

    Vector.prototype.getX = function () {
        return this.mX;
    };

    Vector.prototype.setY = function (pY) {
        this.mY = pY;
    };

    Vector.prototype.getY = function () {
        return this.mY;
    };

    Vector.prototype.setZ = function (pZ) {
        this.mZ = pZ;
    };

    Vector.prototype.getZ = function () {
        return this.mZ;
    };

    Vector.prototype.add = function (pVector) {
        var resultX, resultY, resultZ;

        resultX = this.mX + pVector.getX();
        resultY = this.mY + pVector.getY();
        resultZ = this.mZ + pVector.getZ();

        return new Vector(resultX, resultY, resultZ);
    };

    Vector.prototype.subtract = function (pVector) {
        var resultX, resultY, resultZ;

        resultX = this.mX - pVector.getX();
        resultY = this.mY - pVector.getY();
        resultZ = this.mZ - pVector.getZ();

        return new Vector(resultX, resultY, resultZ);
    };

    Vector.prototype.multiply = function (pScaleFactor) {
        var resultX, resultY, resultZ;

        resultX = this.mX * pScaleFactor;
        resultY = this.mY * pScaleFactor;
        resultZ = this.mZ * pScaleFactor;

        return new Vector(resultX, resultY, resultZ);
    };

    Vector.prototype.divide = function (pScaleFactor) {
        var resultX, resultY, resultZ;

        resultX = this.mX / pScaleFactor;
        resultY = this.mY / pScaleFactor;
        resultZ = this.mZ / pScaleFactor;

        return new Vector(resultX, resultY, resultZ);
    };

    Vector.prototype.magnitude = function () {
        return Math.sqrt(Math.pow(this.mX, 2) + Math.pow(this.mY, 2));
    };

    Vector.prototype.normalise = function () {
        return this.divide(this.magnitude());
    };

    Vector.prototype.limitTo = function (pMaxMagnitude) {
        var resultX, resultY, resultZ, unitVector;

        if (this.magnitude() > pMaxMagnitude) {
            unitVector = this.normalise();
            resultX = unitVector.getX() * pMaxMagnitude;
            resultY = unitVector.getY() * pMaxMagnitude;
            resultZ = unitVector.getZ() * pMaxMagnitude;

            return new Vector(resultX, resultY, resultZ);
        }

        return new Vector(this.mX, this.mY, this.mz);
    };

    Vector.prototype.dotProduct = function (pVector) {
        return this.getX() * pVector.getX() + this.getY() * pVector.getY()
            + this.getZ() * pVector.getZ();
    };

    Vector.prototype.angleBetween = function (pVector) {
        return Math.acos(this.magnitude() / pVector.magnitude());
    };

    Vector.prototype.interpolate = function (pVector, pInterpole) {
        var resultX, resultY;

        resultX = this.mX + (pVector.mX - this.mX) * pInterpole;
        resultY = this.mY + (pVector.mY - this.mY) * pInterpole;

        return new Vector(resultX, resultY, this.mZ);
    };

    Vector.prototype.rotate = function (pRotateAngle) {
        var x, y;

        x = Math.cos(pRotateAngle) * this.mX - Math.sin(pRotateAngle) * this.mY;
        y = Math.sin(pRotateAngle) * this.mX + Math.cos(pRotateAngle) * this.mY;

        return new Vector(x, y, this.mZ);
    };

    Vector.prototype.angleBetween = function (pVector) {
        return Math.acos(this.normalise().dotProduct(pVector.normalise()));
    };

    return Vector;
}());