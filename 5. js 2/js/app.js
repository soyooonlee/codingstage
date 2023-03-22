const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date(); // 오늘 날짜 저장하기
    clock.innerText =
        `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // 시:분:초
}

getClock() // 웹사이트 로드되자마자 실행
setInterval(getClock, 1999); // 1초에 한번씩 반복해서 실행