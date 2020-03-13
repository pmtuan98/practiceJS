// Exercise 4:
// Write a JavaScript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


function getCurrentDate(){
	var currentDate = new Date();
	console.log('Current date: ');
	return currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
}


console.log(getCurrentDate());