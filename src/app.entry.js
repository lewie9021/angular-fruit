import Angular from "angular";
import UIRouter from "angular-ui-router";
import Templates from "./templates";
import Home from "./screens/home";
import "./theme.scss";

Angular.module("main", [UIRouter, Home])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise("");

        $stateProvider
            .state("home", {
                url: "/",
                template: Templates.home,
                controller: "HomeCtrl"
            });
    });
