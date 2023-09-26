const counters=document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText="0";

    const updateCounter = () => {
        const target=Number(counter.getAttribute("data-target"));  // data-target ifadelerini çekiyoruz. String ifade döndüğü için biz Number'a dönüştürüyoruz
    
        const c =  +counter.innerText; // başına + ekleyerek Number ifadeye çevirmiş olduk

        const increment = target / 300;  // arttırım ifadesi(300e bölmemizin sebebi hızlı bir şekilde artması için)

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}` // c ve arttırım ifadesini toplayıp ceil ile tamsayıya dönüştürdük
            setTimeout(updateCounter, 1); // belli bir süre içerisinde gerçekleşmesi için
        }
        else{  // c ifadesi targettan büyükse target'ı yaz ve bırak
            counter.innerText=target
        }
    }

    updateCounter();
})