const ratings = document.querySelectorAll(".rating");
const btn = document.getElementById("send");
const panel = document.querySelector(".panel-container");

let selectedRating = "Geri bildirim seçmediniz!";  // geri bildirim seçmezse varsayilan donecek olan mesaj

ratings.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        if (e.target.parentNode.classList.contains("rating")) {
            removeActive();       // ratinglerden herhangi birine tiklandiktan hemen sonra tum active classlari kaldirilsin
            e.target.parentNode.classList.add("active");
            //console.log(e.target.nextElementSibling.innerHTML);  
            
            // hangi rating secildiyse onun small etiketini selectedRating'e atayacagiz
            selectedRating = e.target.nextElementSibling.innerHTML;  // o anki ratingin sonraki elemaninin kardesi
        }
    })
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {  // tum ratingleri gezecek ve hangisinde active classi varsa onu kaldiracak
        ratings[i].classList.remove("active");
    }
}

btn.addEventListener("click", () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Geri Bildiriminiz Bizim İçin Değerli</strong>
        <br>
        <strong> Geri Bildiriminiz: ${selectedRating} </strong>
        <p> Geri bildiriminizi kendimizi geliştirmek için kullanacağız. </p> 
    `;
})