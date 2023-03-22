// alert은 명령어. 작은창으로 뜬다.
// const, let var 의 차이
// alert("Hello");
// 1

console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

console.log('안녕하세요');

// console에서 값이 출력된다. 따옴표''넣어도되고 안넣어도됨

// 2
// 개발자가 되려면 게을러져야한다. 같은숫자가 여러개있는데 한번에 바꾸기 귀찮기 때문에..
// const = constant나 variable(a, b 같은 요소)을 만들때 쓴다! 
const a = 5; // number
const b = '2'; // 'text'

// 자바스크립트에서는 공백이 필요할때 대문자로 쓴다. 띄어쓰기하면 요소가 다르게 구분되어 오류날 수 있기 때문.
const VaryLongVariableName = 'blabla'
const myName = 'nico'

console.log(a + b);
console.log(a * b);
console.log(a / 2);
console.log("hell0" + myName);


// 3
// const와 let의 차이 - let은 새로운것을 생성할 때 쓴다.
let myName2 = 'nico';

console.log(a + b);
console.log(a * b);
console.log(a / 2);
console.log("hell0" + myName);

myName2 = 'nicolas';

console.log('my name is' + ' ' + myName2);
// console은 절대 변하지 않는 요소를 만들때 사용한다. let 은 변경 가능
// 기본적으로 const를 사용하고 업데이트하고싶은 부분이 있을때 let을 사용한다.
// var : 엤날언어. 현재는 let으로 대체됨. 절대사용X
// let : 업데이트해야할 요소에 사용
// const : 변하지않는 요소