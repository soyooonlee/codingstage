// Booleans --true, false 요소 두가지밖에 없다.
// true, false, undifined 배우기
// 자바스크립트에서 true - false는 0 -1 과 같다. = 꺼짐 - 켜짐

const amIFat = true;
// 'true'라고 적으면 안된다. 따옴표''안에 들어가는 순간 문자로 인식
console.log(amIFat);

// null=/false     null은 말그대로 아무것도 없다는 것이다. nothing. not empty, nothing.
const amIFat2 = null;
let something;
console.log(something, amIFat2);   // => something은 variable이 없어서 정의되지 않는다. ndifined, null 추출
// null은 우리가 variable안에 어떤 것도 없다는것을 확실히 하기위해 쓴다. 자바스크립트에게 여기엔 아무것도 '없다' =비어있다를 말하기위해 주는것


// true = on 켜져있음
// false = off 꺼져있음
// null = 비어있음
// undifined = variable이 만들어졌지만 값이 없는것 