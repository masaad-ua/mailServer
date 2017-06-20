'use strict';
import addUserTemplate from './view/addUser.template.html';
import editingUser from './view/addUser.template.html';


/*******Внизу будут стейты*******/





/*******Внизу будут стейты*******/
//app.controller('aaa', require('./addUser.directive'));

var app = angular.module('mailPost', []);
app.directive('addUser', require('./addUserDirective'));
app.directive('editUser', require('./editUser.directive'));
app.directive('saveIt', require('./saveIt.directive'));

//export default app;
//console.log("hello");
//var amount = require("./addUserDirective.js");
//
//var calc = function(a,b){
//	return amount(a,b)
//};
//console.log(calc(4,7));
//import {one, two} from "./addUserDirective";
//alert( `${one} and ${two}` );