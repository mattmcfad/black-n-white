var fs = require('fs'),
	gm = require('gm');


gm('cosella.png')
.options({imageMagick: true})
.implode(-0.9)
.colorize(200,200,256)
.contrast(-6)
.region(430,500,50,250)
.swirl(200)
.write('output.png', function (err) {
	if (err){
		console.error('fail: \n-------------------------\n',err);
	}
	else
		console.log('Successfully wrote file: ');
});

	