/**
 * Created by plter on 6/7/16.
 */
var Main = (function () {
    function Main() {
        this.WIDTH = 550;
        this.HEIGHT = 400;
        this.colorH = 0;
        this.msgContainer = document.createElement('div');
        document.body.appendChild(this.msgContainer);
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.WIDTH;
        this.canvas.height = this.HEIGHT;
        document.body.appendChild(this.canvas);
        this.context2d = this.canvas.getContext('2d');
        this.render();
    }
    Main.prototype.formatToRadix16 = function (num) {
        return num < 16 ? "0" + num.toString(16) : num.toString(16);
    };
    Main.prototype.makeColorByH = function (h) {
        h %= 360;
        var r = 0;
        var g = 0;
        var b = 0;
        if (h <= 60) {
            r = 255;
            g = 255 * h / 60;
        }
        else if (h <= 120) {
            r = 255 * (120 - h) / 60;
            g = 255;
        }
        else if (h <= 180) {
            g = 255;
            b = 255 * (h - 120) / 60;
        }
        else if (h <= 240) {
            g = 255 * (240 - h) / 60;
            b = 255;
        }
        else if (h <= 300) {
            b = 255;
            r = 255 * (h - 240) / 60;
        }
        else {
            b = 255 * (360 - h) / 60;
            r = 255;
        }
        r = Math.round(r);
        g = Math.round(g);
        b = Math.round(b);
        var color = "#" + this.formatToRadix16(r) + this.formatToRadix16(g) + this.formatToRadix16(b);
        console.log(color, Math.round(h));
        return color;
    };
    Main.prototype.render = function () {
        this.context2d.save();
        this.context2d.fillStyle = this.makeColorByH(this.colorH);
        this.context2d.fillRect(0, 0, this.WIDTH, this.HEIGHT);
        this.context2d.restore();
        this.colorH += 0.6;
        requestAnimationFrame(this.render.bind(this));
    };
    return Main;
}());
new Main();
//# sourceMappingURL=main.js.map