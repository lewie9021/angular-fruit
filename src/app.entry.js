import Angular from "angular";
import LocalStorage from "angular-local-storage";
import UIRouter from "angular-ui-router";
import UIBootstrap from "angular-ui-bootstrap";
import Home from "./screens/home";
import Product from "./screens/product";
import Basket from "./screens/basket";

import "bootstrap/dist/css/bootstrap.css";
import "./theme.scss";

const dependencies = [
    LocalStorage,
    UIRouter,
    UIBootstrap,
    Home,
    Product,
    Basket
];

Angular.module("app", dependencies)
    .config(($urlRouterProvider) => {
        // TODO: Figure out how to actually get this to work without
        // declaring all my routes here.
        // $urlRouterProvider.otherwise("/");
    })
    .controller("NavbarCtrl", ($scope, BasketModel) => {
        // Expose basket total to scope.
        $scope.total = BasketModel.total;
    });
