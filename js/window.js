var Window = (function () {
    function Window() {}

    Window.prototype.draw = function (pContext) {
        var mainContext = pContext;

        mainContext.fillStyle = "#262dff";
        mainContext.lineWidth = 5;
        mainContext.beginPath();
        mainContext.moveTo(0, 25);
        mainContext.lineTo(0, 0);
        mainContext.lineTo(15, 0);
        mainContext.lineTo(15, 50);
        mainContext.lineTo(0, 50);
        mainContext.lineTo(0, 25);
        mainContext.lineTo(30, 25);
        mainContext.lineTo(30, 50);
        mainContext.lineTo(15, 50);
        mainContext.lineTo(30, 50);
        mainContext.lineTo(30, 0);
        mainContext.lineTo(15, 0);
        mainContext.fill();
        mainContext.stroke();
    };

    return Window;
}());