
/*********Сервис $http************/
//var app = angular.module('mailPost', []);



app.service('serviceMail',function($http){
		this.letters = function(){
			return $http({
				method: 'GET',
				url: 'data.json'
			})
		};
});



//app.service('calculate', function(){
//	this.sum = function(a, b){
//		return a + b;
//	}
//});
//
//
//app.controller('mp', function(calculate){
//		"use strict";
//
//		this.doCalculation = function(a, b){
//			this.result = calculate.sum(a, b);
//		}
//
//	});
//
//app.service('userService', function($http){
//	"use strict";
//
//	this.getOne = function(id) {
//		return $http.get('/users/' + id).then(function(response) {
//			return response.data;
//		});
//	};
//
//	this.getAll = function() {
//		return $http.get('/users').then(function(response) {
//			return response.data;
//		});
//	};
//
//});


/*********Controller************/
app.controller('mailController', function( serviceMail, $http ,$scope, $element, $timeout){
	"use strict";

	this.doCalculation = function(a, b){
		this.result = calculate.sum(a, b);
	};


	var vm = this;
	this.showList = true;
	this.listButtons = [
		{
			name: "INBOX",
			disabled: true
		},
		{
			name: "READ",
			disabled: true
		},
		{
			name: "OUTBOX",
			disabled: true
		},
		{
			name: "TRASH",
			disabled: true
		}
	];

	this.letter = 	[{
			from: "Jastin Biber",
			email: "a@mail.ru",
			id: 101,
			read: false,
			inbox: true,
			outbox: false,
			trash: false,
			body: "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
		},
		{
			from: "Mickle Jackson",
			email: "b@mail.ru",
			id: 102,
			read: false,
			inbox: true,
			outbox: false,
			trash: false,
			body: "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
		},
		{
			from: "Nicolas Keidg",
			email: "keidj@mail.ru",
			id: 103,
			read: true,
			inbox: true,
			outbox: false,
			trash: false,
			body: "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
		},
		{
			from: "Ema Watson",
			email: "b@mail.ru",
			id: 104,
			read: false,
			inbox: true,
			outbox: false,
			trash: false,
			body: "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
		},
		{
			from: "Lucy Barbey",
			email: "c@mail.ru",
			id: 105,
			read: false,
			inbox: false,
			outbox: true,
			trash: false,
			body: "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
		},
		{
			from: "Elvis Presli",
			email: "oko@mail.ru",
			id: 106,
			read: false,
			inbox: false,
			outbox: true,
			trash: true,
			body: "И даже с языками, использующими латинский алфавит, могут возникнуть небольшие проблемы: в различных языках те или иные буквы встречаются с разной частотой, имеется разница в длине наиболее распространенных слов. Отсюда напрашивается вывод, что все же лучше использовать в качестве «рыбы» текст на том языке, который планируется использовать при запуске проекта."
		},
		{
			from: "Petr Poroshenko",
			email: "petr@mail.ru",
			id: 107,
			read: true,
			inbox: false,
			outbox: true,
			trash: false,
			body: "И даже с языками, использующими латинский алфавит, могут возникнуть небольшие проблемы: в различных языках те или иные буквы встречаются с разной частотой, имеется разница в длине наиболее распространенных слов. Отсюда напрашивается вывод, что все же лучше использовать в качестве «рыбы» текст на том языке, который планируется использовать при запуске проекта."
		}
	];



	this.letterForShow = [];

	this.listUser =[];
	this.listUserLS = JSON.parse(window.localStorage.getItem('userList'));



	//this.letterSorted = this.letter;
	this.letterSorted = showLetters();

	this.sortLetter = function(obj){

		this.showList = true;
		this.showCurrent = !this.showList;

		let currenButton = obj.target.innerText;
		let param = '';
		switch(true) {
			case currenButton === "INBOX":
				param = "inbox";
				break;
			case currenButton === "OUTBOX":
				param = "outbox";
				break;
			case currenButton === "READ":
				param = "read";
				break;
		}
		vm.letterSorted = sortLetter(param);
	};

	this.showTrash = function(){
		this.showList = true;
		this.showCurrent = !this.showList;
		vm.letterSorted = sortTrash();
	};



	function showLetters(){
		return vm.letterForShow = vm.letter.filter(function(elem){
			return( elem.inbox === true && elem.trash !== true);
		})

	}


	function sortTrash(){
		return  vm.letter.filter(function(elem){
			//if(elem.trash === true){
			//	return true;
			//}
			//else {
			//	return false;
			//}
			return (elem.trash === true);
		});

	}

	function sortLetter(arg){
		var result;
		if(arg === "outbox" ){
			result = vm.letter.filter(function(elem){
				//if(elem.inbox === false && elem.trash !== true){
				//	return true;
				//}
				//else {
				//	return false;
				//}
				return (elem.inbox === false && elem.trash !== true);
			});
		}
		if(arg === "inbox" ){
			result = vm.letter.filter(function(elem){
				//if(elem[arg] && elem.trash !== true){
				//	return true;
				//}
				//else {
				//	return false;
				//}
				return (elem[arg] && elem.trash !== true);
			});
		}

		if(arg === "read"){
			result = vm.letter.filter(function(elem){
				return (elem[arg] && elem.trash !== true);
			});
		}

		return result;
	}

	this.showCurrentLetter = (obj)=>{
		this.showList = false;
		this.showCurrent = !this.showList;
		let currentAdress = obj.target.dataset.id,
			objCurrentLetter = this.letter.filter((elem)=>{
				if( elem.id === +currentAdress){
					return true
				}
				else {
					return false
				}
			});
		vm.currentLetter = objCurrentLetter[0];

	};

	this.mails = serviceMail.letters();
	this.clickMe = () =>{
		this.mails.then(function(response){
			console.log(response.data);
		});
	};

	this.listUserLS = JSON.parse(window.localStorage.getItem('userList'));

	function parse(){
		vm.dataStorage = JSON.stringify(vm.listUserLS);
		localStorage.setItem('userList', vm.dataStorage);
	}
	this.addUser = (name, lastName) => {
		if(name && lastName){
			var id = name + lastName;
			id = id.toLowerCase();
			id = id.replace(/\s/g, "");
			id = id.split('', 5);
			id = id.map(function(item){
				return item.charCodeAt();
			});
			id = id.join('');
			if(!this.listUserLS){
				this.listUserLS =[];
				this.listUserLS.push({
					id: id,
					dataUser: {
						name: name,
						lastName: lastName,
						showEditName: false,
						showEditLastName: false,
						changeName: '',
						changeLastName: ''
					}
				});
			}
			else{
				this.listUserLS.push({
					id: id,
					dataUser: {
						name: name,
						lastName: lastName,
						showEditName: false,
						showEditLastName: false,
						changeName: '',
						changeLastName: ''
					}
				});
			}
			parse();
		}

	};

	this.showEditingObj = {};

	this.editingUser = (el, obj)=>{
		//console.log(this.listUserLS[el].dataUser.show);
		console.log(obj.target.dataset.field);
		if(obj.target.dataset.field === 'name'){
			this.showEditingObj['showEditName' + el ] = !this.showEditingObj['showEditName' + el];
		}
		if(obj.target.dataset.field === 'lastName'){
			this.showEditingObj['showEditLastName' + el ] = !this.showEditingObj['showEditLastName' + el];
		}
	};

	this.saveUser = function(el, obj){
		if(obj.target.dataset.field === "name"){
			this.listUserLS[el].dataUser.name = this.listUserLS[el].dataUser.changeName;
		}
		if(obj.target.dataset.field === "lastName"){
			this.listUserLS[el].dataUser.lastName = this.listUserLS[el].dataUser.changeLastName;
		}
		console.log(this.listUserLS);
		parse();

	};
	this.deleteUser = function(el){
		this.listUserLS.splice(el, 1) ;
		parse();
	};

});