/* To rename a file with the File System module,
use the fs.rename() method.
The fs.rename() method renames the specified file */

var fs = require('fs');

/* Open create a new file*/
fs.open('newFileToBeRenamed.txt', 'w', function(err, file){
	if(err) throw err;
	console.log('File Opened!')
});

/* Then delete the file that was just created/opened */
fs.rename('newFileToBeRenamed.txt', 'newFileThatHasBeenRenamed.txt', function(err){
	if(err) throw err;
	console.log('File Renamed!')
});