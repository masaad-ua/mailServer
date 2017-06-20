app.directive('addUser', function(){
	return{
		restrict: 'E',
		scope:{
			adding: "&"
		},
		templateUrl: "app/user-cards/view/addUser.template.html"
	}
});


//'use strict';

//import addUserTemplate from './view/addUser.template.html';
//
//const addUser = function(){
//	return{
//		restrict: 'E',
//		scope:{
//			adding: "&"
//		},
//		template: addUserTemplate
//	}
//};
//
//export default addUser;

//var amount = function(a, b){
//	return a+b;
//};
//module.exports = amount;

//export let one = 1;
//export let two = 2;