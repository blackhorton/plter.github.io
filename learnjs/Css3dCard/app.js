/**
 * Created by plter on 4/20/16.
 */


(function () {
    function App() {

        this.appInit = function () {

            $(".card_container").hover(function (e) {
                $(this).find(".card_a").toggleClass("card_a_hovered");
                $(this).find(".card_b").toggleClass("card_b_hovered");
            });
        };

        this.appInit();
    }

    new App();
}());