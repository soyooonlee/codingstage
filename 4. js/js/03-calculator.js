// 계산기 만들기 + return
// 같은 단어 동시변환 ctrl+shift+L

const calculator = {
    plus: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    div: function (a, b) {
        console.log(a / b);
    },
    multi: function (a, b) {
        console.log(a * b);
    },
    power: function (a, b) {
        console.log(a ** b);
    },
};
// alert로도 변환해보기

calculator.plus(10, 2);
calculator.minus(10, 2);
calculator.div(10, 2);
calculator.multi(10, 2);
calculator.power(10, 2);


// -----------------
const age = 96;
// 한국나이는 외국나이+2 이므로
function calculateKRAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const KRAge = calculateKRAge(age);

console.log(KRAge);
// return을 변경하면 그 값이 가장 마지막 값이 된다. 

// return calculator
const calculatorReturn = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    div: function (a, b) {
        return a / b;
    },
    multi: function (a, b) {
        return a * b;
    },
    power: function (a, b) {
        return a ** b;
    },
};

const plusResult = calculatorReturn.plus(2, 3);
const minusReslut = calculatorReturn.minus(10, plusResult)
const divResult = calculatorReturn.div(10, minusReslut);
const multiResult = calculatorReturn.multi(divResult, 10);
const powerResult = calculatorReturn.power(divResult, minusReslut);
// console.log 하지않으면 화면상에서는 아무것도 보이지 않는다.


console.log(plusResult);
// console.log 하지 않기 
// console은 화면상에 결과를 보여주기 위한 것
// console.log 는 계산한 값을 보여주는것. but 우리는 데이터를 받아서 사용하거나 콘솔이 아닌 그 계산으로 이어진 결과물을 화면에 출력하고싶어하기 때문에 return 을 쓰자.



