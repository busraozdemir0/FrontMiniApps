const container=document.getElementById("container");

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;  // 500 tane kare olacak

for(let i = 0; i< SQUARES; i++){
    const square=document.createElement("div");
    square.classList.add("square");  // 500 tane classi square olan div olusturuldu

    square.addEventListener("mouseover", () => setColor(square)) // mouse ile karelerin ustune gelince
    square.addEventListener("mouseout", () => removeColor(square)) // mouse ile karelerin ustunden ayrilinca

    container.appendChild(square);  // olusturulan divler container altina alt dugum olarak eklendi
}

function setColor(div){
    const randomColor=getRandomColor();  // belirttigimiz renklerden random bir sekilde uretilsin
    div.style.backgroundColor = randomColor;
    div.style.boxShadow= `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function removeColor(div){  // mouse ile kare ustunden ayrilinca kutularin rengi eski haline donecek
    div.style.backgroundColor = "#111";
    div.style.boxShadow= "0 0 2px #000";
}