var myApp = angular.module('myApp', []);
myApp.directive("contactInfo", function () {
    return {
        scope: {
            contactText: '@',
            hrefValue: '@',
            contactLogo: '@'
        },
        replace: true,
        templateUrl: 'templates/contact-info.html'
    };
});

myApp.controller('myCtlr', ['$scope', function ($scope) {
///i have a wide array of skills  
        $scope.skills = [
            'Python',
            'Django',
            'JavaScript',
            'Angular',
            'SQL',
            'Tableau',
            'Excel',
            'Photoshop',
            'InDesign'
        ]
    }]);

