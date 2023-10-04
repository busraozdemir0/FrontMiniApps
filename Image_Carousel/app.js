const imgsContainer = document.getElementById('images');
const img = document.querySelectorAll('#images img');  // images id'li olan etiketin altindaki img'leri al
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let interval = setInterval(play, 2000);  // sonsuz devam edecegi icin setInterval verdik (play fonksiyonunu 2 saniyede bir sonsuza kadar calistiracak)
let idx=0; // hangi gorselde oldugunu belirtmek icin

function play(){
    idx++;

    changeImage();
}

function changeImage(){
    if(idx >= img.length - 1){  // eger tum gorseller gosterilirse idx tekrar 0'a esitlenerek basa donmesini saglayalim
        idx=0;
    } else if(idx < 0){  // idx 0'dan kucuk oldugunda idx'i 3'e esitle (4 gorsel olsa da index 0 dan basladigindan sonuncu gorsel 3 oluyor)
        idx=img.length-1;
    }

    imgsContainer.style.transform=`translateX(${-idx * 600}px)`;  // gorsellerin width degerini 600 belirledigimiz icin ornegin 3.gorseldeyse 3*600den -1800 px X ekseninde kayacak ve 3. gorseli bize gosterecek
}

function resetInterval(){
    clearInterval(interval);
    interval=setInterval(play, 2000);
}

nextBtn.addEventListener("click", () => {
    idx++;
    changeImage();

    resetInterval();
})

prevBtn.addEventListener("click", () => {
    idx--;
    changeImage();

    resetInterval();
})