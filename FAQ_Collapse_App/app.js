const toggles=document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {  // her bir collapse içerisinde gez
    toggle.addEventListener("click", () => {  // üzerinde bulunan collapse açıldığında
        toggle.parentNode.classList.toggle("active");  // faq-toggle'ın bir üst düğümüne (faq classlı olana) active classı ekle
    })
})