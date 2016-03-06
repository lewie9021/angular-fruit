import Angular from "angular";
import ProductView from "./view";
import ProductCtrl from "./controller";

export default Angular
    .module("app.product", [])
    .config(($stateProvider) => {
        $stateProvider
            .state("product", {
                url: "product/:id",
                template: ProductView,
                controller: "ProductCtrl"
            });
    })
    .controller("ProductCtrl", ProductCtrl)
    .name;
