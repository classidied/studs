const startingMin=0.2;
const breakMin=0.3;
let time=startingMin*60;
let breakTime=breakMin*60;

const countdownEl= document.getElementById('countdown');

setInterval (updateCD,1000);

function updateCD(){
    if (time==0){
        alert("Go take a break! You worked really hard!");
        time=startingMin*60;
    }
    const minutes=Math.floor(time/60);
    let seconds = time%60;

    seconds= seconds<10? '0'+seconds:seconds;
    countdownEl.innerHTML= `${minutes}:${seconds}`;
    time--;
}