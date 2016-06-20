/**
 * Created by plter on 6/20/16.
 */


(function () {


    function Main() {
        this._containerB = document.getElementById("b");
        this._p = document.getElementById("p");
        this._currentDragged = null;

        this._p.addEventListener("dragstart", function (event) {
            this._currentDragged = this._p;
        }.bind(this));

        this._containerB.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        this._containerB.addEventListener("drop", function (event) {
            if (this._currentDragged) {
                this._containerB.appendChild(this._p);
            }
        }.bind(this));
    }

    new Main();
})();