var app = angular.module("mailPost", ["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider ){
	$stateProvider
		.state('login',{
				url: '/login',
				template: '<login-page></login-page>'
			})
		.state('mail',{
				url: '/mail',
				template: '<mail-page class="mail-container"></mail-page>',
				resolve:{
					logins: function( $state, $q,usersData){
						console.log(usersData);
						var deferred = $q.defer();
						if(usersData.check() ){
							deferred.resolve();
						}else{
							alert('Your password or login is wrong');
							deferred.reject();
						}
						return deferred.promise;

					}
				}
			});

	$urlRouterProvider.otherwise('login');


});