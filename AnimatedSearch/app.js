const search=document.querySelector(".search");
const input=document.querySelector(".input");
const btn=document.querySelector(".btn");

btn.addEventListener("click", () => {
    search.classList.toggle("active"); // butona bastığımızda search'a active classı eklenecek tekrar butona bastığımızda active classı kaldırılacak (toggle sayesinde)
    input.focus();
})