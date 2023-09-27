const content=document.getElementById("content");
const speedEl=document.getElementById("speed");
const text="I am a Computer Engineering and Full Stack Developer";

let idx=1; // ilk harften baslamasi icin 1 verildi

let speed= 300 / speedEl.value; // 300 ile inputtaki degeri bolerek hiz seviyesi olusturuyoruz

writeText();

function writeText(){
    content.innerText=text.slice(0, idx);  // texti her seferinde idx miktari kadar kesecek
    idx++ ;

    if(idx > text.length){
         idx=1; // yazi bittigi an tekrar bastan baslamasi icin
        // content.innerText=text;  // yazi bittiginde tekrar bastan baslamaz
    }

    setTimeout(writeText, speed);  // text ifadesine animasyon uygulamak icin
}

speedEl.addEventListener("input", (e) =>   // yazi hizinin inputtaki value degerine gore hizlanip azalmasi icin
    (speed = 300 / e.target.value)  // input icerisindeki degere bagli olmasi icin
)