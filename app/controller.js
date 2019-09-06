app.controller("accountController", ["$scope", "$location", "$window", function($scope, $location, $window){
    $scope.check = false;
    $scope.userLogin = false;
    $scope.showPage = false;
    $scope.ifLogin = localStorage.getItem("ifLogin");
    
    $scope.styles = {
        "margin-top": "10px"
    }

    if(JSON.parse($scope.ifLogin)) {
        $scope.logs = "Logout";
        $scope.dash = "Dashboard"
        $scope.prof = "Profile"
    } else {
        $scope.logs = ""
        $scope.dash = ""
        $scope.prof = ""
    }

    $scope.users = {};
    
    $scope.signup = function(){
        if($scope.users.password !== $scope.users.confirmpassword) {
            alert("Password does not match")
        } else {
            localStorage.setItem("firstname", $scope.users.firstname);
            localStorage.setItem("lastname", $scope.users.lastname);
            localStorage.setItem("email", $scope.users.email);
            localStorage.setItem("password", $scope.users.password);
            alert("Account created succesfully");
            localStorage.setItem("ifLogin", true);
            $location.path('/homepage');
            $window.location.reload(true);
        }
    }
    
    $scope.signinOption = {
        "cursor": "pointer"
    }
    $scope.signin = function(){
        let localEmail = localStorage.getItem("email");
        let localPassword = localStorage.getItem("password");
        console.log(localEmail);
        console.log(localPassword);
        console.log($scope.users.email);
        console.log($scope.users.password);
        if(localEmail === $scope.users.email && localPassword === $scope.users.password) {
            alert("Login Succesful")
            localStorage.setItem("ifLogin", true);
            $location.path('/homepage');
            $window.location.reload(true);
        } else {
            alert("Incorrect login details, try again");
        }
    }


    $scope.haveAccount = function(){
        $scope.check = true;
    }

    $scope.dontHaveAccount = function(){
        $scope.check = false;
    }
    
    $scope.welcomePage = {
        "margin-top": "50px"
    }

    $scope.logout = function () {
        localStorage.setItem("ifLogin", false);
        alert("Good Day");
        $location.path('/');
        $window.location.reload(true);
    }

    
}]);

app.controller("homepageController", ["$scope", function($scope){
    $scope.username = localStorage.getItem("firstname");
    
    $scope.pictures = [
        {
            name: "Will Smith",
            pictures: "../content/img/will.jpg",
            about: "The Funny Guy"
        },
        {
            name: "Brad Pitt",
            pictures: "../content/img/pit.jpg",
            about: "Serious Guy"
        },
        {
            name: "Iron Man",
            pictures: "../content/img/iron.jpg",
            about: "Technologist"
        },
        {
            name: "Logan",
            pictures: "../content/img/logan.jpg",
            about: "Adamantium"
        },
        {
            name: "Superman",
            pictures: "../content/img/superman.jpg",
            about: "The Strongest"
        },
        {
            name: "Thor",
            pictures: "../content/img/thor.jpg",
            about: "The Strongest Avenger"
        }
    ]

}])