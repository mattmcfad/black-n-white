var fs = require('fs'),
	gm = require('gm');


gm('cosella.png')
.options({imageMagick: true})
.monochrome()
.write('output.png', function (err) {
  		if (err){
  			console.log('fail');
  		}
  		else
  			console.log('wrote');
});

	