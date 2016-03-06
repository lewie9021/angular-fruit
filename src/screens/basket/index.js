import Angular from "angular";
import BasketModel from "../../store/basket";
import BasketView from "./view";
import BasketCtrl from "./controller";

export default Angular
    .module("basket", [])
    .config(($stateProvider) => {
        $stateProvider
            .state("basket", {
                url: "/basket",
                template: BasketView,
                controller: "BasketCtrl"
            });
    })
    .service("BasketModel", BasketModel)
    .controller("BasketCtrl", BasketCtrl)
    .name;
