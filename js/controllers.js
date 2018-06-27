angular.module('employeeApp.controllers',[]).controller('EmployeeListController', function($scope, $state, popupService, $window, Employee) {
    $scope.employees = Employee.query();
}).controller('EmployeeViewController', function($scope, $stateParams, Employee) {
    $scope.employee = Employee.get({id: $stateParams.id});
});