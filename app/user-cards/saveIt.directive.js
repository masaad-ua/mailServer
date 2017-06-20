
app.directive('saveIt', function(){
	return{
		restrict: 'E',
		scope: {},
		templateUrl: "app/user-cards/view/saveIt.template.html",
		bindToController: true,
		controller: function(){
			this.saveIt = function(){
				console.log('a');
			}
		},
		controllerAs:"es"
	}
});
