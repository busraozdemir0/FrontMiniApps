const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

// setTimeout() => Milisaniye cinsinden hesaplama yapar ve belirlenen süre sonunda fonksiyonu çalıştırır.
// setInterval() =>  Fonksiyonu belirli aralıklar ile sürekli çalışmasını sağlar.

textarea.addEventListener("keyup", (e) => {  // bir tuşa bastığımız anda
    createTags(e.target.value);

    if(e.key === "Enter"){  // eğer Enter tuşuna basılmışsa
        setTimeout(() => {    // 10 ms boyunca randomSelect fonk çalışacak
            e.target.value="";
        },10) 

        randomSelect();
    }

})


function createTags(input) {
    //console.log(input);
    const tags = input.split(",")  // girilen değerleri virgül ifadelerinden itibaren ayır
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim() )

    //console.log(tags)

    tagsEl.innerHTML=''
    tags.forEach((tag) => {  // her bir tagı dolaş
        const tagEl=document.createElement("span")  // her bir tag için span elementini yarat ve bu elemente tag classını ekle
        tagEl.classList.add("tag");
        tagEl.innerHTML=tag
        tagsEl.appendChild(tagEl);
    })
}


function randomSelect()
{
    const times=30;

    const interval = setInterval(() => {  // belirlenen süre boyunca random tag seçme fonksiyonunu çalıştır ve seçilen taga highlight classını ata
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag);
        }, 100)
    }, times*100)
}

function pickRandomTag()  // random bir tag seçecek olan fonksiyon
{
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)]  // yazılan tag uzunluğunca random bir sayı üret ve floor ile tam sayı olmasını sağla
}

function highlightTag(tag){
    tag.classList.add("highlight");  // taglerin classlarına ulaş ve highlight classını ekle
}

function unHighlightTag(tag){ 
    tag.classList.remove("highlight");   // taglerin classlarına ulaş ve highlight classını kaldır
}