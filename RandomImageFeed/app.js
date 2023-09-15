const container=document.querySelector(".container");
const unsplashURL="https://source.unsplash.com/random/";  // bu site ile rastgele görseller çekeceğiz

const rows=9; // kaç görsel olacak(9)

for(let i =0; i<rows*3; i++) // bir satırda 3 tane göresel olacak
{
    const img=document.createElement("img"); // html sayfasına img'leri yazacağız
    img.src=`${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);
}

function getRandomNumber()
{
    return Math.floor(Math.random() * 10) + 300; //300px boyutundaki görselleri istediğimiz için 300 de ekledik
}

function getRandomSize()
{
    return `${getRandomNumber()}x${getRandomNumber()}}`; // örneğin 301x300 boyutunda bir görsel boyutu döndürecek
}