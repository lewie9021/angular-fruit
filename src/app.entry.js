import Angular from "angular";
import UIRouter from "angular-ui-router";
import HomeController from "./screens/home/controller";
import "./theme.scss";

Angular.module("main", [UIRouter])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("");

        $stateProvider
            .state("home", {
                url: "/",
                template: require("./screens/home/view.html"),
                controller: HomeController
            });
    });
