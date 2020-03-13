// Exercise 3:
// Write a JavaScript program to replace every character in a given string with the character
// following it in the alphabet
// example : 'abcd' -> 'bcde'

function replaceString(input){
	var nextCharacter = input.charCodeAt(input.length-1)+1;
	console.log( input.substr(1) + String.fromCharCode(nextCharacter))
}

replaceString('abcdety');