///<reference path="../lib/three.d.ts"/>
/**
 * Created by plter on 2/4/16.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var plter;
(function (plter) {
    var Constants = (function () {
        function Constants() {
        }
        Constants.WIDTH = 550;
        Constants.HEIGHT = 400;
        return Constants;
    })();
    plter.Constants = Constants;
    var TextMesh = (function (_super) {
        __extends(TextMesh, _super);
        function TextMesh() {
            _super.call(this, this.geometry_, this.material_);
        }
        return TextMesh;
    })(THREE.Mesh);
    plter.TextMesh = TextMesh;
    var Main = (function () {
        function Main() {
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(45, Constants.WIDTH / Constants.HEIGHT, 0.1, 1000);
            this.camera.position.z = 5;
            this.renderer = new THREE.WebGLRenderer();
            this.render();
        }
        Main.prototype.render = function () {
            requestAnimationFrame(this.render.bind(this));
            this.renderer.render(this.scene, this.camera);
        };
        return Main;
    })();
    plter.Main = Main;
})(plter || (plter = {}));
new plter.Main();
//# sourceMappingURL=Main.js.map