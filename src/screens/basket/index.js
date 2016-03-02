import Angular from "angular";
import BasketCtrl from "./controller";
import BasketModel from "../../store/basket";

export default Angular
    .module("basket", [])
    .controller("BasketCtrl", BasketCtrl)
    .service("BasketModel", BasketModel)
    .name;
