const labels=document.querySelectorAll(".form-control label");

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("") // harfleri birbirinden ayır
        .map( (letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)  // <span style="transition-delay: 0ms">E</span>
        .join(''); // en son harfleri birleştir
})