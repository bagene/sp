/**
 * Created by Michael on 9/29/2014.
 */

DMC.factory('dataFetcher', ['$resource',
    function($resource){
        return $resource('data/json/:fileName.json', {},{
            get: {method: 'GET', isArray: true}
        });
    }
]);

DMC.service('dataSubmit', ['$resource',
    function($resource){
        return $resource(':file', {},{
            post: {method: 'POST', isArray: false}
        });
    }
]);

//this checks the variable if its defined and not empty and not null
DMC.factory('isDefined',[
    function(a){
        return function(a){
            return a !== null & (angular.isDefined(a) ?  a.toString().length > 0 : false);
        }
    }
]);