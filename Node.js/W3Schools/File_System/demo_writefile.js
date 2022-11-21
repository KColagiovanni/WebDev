/* he fs.writeFile() method replaces the specified file and content if it
exists. If the file does not exist, a new file, containing the specified
content, will be created */
/* Create a new file using the writeFile() method and replaces the
specified file and content with the text*/
var fs = require('fs');

fs.writeFile('newWriteFile.txt', 'Text to write to file', function(err){
	if(err) throw err;
	console.log('File Written To!')
});