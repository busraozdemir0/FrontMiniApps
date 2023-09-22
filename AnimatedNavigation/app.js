const nav=document.getElementById("nav");
const toggle = document.getElementById("toggle");


// toggle butonuna basınca toggle bir şekilde nav'a active classını ekle
toggle.addEventListener("click", () => nav.classList.toggle("active"));  