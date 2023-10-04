const contents=document.querySelectorAll(".content");
const navBtn=document.querySelectorAll("nav ul li");  // nav icerisindeki ul iceisindeki tum li etiketlerini al


navBtn.forEach((btn, idx) => {
    btn.addEventListener("click", () => {  // navigation kismindaki butonlar icerisinde hangisine tiklanirsa id ile gonder
        hideAllContents();  // basilan buton haricindeki icerikleri gizle
        hideAllBtns();  // basilan buton haricindeki butonlari gizle

        btn.classList.add("active");  // basilan butona active classi ekle
        contents[idx].classList.add("show"); // iceriklerden hangisine basildiysa(idx ile hangisine basildigini belirttik) ona show classi ekle
    });
})

function hideAllContents(){
    contents.forEach((content) => content.classList.remove("show"));  // show classini iceriklerden kaldir(hangi content'de show classi varsa)
}

function hideAllBtns(){
    navBtn.forEach((item) => item.classList.remove("active"));  // hangi buton(li classinda) icerisindeki classta active classi varsa kaldir
}