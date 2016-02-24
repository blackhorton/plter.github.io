///<reference path="../lib/three.d.ts"/>
/**
 * Created by plter on 2/4/16.
 */

namespace plter {

    export class Constants {
        static WIDTH = 550;
        static HEIGHT = 400;
    }

    export class TextMesh extends THREE.Mesh{
        private geometry_;
        private material_;

        constructor() {

            super(this.geometry_, this.material_);
        }
    }

    export class Main {

        private scene:THREE.Scene;
        private camera:THREE.PerspectiveCamera;
        private renderer:THREE.WebGLRenderer;

        constructor() {

            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(45, Constants.WIDTH / Constants.HEIGHT, 0.1, 1000);
            this.camera.position.z = 5;
            this.renderer = new THREE.WebGLRenderer();

            this.render();
        }

        private render() {
            requestAnimationFrame(this.render.bind(this));

            this.renderer.render(this.scene, this.camera);
        }
    }
}

new plter.Main();