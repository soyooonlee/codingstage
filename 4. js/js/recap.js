// recap

// const a = 5;
// const는 업데이트 하지못하기때문에 여기서는 let 을 사용한다.
let isNIcoFat = true;
isNIcoFat = false;

console.log(isNIcoFat);

const days = [1, 2, , false, true, null, undefined, 'text', 'me'];
let toBuy1 = ['potato', 'tomato', 'banana'];

// 3번째 요소안에 끼워넣기
toBuy1[2] = 'water';
console.log(toBuy1);


const player3 = {
    name: 'soyoon',
    age: 98,
};
// console.log(console) -> 아래 콘솔까지 같이 나온다
console.log(player3, console);

console.log(player3);
// 이름변경 name
player3.name = 'leesoyoon'
console.log(player3);

// -----------------------------------
// function안에 data를 받으려면 ()칸 안에 값을 넣으면 된다!
function minusFive(potato, salad) {
    console.log(potato - 5);
}
// function 안 요소인 potato는 funcion 밖에서 적용되지 않는다! ex) console.log(potato) X작동안됨
minusFive(10, 11, 12, 23, 434, 25);

const calculator = {
    add: function (a, b) {
        console.log(a, b);
    },
}

calculator.add(5, 1);
// console.log 와 같은 요소를 만들었다!
