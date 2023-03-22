// functions

console.log('Hello my name is soyoon')
console.log('Hello my name is Dal')
console.log('Hello my name is suga')
console.log('Hello my name is flynn')
// 이런식으로 마지막만 바뀌는데 계속해서 코드를 쓰는것은 낭비다.
// 이럴때 function을 사용한다.

function sayHello(nameOfPerson, age) {
    console.log('Hello my name is ' + nameOfPerson + "and I'm " + age);
}

sayHello('nico', 10);
sayHello('dal', 23);
sayHello('lynn', 21);

// ----------------------------
function plus(a, b) {
    console.log(a + b);
}

plus();
// NaN == Not a Number
plus(8, 60);
// 하면 제대로 출력된다.

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
plus(60, 8);
// function안의 firstNumber 요소는 function 안에서만 존재한다. console.log(firstNumber)로 넣었을시 오류남

function divide(a, b) {
    console.log(a / b);
}
divide(90, 20)


// player object 만들기
// function sayHello() {} 형태가 아니다! 안팎이 바뀜
const player2 = {
    name: 'nico',
    sayHello: function (otherPersonsName) {
        console.log('hello ' + otherPersonsName + ' nice to meet you!');
    },
};

console.log(player.name);
player2.sayHello('lynn');


function plus(a, b) {
    console.log(a + b);
}

plus(5, 5);