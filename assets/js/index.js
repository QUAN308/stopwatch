let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let getMinute = document.querySelector('.minute');
let getSecond = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');

let minute = 00;
let seconds = 00;
let tens = 00;
let interval;
btnStart.addEventListener('click', () => {
    interval = setInterval(() => {
        tens++;
        getTens.innerHTML = '0' + tens;
        if(tens > 9){
            getTens.innerHTML = tens;
        }
        if(tens > 99){
            tens = 00;
            tens++;
            seconds+=1;
            getSecond.innerHTML ='0' + seconds;
            if(seconds > 9){
                getSecond.innerHTML = seconds;
            }
        }
        if(seconds > 59){
            seconds = 00;
            minute+=1;
            getMinute.innerHTML = '0' + minute;
            if(minute > 59){
                getMinute.innerHTML = minute;
            }
        }
    }, 10);
});
btnStop.addEventListener('click', () => {
    clearInterval(interval);
});
btnReset.addEventListener('click', () => {
    minute = 00;
    tens = 00;
    seconds = 00;
    getSecond.innerHTML = '0' + seconds;
    getTens.innerHTML = '0' + tens;
    getMinute.innerHTML = '0' + minute;

})