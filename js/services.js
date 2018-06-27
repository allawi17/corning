angular.module('employeeApp.services', []).factory('Employee', function($resource) {
    return $resource('http://corning-identity-service-sandbox-v1.cloudhub.io/api/employees/:id', {id: '@ID'}, {
        query: {
            method: 'GET',
            isArray: true,
            headers: { 
               'client_id': 'aac474269c204c25a6ffc7a73cbdaefc',
               'client_secret': 'e91b356f0ed54Eb48E272ce91916536e'
            }
        },
        get: {
            method: 'GET',
            headers: { 
               'client_id': 'aac474269c204c25a6ffc7a73cbdaefc',
               'client_secret': 'e91b356f0ed54Eb48E272ce91916536e'
            }
        }
    });
}).service('popupService', function($window) {
    this.showPopup = function(message){
        return $window.confirm(message);
    }
});