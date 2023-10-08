
const icon=document.getElementById("icon");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");  // toggle bir sekilde body'e dark-theme classini ekle

    if(document.body.classList.contains("dark-theme")){  // dark-theme body classList'inde var mi?
        icon.classList = "fa-solid fa-sun fa-2x";
    }else {
        icon.classList = "fa-solid fa-moon fa-2x";
    }

    localStorage.setItem("theme", document.body.classList);  // body'deki classlisti localStorage icerisine kaydettik.
    localStorage.setItem("icon", icon.classList);  // icon'un classlistini localStorage icerisine kaydettik.
})

if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));  // localStorage icerisindeki theme'yi body.classList'ine ekle
    icon.classList = localStorage.getItem("icon");  // localStorage icerisindeki icon'u icon.classList'ine ekle
}