const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener("dragstart" , dragStart); // gorsel suruklenmeye basladigi an calisacak

function dragStart(){  // gorsel suruklenmeye basladigi an calisacak
    this.className += " hold"; // var olan classin ustune hold classini ekle
    setTimeout(() => (this.className= "invisible"), 0);
}


fill.addEventListener("dragend" , dragEnd); // gorsel suruklenme islemi bittigi an

function dragEnd(){  
    this.className="fill";
}

for(const empty of empties)  // bos olan empty divlerin icinde dolas
{
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("drop", dragDrop);
}

function dragOver(e){
    e.preventDefault();  // sayfa yenilenmemesi icin
}

function dragLeave(){
    this.className = "empty"; 
}

function dragEnter(e){
    e.preventDefault();
    this.className += " hover";  // var olan classin ustune hover classini ekle
}

function dragDrop(){  // baska kutuya surukleyip biraktigimizda
    this.className ="empty";  // drop oldugunda class sadece empty olsun
    this.append(fill);
}