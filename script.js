let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";
let multioperator = 0;


///sadasdadasdas
// Menghitung angka
const calculate = () => {
	let result = "";
	switch (calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case "-":
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case "*":
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case "/":
			result = parseFloat(prevNumber) / parseInt(currentNumber);
		default:
			break;
	}
	currentNumber = result;
	calculationOperator = "";
};

// Percantage
const percantage = document.querySelector(".percent");
percantage.addEventListener("click", () => {
	if (prevNumber != "") {
		currentNumber = prevNumber / 100;
	} else {
		currentNumber /= 100;
	}
	updateScreen(currentNumber);
});

// Menampilkan Angka
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
	calculatorScreen.value = number;
};

// Input Number
const inputNumber = (number) => {
	if (currentNumber === "0") {
		currentNumber = number;
		return;
	}
	currentNumber += number;
	console.log(currentNumber);
};

// Operator Hasil
const equalSign = document.querySelector(".equals");
equalSign.addEventListener("click", (event) => {
	console.log("Update " + currentNumber);
	calculate();

	updateScreen(currentNumber);
});

// Memasukan Operator
const inputOperator = (operator) => {
	if (calculationOperator === "") {
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	console.log(`Multi Operator ${multioperator}`);
	currentNumber = "0";
};
// operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value);
		console.log(event.target.value);
	});
});

// Decimal angka
inputDecimal = (dot) => {
	if (currentNumber.includes(dot)) {
		return;
	}
	currentNumber += dot;
};

const decimalNumber = document.querySelector(".decimal");
decimalNumber.addEventListener("click", (event) => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});

// Clear Button
const clearAll = () => {
	prevNumber = "";
	calculationOperator = "";
	currentNumber = "0";
	multioperator = 0;
};
const clearButton = document.querySelector(".all-clear");

clearButton.addEventListener("click", (event) => {
	clearAll();
	updateScreen(currentNumber);
});

// Mendapatkan angka
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		//console.log(event.target.value);
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});
