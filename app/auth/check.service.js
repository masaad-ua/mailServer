//var app = angular.module("mailPost", []);
app.service('usersData',function(){
		this.check = function(){
			var fromLocal = JSON.parse(localStorage.getItem('loginByUser'));
			return fromLocal.user === "user@mail.ru" && fromLocal.password === "admin"
		};
});