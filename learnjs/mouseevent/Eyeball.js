/**
 * Created by plter on 6/18/16.
 */

(function () {

    function Eyeball() {

        this._GLOBAL_ORIGIN_LEFT = -1;
        this._GLOBAL_ORIGIN_TOP = -1;
        this._ORIGIN_LEFT = 7;
        this._ORIGIN_TOP = 7;
        this._R = 5;

        this._eb = document.createElement("div");
        this._eb.className = "eyeball";

        this._eb.style.left = this._ORIGIN_LEFT + "px";
        this._eb.style.top = this._ORIGIN_TOP + "px";

        document.addEventListener("mousemove", document_mouseMoveHandler.bind(this));
    }

    Object.defineProperty(Eyeball.prototype, "eyeball", {
        get: function () {
            return this._eb;
        }
    });

    function document_mouseMoveHandler(event) {
        if (this._GLOBAL_ORIGIN_LEFT == -1 && this._GLOBAL_ORIGIN_TOP == -1) {
            var rect = this._eb.getBoundingClientRect();
            this._GLOBAL_ORIGIN_LEFT = rect.left;
            this._GLOBAL_ORIGIN_TOP = rect.top;
        }

        var dx = event.clientX - this._GLOBAL_ORIGIN_LEFT;
        var dy = event.clientY - this._GLOBAL_ORIGIN_TOP;

        var angle = Math.atan(dy / dx);

        var rx = 1;
        var ry = 1;

        if (dx < 0) {
            rx = -1;
            ry = -1;
        }


        this._eb.style.left = (this._ORIGIN_LEFT + Math.cos(angle) * this._R * rx) + "px";
        this._eb.style.top = (this._ORIGIN_LEFT + Math.sin(angle) * this._R * ry) + "px";
    }

    window.Eyeball = Eyeball;
})();