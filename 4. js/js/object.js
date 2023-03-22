// object 만들기 (CSS와 비슷하게 생겼다)


// const playerName = 'nico'
// const playerPoints = 121212;
// const platerHansome = false;
// const playerFat = 'litter bit'

// // player[0] == name
// // player[1] == points
// const player = ['nico', 1212, false, 'little bit'];

const player = {
    name: 'nico',
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
// console.log 대신 console.name을 쓸 수 있다! object 를 생성한 것이다.

// fat 항목 변경하기
console.log(player.fat);
player.fat = false;
console.log(player);

// lastName object 추가
console.log(player);
player.lastName = 'potato';

// points 변경 -> 기존데이터에 15점 더하기
player.points = player.points + 15;
console.log(player);