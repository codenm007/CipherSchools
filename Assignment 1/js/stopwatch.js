let minutes = document.getElementById("mins");
let seconds = document.getElementById("secs");
let min = 1;
let se = 0;
let starting = true;
let store;


const start = () => {

    if (starting) {
        store = setInterval(myTimer, 1000);
    }
    starting = false;
}
const myTimer = () => {
    se++;
    seconds.innerText = `0${se}`;
    if (se > 9) {
        seconds.innerText = se;
        if (se === 60) {
            seconds.innerText = `00`;
            se = 00;
            addMinute();
        }
    }

}

const addMinute = () => {
    minutes.innerText = `0${min}`;
    if (min > 9) {
        minutes.innerText = min;
        if (min === 60) {
            minutes.innerText = `00`;
            se = 00;
        }
    }
    min++;
}


const stop = () => {
    clearInterval(store)
    starting = true;
}

const reset = () => {
    stop()
    seconds.innerText = `00`;
    minutes.innerText = `00`;
    se = 0;
    min = 1;
}

