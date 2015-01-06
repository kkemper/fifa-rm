(function(){
	var app = angular.module('view_player', []);

	app.controller('ViewPlayerController', ['$http', function($http) {
		var squad = this; 
		squad.people = [];
		$http.get('squad.json').success(function(data){
			squad.people = data;
		});
	  }]);	
})();