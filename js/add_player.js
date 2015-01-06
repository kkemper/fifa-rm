(function(){
	var app = angular.module('fifa', ['view_player', 'add_player']);

		app.controller('AddPlayerController', function(){
			this.addition = {};

			this.addRecord = function(person) {
				player.records.push(this.record);
			};
		});
})();