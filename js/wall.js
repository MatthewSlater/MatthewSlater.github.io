var Wall = (function () {
    function Wall() {}

    Wall.prototype.draw = function (pContext) {

        pContext.beginPath();
        pContext.moveTo(0, 100);
        pContext.lineTo(200, 100);
        pContext.lineTo(200, 200);
        pContext.lineTo(125, 200);
        pContext.lineTo(125, 125);
        pContext.lineTo(75, 125);
        pContext.lineTo(75, 200);
        pContext.lineTo(0, 200);
        pContext.lineTo(0, 100);
        pContext.fill();
        pContext.stroke();
    };

    return Wall;
}());