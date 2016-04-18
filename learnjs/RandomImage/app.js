/**
 * Created by plter on 4/18/16.
 */

(function () {
    function App() {
        return {
            context: null, imgData: null,

            appInit: function () {
                var canvas = document.createElement("canvas");
                canvas.width = 400;
                canvas.height = 300;
                document.body.appendChild(canvas);
                this.context = canvas.getContext("2d");

                this.imgData = this.context.createImageData(400, 300);

                this.render();
            },

            render: function () {
                this.fillRandom();
                requestAnimationFrame(this.render.bind(this));
            },

            fillRandom: function () {
                var colorValue;

                for (var i = 0; i < this.imgData.data.length; i += 4) {
                    colorValue = Math.floor(256 * Math.random());
                    this.imgData.data[i] = colorValue;
                    this.imgData.data[i + 1] = colorValue;
                    this.imgData.data[i + 2] = colorValue;
                    this.imgData.data[i + 3] = 255;
                }

                this.context.putImageData(this.imgData, 0, 0);
            }
        };
    }

    App().appInit();
}());