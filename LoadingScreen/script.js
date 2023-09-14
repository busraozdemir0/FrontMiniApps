const loadingText=document.querySelector(".loading-text");
const bg=document.querySelector(".bg");

let load=0;

let interval = setInterval(bluring, 30); // 30 ms boyunca devam etsin

function bluring(){
    load++;

    if(load > 99){   // yükleme değişkeni 99dan büyükse dursun
        clearInterval(interval); // işlemi belirtilen süre sonunda durduracak
    }

    loadingText.innerText=`${load}%`;
    loadingText.style.opacity=scale(load,0,100,1,0); // rakam 0'dan 100'e gidene kadar kaybolması için opacity verdik
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`; // arkaplandaki görseliğin bulanıklığı(blur) 30dan 0 a inecek
   
}

// resmin bulanıktan netliğe doğru gitmesi için fonksiyon
function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}