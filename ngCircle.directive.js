(function () {

    angular
        .module('ngCircleModule', [])
        .directive('stepIndicator', stepIndicator);

    stepIndicator.$inject = [];


    function stepIndicator() {

        return {
            restrict: 'E',
            templateUrl: './ngCircle.directive.view.html',
            scope: {
                step: '=',
                totalsteps: '='
            },
            link: link
        };

        function link($scope, $element, $attrs) {

            $scope.circles = [];
            $scope.emptycircle = [];

            $scope.circles.length = $scope.totalsteps - $scope.step;
            $scope.emptycircle.length = $scope.step;

            console.log('circles');
            console.log($scope.circles.length);
            console.log('emptycircle');
            console.log($scope.emptycircle.length);


        }
    }

})();
