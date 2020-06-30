function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (sumArray) {
	const totalSum = sumArray.reduce((total, number) => {
		return total + number;
	},0);
	return totalSum;
}

function multiply (sumArray) {
	const totalSum = sumArray.reduce((total, number) => {
		return total * number;
	},1);
	return totalSum
}

function power(a,b) {
	return a**b;
}

function factorial(a) {
	let factorial = 1;
	for (let i = 1; i <= a; i++) {
		factorial = factorial * i;
	}
	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}