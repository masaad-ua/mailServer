describe('mailPost', function(){
	beforeEach(module('mailPost'));
	/*******Простой сервис*******/
	describe('usersData',function(){
		var fromLocal = {user: 'user@mail.ru', password: 'admin'};
		var usersData;

		beforeEach(inject(function(_usersData_){
			usersData = _usersData_;
			//spyOn(usersData, 'fromLocal').and.returnValue(fromLocal);

		}));

		//
		//it('should return false or true',function(){
		//	usersData.check = function(){
		//
		//	};
		//
		//
		//});
	});




});
