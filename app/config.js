app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl: "Templates/home.html",
            controller: "accountController"
        })
        .when("/homepage", {
            templateUrl: "Templates/homepage.html",
            controller: "accountController"
        })
        .when("/about", {
            templateUrl: "Templates/about.html",
            controller: "accountController"
        })
        .when("/profile", {
            templateUrl: "Templates/profile.html",
            controller: "accountController"
        }).otherwise({
            redirectTo: "/"
        });

}])