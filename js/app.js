angular.module('app', ['jtt_aping']);

angular.module('app')
    .controller('appController', function ($scope) {
        $scope.display = function () {
            $scope.templateUrl = 'template.html';
        };
    });