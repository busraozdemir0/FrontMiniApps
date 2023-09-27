
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote())  // ekleme butonuna basilinca asagidaki islemler gercekleserek yeni not sayfasi eklenecek

function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
    <img src="./images/pin.png" alt="pin" >
        <div class="tools">
            <button class="edit">
                <i class="fa-solid fa-pencil"></i> 
            </button>
            <button class="delete">
                <i class="fa-solid fa-eraser"></i> 
            </button>
        </div>

        <div class="main ${text ? "" : "hidden"}">

        </div>

    <textarea class="${text ? "hidden" : ""}" ></textarea>
    `

    const deleteBtn= note.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {  // silme butonuna basilinca not sayfasini kaldiracak
        note.remove();

        updateLS();
    })


    const editBtn=note.querySelector(".edit"); // note sayfasi icerisideki edit classina sahip elementi cektik
    const main=note.querySelector(".main");
    const textArea=note.querySelector("textarea");

    editBtn.addEventListener("click", () => { // edit butonuna basinca main ve textArea kismi aktif hale gelsin tekrar basilinca pasif hale gelsin
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })

    textArea.value=text;
    main.innerHTML = marked(text);  // marked kutuphanesi sayesinde # ile yazdigimizda fontu buyuk bir sekilde gorunecek

    textArea.addEventListener("input", (e) => {
        const {value}=e.target;
        main.innerHTML=marked(value);

        updateLS();  // textarea icine yazilanlari local storage icerisine marked bicimde kaydet
    })

    document.body.appendChild(note);  // yukarida note icine ekledigimiz html kismini appendChild diyerek sayfada gorunmesini sagliyoruz
}

function updateLS(){  // verileri local storage icerisine kaydetme(sayfa yenilendiginde gitmemesi icin)
    const notesText = document.querySelectorAll("textarea");  // birden fazla not olabilecegi icin textarea'lari All ile seciyoruz

    const notes=[];

    notesText.forEach((note) => notes.push(note.value)); // notesText icerisindeki notlari notes dizisi icerisine at

    localStorage.setItem("notes",JSON.stringify(notes)); // notes dizisini stringify yap
}

const notes= JSON.parse(localStorage.getItem("notes")); // local storage icerisindekileri parse et

if(notes){
    notes.forEach(note => addNewNote(note)); // sayfa yenilense bile notes icerisindekileri getir
}
