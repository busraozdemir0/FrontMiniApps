const quizData = [
    {
      question: 'En aktif Twitter kullanıcısı?',
      a: 'Fatih Kadir Akın',
      b: 'İlker Kurtel',
      c: 'Didem Küçükkaraaslan',
      d: 'Azmi Mengü',
      e: 'Onur Aslan',
      correct: 'a',
    },
    {
      question: 'En komik Twitter kullanıcısı?',
      a: 'Fatih Kadir Akın',
      b: 'İlker Kurtel',
      c: 'Didem Küçükkaraaslan',
      d: 'Azmi Mengü',
      e: 'Onur Aslan',
      correct: 'b',
    },
    {
      question: 'En gezen Twitter kullanıcısı?',
      a: 'Fatih Kadir Akın',
      b: 'İlker Kurtel',
      c: 'Didem Küçükkaraaslan',
      d: 'Azmi Mengü',
      e: 'Onur Aslan',
      correct: 'd',
    },
    {
      question: 'En üretken Twitter kullanıcısı?',
      a: 'Fatih Kadir Akın',
      b: 'İlker Kurtel',
      c: 'Didem Küçükkaraaslan',
      d: 'Azmi Mengü',
      e: 'Onur Aslan',
      correct: 'c',
    },
    {
      question: ' Co-founder zetupme?',
      a: 'Fatih Kadir Akın',
      b: 'İlker Kurtel',
      c: 'Didem Küçükkaraaslan',
      d: 'Azmi Mengü',
      e: 'Onur Aslan',
      correct: 'e',
    },
]

const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");

const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const e_text=document.getElementById("e_text");

const submitBtn=document.getElementById("submit");

let currentQuiz=0;  // uzerinde oldugumuz soru numarasi
let score=0;

loadQuiz()

function loadQuiz(){
    const currentQuizData=quizData[currentQuiz]

    deselectedAnswers();

    questionEl.innerText=currentQuizData.question;  // su anda uzerinde oldugumuz soru gelecek
    a_text.innerText=currentQuizData.a;  // su anda uzerinde oldugumuz sorunun a sikkini buraya yansitacak
    b_text.innerText=currentQuizData.b;  
    c_text.innerText=currentQuizData.c;  
    d_text.innerText=currentQuizData.d;  
    e_text.innerText=currentQuizData.e;  
}

function deselectedAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);  // secilmemis siklarin check kisimlarinin false oldugunu belirttik
}

function getSelected(){
    let answer;

    answerEls.forEach(answerEl => {  // siklari dolas ve hangisi secilmisse(true'ysa) onu sikkin id'sini answer degiskeni icerisine at
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener("click",() => {
    const answer=getSelected();  // hangi cevaba tiklandiysa onun id'sine eristigimiz fonksiyon

    //console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){  // cevabimiz uzerinde olunan sorunun cevabina esitse scoru bir arttir
            score++;
        }
        currentQuiz++;  // butona tiklandiginda soru sayisini arttirsin
    
        if(currentQuiz<quizData.length){  // su anki soru numarasi quizData'da yer alan soru sayisindan azsa sorulari yuklemeye devam
            loadQuiz();
        }
        else{  // sorular bittiyse sonucu ekranda goster ve tekrar dene butonu olusturarak sayfanin yeniden yuklenmesini saglayalim
            quiz.innerHTML=`
                <h2> Test tamamlandı, ${score * 20} puan aldınız.🥳 </h2>
                <button class="submit" onClick="location.reload()">Tekrar Dene 🌀</button>
                `
        }
    }
})

