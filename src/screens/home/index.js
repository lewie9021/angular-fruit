import Angular from "angular";
import HomeCtrl from "./controller";
import ProductsModel from "./products";

export default Angular
    .module("home", [])
    .controller("HomeCtrl", HomeCtrl)
    .service("ProductsModel", ProductsModel)
    .name;
