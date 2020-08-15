// menampilkan angka yang diklik pada layar
const showNumber = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    showNumber.value = number
}

// mengambil elemen button dengan class number 
const numbers = document.querySelectorAll('.number');

// mendeteksi aksi klik pada tiap element button 
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        if (calculatorOn) {
            inputNumber(event.target.value)
            updateScreen(currentNumber);
        }
    })
});

//menyimpan angka
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let calculatorOn = false;
let calculated = false;

const inputNumber = (number) => {
    if (currentNumber === '0' || calculated === true) {
        currentNumber = number;
        calculated = false;
    } else {
        currentNumber += number;
    }
}

//menyimpan operator
const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        if (calculatorOn) {
            inputOperator(event.target.value);
        }
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;  
    }
    calculationOperator = operator;
    currentNumber = '0';
}

//mengaktifkan fungsi kalkulasi
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    if (calculatorOn) {
        calculate();
        updateScreen(currentNumber);
    }   
})

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculated = true;
    calculationOperator = '';
}

// mengaktifkan tombol AC
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    if (calculatorOn) {
        clearAll();
        updateScreen(currentNumber);
    }
})

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

// kalkulasi angka desimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', ()=>{
    if (calculatorOn) {
        currentNumber /= 100;
        updateScreen(currentNumber);
    }
})

const powerButton = document.querySelector('.power-btn');

powerButton.addEventListener('click', ()=>{
    if (calculatorOn) {
        calculatorOn = false;
        currentNumber = '';
    } else {
        calculatorOn = true;
        currentNumber = '0';
    }
    updateScreen(currentNumber);
});

const del = document.querySelector('.delete');

del.addEventListener('click', ()=>{
    if (calculatorOn) {
        if (currentNumber !== '0' && currentNumber.length !== 1 && calculated === false) {
           currentNumber = currentNumber.slice(0, currentNumber.length - 1); 
        } else {
            currentNumber = '0';
        }
        updateScreen(currentNumber);
    }
});






