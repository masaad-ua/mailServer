describe('myApp',function(){
	beforeEach(module('myApp'));

	/*******Простой сервис*******/
	describe('service',function(){
		it('should do sum', inject(function(calculate){
			expect(calculate.sum(3,4)).toBe(7);

		}));
	});
	/*******Контроллер*******/

	describe('controller', function() {
		var controller, calculate;

		beforeEach(inject(function (_calculate_, $controller) {
			calculate = _calculate_;
			spyOn(calculate, 'sum').and.returnValue(7);
			controller = $controller('mp', {calculate: calculate});

		}));

		it('should call calculate service', function () {
			controller.doCalculation(3, 4);
			expect(calculate.sum).toHaveBeenCalled();
		});

		it('should call calculate service', function () {
			controller.doCalculation(3, 4);
			expect(controller.result).toBe(7);
		});
	});

		/*******Сервисы который использует HTTP запросы******/


	describe('service with $http', function(){
		var userService,
			mockUsers = [{name: 'Bob'}],
			$httpBackend;

		beforeEach(inject(function(_userService_, _$httpBackend_ ){
			userService = _userService_;
			$httpBackend = _$httpBackend_;
			$httpBackend.whenGET('/users').respond(mockUsers);
			$httpBackend.whenGET('/users/1').respond(mockUsers[0])

		}));

		it('should get one user', function(done){
			userService.getOne(1).then(function(user){
				expect(user.name).toBe(mockUsers[0].name);
				done();
			});
			$httpBackend.flush()
		});

	});

	/*******Тестирование деректив*********/




});


