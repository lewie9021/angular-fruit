import Angular from "angular";
import ProductView from "./view";
import ProductCtrl from "./controller";
import Basket from "../basket";

export default Angular
    .module("app.product", [Basket])
    .config(($stateProvider) => {
        $stateProvider
            .state("product", {
                url: "/product/:id",
                template: ProductView,
                controller: "ProductCtrl"
            });
    })
    .controller("ProductCtrl", ProductCtrl)
    .name;
