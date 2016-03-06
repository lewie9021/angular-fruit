import Angular from "angular";
import BasketModel from "../../store/basket";
import BasketView from "./view";
import BasketCtrl from "./controller";

export default Angular
    .module("app.basket", [])
    .config(($stateProvider) => {
        $stateProvider
            .state("basket", {
                url: "/basket",
                template: BasketView,
                controller: "BasketCtrl"
            });
    })
    .factory("BasketModel", BasketModel)
    .controller("BasketCtrl", BasketCtrl)
    .name;
