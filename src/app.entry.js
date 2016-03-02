import Angular from "angular";
import UIRouter from "angular-ui-router";
import UIBootstrap from "angular-ui-bootstrap";
import Templates from "./templates";
import Home from "./screens/home";
import Basket from "./screens/basket";
import Product from "./screens/product";

import "bootstrap/dist/css/bootstrap.css";
import "./theme.scss";

Angular.module("main", [UIRouter, UIBootstrap, Home, Basket, Product])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                template: Templates.home,
                controller: "HomeCtrl"
            })
            .state("basket", {
                url: "/basket",
                template: Templates.basket,
                controller: "BasketCtrl"
            })
            .state("product", {
                url: "/product/:id",
                template: Templates.product,
                controller: "ProductCtrl"
            });
    })
    .controller("MainCtrl", function($scope, BasketModel) {
        const total = Object.keys(BasketModel)
                  .reduce((total, key) => total + BasketModel[key], 0);

        $scope.total = total;
    });
