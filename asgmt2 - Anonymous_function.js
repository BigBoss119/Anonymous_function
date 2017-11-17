

var findSum = function(a, b) {
	return a + b;
}

var findProduct = function(a, b){
	return a * b;
}

function threeOperation(x, operation) {
	var z = operation(x, 3);
	console.log(z);

}


threeOperation(4, findSum);
threeOperation(5, findSum);
threeOperation(4, findProduct);
threeOperation(5, findProduct);