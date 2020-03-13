// Exercise 2:
// Write a JavaScript exercise to get the extension of a filename.


function getExtension(extension){
	console.log(extension.slice(extension.indexOf('.'), extension.length + 1))
};

getExtension('document1.doxs');