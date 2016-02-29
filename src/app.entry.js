import Angular from "angular";
import UIRouter from "angular-ui-router";
import Templates from "./templates";
import Home from "./screens/home";
import Basket from "./screens/basket";
import "./theme.scss";

Angular.module("main", [UIRouter, Home, Basket])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise("");

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
            });
    });
