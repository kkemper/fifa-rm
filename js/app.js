(function(){
	var app = angular.module('add_player', []);

	app.controller('PlayerController', function() {
		this.people = players;
	});

	var players = [
		{
			fullname: 'Diego Costa',
			shortname: 'Diego Costa',
			club: 'Chelsea',
			birthdate: '12/31/1985',
		},
		{
			fullname: 'Eden Hazard',
			shortname: 'Eden Hazard',
			club: 'Chelsea',
			birthdate: '1/1/1988',
		},
		{
			fullname: 'Thibault Courtois',
			shortname: 'Thibault Courtois',
			club: 'Chelsea',
			birthdate: '1/1/1988',
		}
	]




})();