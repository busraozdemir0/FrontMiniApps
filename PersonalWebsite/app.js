const themeIcon=document.getElementById("theme");

themeIcon.onclick = () => {
    document.body.classList.toggle("dark-theme");  // icon'a tiklaninca dark mode'a gececek
    if(document.body.classList.contains("dark-theme")){  // eger body'de dark-theme classi varsa iconu fa-sun yapsin
        themeIcon.classList="fa-solid fa-sun fa-2x";
    }else {                                             // yoksa fa-cloud-rain yapsin
        themeIcon.classList="fa-solid fa-cloud-rain fa-2x";
    }
}