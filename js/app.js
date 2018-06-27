angular.module('employeeApp', ['ui.router', 'ngResource', 'employeeApp.controllers', 'employeeApp.services']);

angular.module('employeeApp').config(function($stateProvider, $httpProvider) {
    $stateProvider.state('employees', {
        url:'/employees',
        templateUrl:'partials/employees.html',
        controller:'EmployeeListController'
    }).state('viewEmployee', {
       url:'/employees/:id/view',
       templateUrl:'partials/employee-view.html',
       controller:'EmployeeViewController'
    });
    $httpProvider.defaults.headers.common.Authorization = 'Basic ' + btoa('corning:corning5678');
}).run(function($state) {
   $state.go('employees');
});