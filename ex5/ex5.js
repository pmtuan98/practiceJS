// Exercise 5:
// Write a JavaScript program to create a new string adding "New!" in front of a given string. If
// the given string begins with "New!" already then return the original string.

function newString(input){
	if(input.includes('New!')){
		return input;
	}else{
		return 'New!' + input;
	}
}

console.log(newString('abcd'));