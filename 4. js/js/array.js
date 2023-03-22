// array와 push, 요소 찾기

const mon = 'mon';
const tue = 'tue';
const wed = 'wed';
const thu = 'thu';
const fri = 'fri';
const sat = 'sat';
const sun = 'sun';

// [] = array 요소들을 모아 하나의 list 로 만들어준다.
const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const nonsense = [1, 2, 'hello', 3, false, null]

console.log(daysOfWeek, nonsense);
// Q. 한주의 5번째요일은 뭘까요?
console.log(daysOfWeek[5]);

// push -> array 안에 항목을 추가해줄때
// 일요일 추가해주기
daysOfWeek.push('sun');
console.log(daysOfWeek);
// sun 항목이 추가된것을 알 수 있다.

const toBuy = ['potato', 'tomato', 'pizza'];
console.log(toBuy);
// 김밥 추가
toBuy.push('kimbab');
console.log(toBuy);
// 4번째 요소 찾기
console.log(toBuy[3]);

