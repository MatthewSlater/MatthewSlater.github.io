var Roof = (function () {
    function Roof() {}

    Roof.prototype.draw = function (pContext) {
        var mainContext, r, g, b;

        mainContext = pContext;

        mainContext.beginPath();
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        mainContext.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
        mainContext.moveTo(100, 0);
        mainContext.lineTo(200, 100);
        mainContext.lineTo(200, 200);
        mainContext.lineTo(0, 200);
        mainContext.lineTo(0, 100);
        mainContext.lineTo(100, 0);
        mainContext.fill();
        mainContext.stroke();
    };

    return Roof;
}());