var  ListModule = angular.module('ListModule', ['ngSanitize', 'ngTouch']);

function ListController($scope, $http, $location, $sanitize){
	console.log(data)
	$scope.items = data.l;
	$scope.contentStatus = function(img){
		if(img){
			return 1;
		}else{
			return 2;
		}
	}
}

ListModule.filter('contentImg', function () {
    var text = function (text) {
        if (text) {
            return '<img src="http://www.8-bd.com/i/attachments/1/'+text+'"/>';
        } else {
            return '';
        }
    }
    return text;
});