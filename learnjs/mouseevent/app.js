/**
 * Created by plter on 6/18/16.
 */

(function () {

    var leftEye, rightEye;

    function init() {

        leftEye = document.getElementById("left-eye");
        rightEye = document.getElementById("right-eye");

        leftEye.appendChild(new Eyeball().eyeball);
        rightEye.appendChild(new Eyeball().eyeball);
    }

    init();

})();