const insert=document.getElementById("insert");


window.addEventListener("keydown",(event) => {  // pencerede bir tuşa basıldığında gerçekleşek olan fonksiyon
    insert.innerHTML=`
    <div class="key">
         ${event.key === " " ? "Space" : event.key} 
        <small>event.key</small>
    </div>
    <div class="key">
        ${event.keyCode}
        <small>event.keycode</small>
    </div>
    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    ` // eğer space tuşuna basılırsa boşluk görünmemesi için Space yazsın istedik

})