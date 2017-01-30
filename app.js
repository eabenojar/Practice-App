var fs = require('fs');
var prod = process.argv.indexOf('--product');
var sum = 0;
if(prod >= 0){
	for(var i = 0; i<prod.length; i++){
		sum += parseInt(prod[i]);
	}
}

console.log(sum);

if(process.argv.length <= 3){
	console.log('error: not enough arguments');
	return null;
}
if(process.argv[2] === '--sum' || process.argv[2] === '--product'){
	if(process.argv[2] === '--sum'){
		var sum=0;
		for(var i=3; i<process.argv.length; i++){
			sum += parseFloat(process.argv[i]);
		}
		console.log(sum);
	}else{
		var prod = 1;
		for(var i=3; i<process.argv.length; i++){
			prod *= parseFloat(process.argv[i]);
		}
		console.log(prod);
	}
} else{
	console.log('error: no flag was given');
	return null;
}