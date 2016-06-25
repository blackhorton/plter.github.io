/**
 * Created by plter on 6/25/16.
 */


(function () {

    function init() {

        var request = indexedDB.open("MyDb", 5);
        request.onerror = function (event) {
            console.error(event)
        };
        request.onsuccess = function (event) {
            var db = request.result;

            console.log(db);
        };
        request.onupgradeneeded = function (event) {

            var os = event.target.result.createObjectStore("MyTable3");
            os.createIndex("my_name", "ucai");
        }

    }

    init();
})();