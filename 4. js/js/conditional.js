// conditionals
// type 바꾸기

// prompt - 입력창 띄우기
// const age = prompt('How lod are you?');
// prompt는 자바스크립트의 실행을 멈추게 함. css도 못쓰고 팝업을 제한하기도 한다. ---> 현재는 거의 쓰지않는 방법. var 처럼 오래된 기술이다

// 타입(속성)을 변경할때 사용 
// parseInt()

// typeof 를 넣으면 string(문자열) 이 출력됨을 확인할 수 있다. --어떤 타입인지 확인가능
// console.log(typeof age);

// console.log(typeof '15', typeof parseInt('15'));

// console.log(age, parseInt(age));
// function은 내부에서 시작해서 외부로 향한다.


// function 안에 function 넣기 - 중첩
const age = parseInt(prompt('How old are you?'));

// console.log(age);


// true, false 가려내기 -boolean 조건문
// isNaN - true, false 를 가려준다. -boolean을 반환함

if (isNaN(age)) {
    console.log('Please write a nummber');
} else {
    console.log('Thank you for writing your age.');
}

// 숫자를 입력하면 if 창이, 아니라면 else 창이 나타난다. 


// && = and , || = or (shift+w키)

if (isNaN(age) || age < 0) {
    console.log('Please write real positive nummber');
} else if (age < 18) {
    console.log('You are too young.');
} else if (age >= 18 && age <= 50) {
    console.log('You can drink.');
} else if (age > 50 && age <= 80) {
    console.log('You should exercise.');
} else if (age === 100) {
    // !=== a  - a가 아님을 확인 true, false 비교
    console.log('congratulations!')
} else if (age > 80) {
    console.log('You can do whatever you want.');
}



true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false

