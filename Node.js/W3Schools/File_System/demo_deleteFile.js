/* To delete a file with the File System module,  use the fs.unlink() method.
The fs.unlink() method deletes the specified file*/
var fs = require('fs');

/* Open/create a new file*/
fs.open('newFileToBeDeleted.txt', 'w', function(err, file){
	if(err) throw err;
	console.log('File Opened!')
});

/* Then delete the file that was just created/opened */
fs.unlink('newFileToBeDeleted.txt', function(err){
	if(err) throw err;
	console.log('File Deleted!')
});