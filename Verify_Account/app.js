
const codes=document.querySelectorAll(".code");  // tum inputlari al

codes[0].focus()  // baclangicta ilk input tiklanmis bir sekilde dursun

codes.forEach((code, idx) => {
    code.addEventListener("keydown", (e) => {

        if(e.key >= 0 && e.key<=9){  // basilan tus 0 ile 9 arasindaysa
            codes[idx].value="";  // input icerisinde birden fazla rakam olsa bile tek seferde bosaltmasi icin
            setTimeout(() => codes[idx+1].focus(), 10);
        }
        else if(e.key === "Backspace"){  // basilan tus geri(silme tusu) ise
            setTimeout(() => codes[idx-1].focus(), 10);
        }
    })
})