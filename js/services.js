angular.module('employeeApp.services', []).factory('Employee', function($resource) {
    return $resource('http://corning-identity-service-sandbox-v1.cloudhub.io/api/employees/:id', {id: '@ID'}, {
        query: {
            method: 'GET',
            isArray: true
        },
        get: {
            method: 'GET'
        }
    });
}).service('popupService', function($window) {
    this.showPopup = function(message){
        return $window.confirm(message);
    }
});