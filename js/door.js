var Door = (function () {
    function Door() {}

    Door.prototype.draw = function (pContext) {
        var mainContext = pContext;

        mainContext.fillStyle = "yellow";
        mainContext.fillRect(77, 127, 46, 71);
    };

    return Door;
}());