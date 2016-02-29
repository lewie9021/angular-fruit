import Angular from "angular";
import BasketCtrl from "./controller";
import BasketModel from "./model";

export default Angular
    .module("basket", [])
    .controller("BasketCtrl", BasketCtrl)
    .service("BasketModel", BasketModel)
    .name;
