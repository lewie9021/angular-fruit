import Angular from "angular";
import ProductsModel from "../../store/products";
import HomeView from "./view";
import HomeCtrl from "./controller";
import Product from "../product";

export default Angular
    .module("app.home", [])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state("home", {
                url: "/",
                template: HomeView,
                controller: "HomeCtrl"
            });
    })
    .controller("HomeCtrl", HomeCtrl)
    .service("ProductsModel", ProductsModel)
    .name;
