const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
let image = document.getElementById('image_change')
let images = ['sourc/img1.jpg','sourc/img2.jpg','sourc/img3.jpg','sourc/img4.jpg','sourc/img5.jpg']

function UpdateTime(){
    const currentYear=new Date().getFullYear();
    const newYear=new Date(`november 08 2024 07:00:00`);
    const currentdate=new Date();
    const diff=newYear-currentdate;
    const D=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);
    //console.log(D+" "+h+" "+m+" "+s);
    days.innerHTML=D<10?"0"+D:D;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;

}

setInterval(UpdateTime,1000);
setInterval(function(){
    let random = Math.floor(Math.random() * 5);
    image_change.src = images[random];
},5000)
