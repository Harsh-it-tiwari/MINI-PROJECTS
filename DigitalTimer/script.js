const button1 = document.querySelector('#start-btn');
const button2 =document.querySelector('#reset-btn');
const display =document.getElementById('display');
let timerId=null;
button1.addEventListener('click',()=>{
    if(timerId!=null){
            clearInterval(timerId)
        }
    timerId=setInterval(()=>{
        let time =new Date().toLocaleTimeString();
        display.textContent =time;

  },1000)
}
)
button2.addEventListener('click',()=>{
    clearInterval(timerId);
    timerId=null;
    display.textContent='00:00:00';
})

