//fibonacci series with while loop

function fibonacci(num) {
	var a = 1, b = 0 , temp;

	while(num >= 0) {
		temp = a;
		a = a + b;
		b = temp;
		num--
	}

	return b;
}

fibonacci(5);
//Recursion

function fibonacci(num) {
	if(num <= 1) return 1;

	return fibonacci(num - 1) + fibonacci(num - 2)
};

fibonacci(6);


//
var fseries =  function(var1)
{
	if(var1 === 1) {
		return [0, 1];
	}
	else {
		var sum = fseries(varr1 -1 );
		sum.push(sum[sum.length -1] + sum[sum.length -2]);

		return sum; 
	}
};

console.log(fseries(10)); 


