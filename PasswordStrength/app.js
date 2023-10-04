const background=document.getElementById("background");
const passwordLabel=document.getElementById("passwordLabel");
const passwordInput=document.getElementById("password");

passwordInput.addEventListener("input", (e) => {
    const length = e.target.value.length;  // inputa girilen degerin uzunlugunu al
    const bgBlur= 20 - length * 2;  // 20den inputa deger girdikce girilen deger uzunlugunu cikarttik (10 karakterli sifre girildigini dusunerek 2 ile carpiyoruz)
    background.style.filter = `blur(${bgBlur}px)`; // inputa deger girdikce arkaplan netlesecek

    if(length >= 10){
        passwordLabel.style.color="red";  
        passwordLabel.innerText="Strong Password";  // 10 karakterli sifre girdigi zaman label'a kirmizi renkte Strong Password yazacak

    }
})