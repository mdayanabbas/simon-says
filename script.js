let order = [];
let playerorder = [];
let flash;
let turn;
let good;
let intervalid;
let strict = false;
let noise = true;
let on = false;
let win;

const turncnt = document.querySelector("#turn");
const topleft = document.querySelector("#topleft");
const topright = document.querySelector("#topright");
const bottomleft = document.querySelector("#bottomleft");
const bottomright = document.querySelector("#bottomleft");

const strictbtn = document.querySelector("#strict");
const onbtn = document.querySelector("#on");
const startbtn = document.querySelector("#start");


strictbtn.addEventListener("change",(event) => {
    if(strictbtn.checked == true)
    {
        strict = true;
    }else{
        strict = false;
    }
});

onbtn.addEventListener("click",(event) =>{
    if(onbtn.checked == true)
    {
        on = true;
        turncnt.innerHTML = "-";
    }else{
        on = false;
        turncnt.innerHTML = "";
        clearColor();
        clearInterval(intervalid);
    }
});

startbtn.addEventListener("click",(event) => {
    if(on || win)
    {
        play();
    }
});

function play()
{
    win = false;
    order = [];
    playerorder = [];
    flash = 0;
    intervalid = 0;
    turn = 1;
    turncnt.innerHTML = 1;
    good = true;

    for(var i = 0;i<20;i++)
    {
        order.push(Math.floor(Math.random()*4) + 1);
    }console.log(order);
}