/* The fs.appendFile() method appends specified content to a file.
If the file does not exist, the file will be created */
/* Create a new file using the appendFile() method and append text to it. */
var fs = require('fs');

fs.appendFile('newAppendFile.txt', 'Text to Append', function(err){
	if(err) throw err;
	console.log('File Saved!')
});
