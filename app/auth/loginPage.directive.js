app.directive('loginPage', function($state){
	return{
		rrestrict: 'E',
		scope:{},
		templateUrl: "app/auth/view/login.template.html",

		link: function(scope){
			scope.log = {
				user: '',
				password:''
			};

			scope.callectDate = function(){
				localStorage.removeItem('loginByUser');
				localStorage.setItem('loginByUser',JSON.stringify(scope.log));
				$state.go('mail');
			}
		}
	}
});
