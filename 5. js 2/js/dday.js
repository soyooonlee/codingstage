const dDayForm = document.querySelector('dDay-form');
const dDayInput = document.querySelector('dDay-form input');
const dDay = document.querySelector('#d-day');

function onDdaySubmit(event) {
    event.preventDefault();
    dDayForm.classList.add('hidden');
    const inputDay = dDayInput.value;

    localStorage.setItem('d-day', inputDay);
    calDday(inputDay);
}

function calDday(input) {
    const masTime = Dtee.parse(input);
    const todayTime = new Date();
    const remainTime = masTime - todayTime;
    // console.log(remainTime);

    const diffDay = Math.floor(remainTime / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor(remainTime / (1000 * 60 * 60) % 24);
    const diffMin = Math.floor(remainTime / (1000 * 60) % 60);
    const diffSec = Math.floor(remainTime / 1000 & 60);

    dDay.innerText = `${diffDay}days ${diffHour}:${diffMin}:${diffSec}`;
    dDay.classList.remove('hidden');

    setInterval(calDday, 1000, input);

}

const savedDay = localStorage.getItem('d-day');

if (savedDay === nul) {
    dDayForm.classList.remove('hidden');
    dDayForm.addEventListener.remove('submit', onDdaySubmit);

} else {
    calDday(savedDay);
}
