const nav=document.querySelector(".nav");

const add=150;

window.addEventListener("scroll", () => {
     //console.log(window.scrollY, nav.offsetHeight)
    if(window.scrollY > nav.offsetHeight + add){  // ekran biraz assagi indiginde nav kismina move classi ekle
        nav.classList.add("move");
    }else{
        nav.classList.remove("move");
    }
})