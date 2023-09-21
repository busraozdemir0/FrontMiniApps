const sounds=["applause","boo","gasp","tada","victory","wrong"];

sounds.forEach((sound) => {  // her bir ses için buton oluştur ve bu butona tıklandıkça içerisinde olan sesi oynat
    const btn=document.createElement('button');  // her bir sesi gez ve her birine buton olarak eleman yarat
    btn.classList.add('btn');

    btn.innerText=sound;  // butonların textine dizideki isimlerden her birini ekle

    btn.addEventListener("click",() => {  // butonlara tıklandığı sürece belirtilen sesi oynat 
        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById("buttons").appendChild(btn);
})

function stopSongs(){ // başka butona bastığımızda arkada çalan diğer sesi durdurması için
    sounds.forEach((sound) => {
        const song=document.getElementById(sound);

        song.pause();
        song.currentTime=0;
    })
}