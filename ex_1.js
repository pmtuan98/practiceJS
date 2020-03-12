
// Exercise 1:
// Write a JavaScript program to check two numbers and return true if one of the number is
// 100 or if the sum of the two numbers is 100 

var readLineSync = require('readline-sync');
function checkTwoNumber(){
	var a = readLineSync.question('Input first number: ');
	var b = readLineSync.question('Input second number: ');
	var sum = a + b;
	if(a == 100 || b == 100 || sum == 100){
		console.log('true');
		return true;
	}else{
		console.log('false');
		return false;
	}
}
checkTwoNumber();
