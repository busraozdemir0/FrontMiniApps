
// Api'yi aldığımız sayfa linki
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const increaseBtn=document.getElementById("increase");
const decreaseBtn=document.getElementById("decrease");
const sizeRange=document.getElementById("size");
const colorInput=document.getElementById("color");
const clearBtn=document.getElementById("clear");

let size=8;
let color="black";
let isPressed=false;
let x;
let y;

function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)  // cizim yapacagimiz nokta gelecek
    ctx.fillStyle=color;
    ctx.fill();
}

//drawCircle(100,200);

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth=size*2;  // cizginin kalin olmasi icin
    ctx.strokeStyle=color;
    ctx.stroke();
}

//drawLine(300,300,300,500)

canvas.addEventListener("mousedown", (e) => {  // mouse aktif hale geldiginde(tiklandiginda)
    isPressed=true;
    x=e.offsetX;  // x'in konumu
    y=e.offsetY; // y'nin konumu

    //console.log(isPressed,x,y)
}) 

canvas.addEventListener("mouseup", (e) => {  // mouse tıklanmasi bittiginde
    isPressed=false;
    x=undefined; 
    y=undefined; 

    //console.log(isPressed,x,y)
}) 

canvas.addEventListener("mousemove", (e) => {   // mouse hareket ettiginde takip etmesi icin
    if(isPressed){
        const x2=e.offsetX;
        const y2=e.offsetY;

        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);

        x=x2;
        y=y2;
    }
}) 

increaseBtn.addEventListener("click", () => { // arttirma butonuna tiklandiginda
    size += 2;
    updateSizeRange();
})

function updateSizeRange(){
    sizeRange.innerText=size;
    if(size <= 2){  // cizgi boyutu en fazla 4'e ulastiginde dursun ve azaltma butonu pasif hale gelsin
        size=2;
        decreaseBtn.style.pointerEvents="none";
        decreaseBtn.style.opacity="0.5";

        increaseBtn.style.pointerEvents="auto";
        increaseBtn.style.opacity="1";
    }else if(size > 2 && size < 64){
        
        increaseBtn.style.pointerEvents="auto";
        increaseBtn.style.opacity="1";

        decreaseBtn.style.pointerEvents="auto";
        decreaseBtn.style.opacity="1";
    }
    else if(size >= 64){
        size=64;
        increaseBtn.style.pointerEvents="none";
        increaseBtn.style.opacity="0.5";

        decreaseBtn.style.pointerEvents="auto";
        decreaseBtn.style.opacity="1";
    }
}


decreaseBtn.addEventListener("click", () => {
    size -= 2;
    updateSizeRange();
})

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0,0, canvas.width, canvas.height); // canvas'taki tum islemleri sifirlayacak
})

colorInput.addEventListener("change", (e) => {  // color inputundaki renk degistirildiginde(change)
    color=e.target.value;
})
   
