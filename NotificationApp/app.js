const notifContainer = document.querySelector(".notifContainer");
const button = document.getElementById("button");

const notifications = [
    'Whatsapp Bildirim',
    'Twitter Bildirim',
    'YouTube Bildirim',
    'LinkedIn Bildirim',
    'Medium Bildirim',
    'Instagram Bildirim',
    'GitHub Bildirim'
]

const colors = ['red', 'black', 'green', 'blue', 'gray', 'orange', 'purple', 'pink']

button.addEventListener("click", () => {
    createNotification();
})

function createNotification(){
    const notif = document.createElement("div");
    notif.classList.add( "notif");  // notif classina sahip olan div yarattik
    notif.classList.add(getRandomColor());  // rastgele renk ile arkaplan rengi degisecek

    notif.innerText=getRandomNotif();  // bildirim icerigini rastgele uretilen bildirim ile dolduracak

    notifContainer.appendChild(notif);  // notifContainer'in altina notif'i ekle

    setTimeout(() => {
        notif.remove()
    }, 3000)  // 3 saniye sonra random bir sekilde olusturulan bildirim kaldirilsin
}

function getRandomNotif(){
    // kac tane bildirim varsa o sayiya kadar random bir sayi uretmesini sagliyoruz (Math.floor ile tam sayi olmasini sagladik)
    return notifications[Math.floor(Math.random() * notifications.length)];
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}