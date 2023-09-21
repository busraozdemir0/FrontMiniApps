const jokeEl = document.getElementById("joke");
const jokeBtn=document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();


// await ile kullanımı (1. yöntem)
async function generateJoke(){
        const config={
            headers:{
                Accept: "application/json",  // cevap olarak json formatında gelsin
            },
        }

        const res=await fetch("https://icanhazdadjoke.com/", config)  // await => sıralı ve senkronize bir şekilde çalıştırır

        const data=await res.json();

        jokeEl.innerHTML=data.joke;
    }


// then ile kullanımı(2. yöntem)
// function generateJoke(){

//     const config={
//         headers:{
//             Accept: "application/json",  // cevap olarak json formatında gelsin
//         },
//     }

//     fetch("https://icanhazdadjoke.com/", config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEl.innerHTML=data.joke;
//         })
// }