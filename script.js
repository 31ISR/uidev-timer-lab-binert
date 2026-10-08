const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const hoursCircle = document.getElementById("hours-circle");
const minutesCircle = document.getElementById("minutes-circle");
const secondsCircle = document.getElementById("seconds-circle");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");

const lapsContainer = document.getElementById("lapsContainer");
const lapList = document.getElementById("lapList");

const circumference = 2 * Math.PI * 52;

let elapsedTime = 0;   
let timer = null;      
let isRunning = false; 
let lapCount = 0;      

// function formatTime(totalSeconds) {
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     const formattedHours = hours.toString().padStart(2, '0');
//     const formattedMinutes = minutes.toString().padStart(2, '0');
//     const formattedSeconds = seconds.toString().padStart(2, '0');

//     return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
// }

function updateCircleProgress(circle, value, max) {
    const progress = (value / max) * circumference;
    circle.style.strokeDasharray = `${progress} ${circumference}`;
}

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    // TODO 1: записать в hoursEl, minutesEl, secondsEl значения
    //         с ведущими нулями (используйте padStart)

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // TODO 2: вызвать updateCircleProgress для каждого из трёх кругов
    //         (max для часов — 24, для минут и секунд — 60)

    updateCircleProgress(hoursCircle, hours, 24);
    updateCircleProgress(minutesCircle, minutes, 60);
    updateCircleProgress(secondsCircle, seconds, 60);
}

function start() {
    if (isRunning) return; // защита от двойного запуска

    // TODO 1: поставить isRunning = true

    let isRunning = true;

    // TODO 2: запустить setInterval, который каждую секунду
    //         увеличивает elapsedTime на 1 и вызывает updateDisplay()
    //         Результат сохраните в переменную timer

    let timer = setInterval(() => {
        count++;
    }, 1000);

    // TODO 3: сделать startBtn неактивной, а stopBtn и lapBtn — активными

    

}