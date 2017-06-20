app.directive('editUser',function(){
	return{
		restrict: 'E',
		scope: {
			editing: "&",
			listOfUser: '=list',
			save: '&',
			showEditing: '=showEditing',
			delete: '&'
		},
		templateUrl: "app/user-cards/view/editingUser.template.html"
	}
});

