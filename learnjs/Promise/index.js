/**
 * Created by plter on 6/19/16.
 */
(function () {

    function Main() {
        Promise.all([new Promise(function (suc, fail) {
            setTimeout(suc, 1000, 300);
        }), new Promise(function (suc, fail) {
            setTimeout(suc, 1000, 400);
        })]).then(function (result) {
            console.log(result);
        }).catch(function (reason) {
            console.log(reason);
        });
    }

    new Main();
})();