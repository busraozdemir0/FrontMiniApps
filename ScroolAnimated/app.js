const boxes=document.querySelectorAll(".box");

window.addEventListener("scroll",checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom=(window.innerHeight/6)*4;

    boxes.forEach(box => {
        const boxTop=box.getBoundingClientRect().top; // getBoundingClientRect() => öğenin boyutu ve görünüm alanına göre bize konum belirliyor.

        if(boxTop < triggerBottom)
        {
            box.classList.add("show");  // scroll ile aşağı doğru indikçe box'ların classlarına show classı eklenecek
        }
        else{
            box.classList.remove("show"); // scroll ile yukarı doğru çıktıkça box'ların classlarından show classı kaldırılacak
        }
    })
}