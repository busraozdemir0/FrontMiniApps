const panels=document.querySelectorAll(".panel");

panels.forEach(panel=> {
    panel.addEventListener("click", () => {

        removeActive(); // aktif bulunan tüm classları silsin
        panel.classList.add("active"); // resme tıklanınca tıklanılan resme active classı eklensin
    })
})

function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}