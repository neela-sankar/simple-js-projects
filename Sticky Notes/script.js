const containerElement = document.querySelector('.container');
const btn = document.querySelector('.btn');

function StickyStorage(){
    return JSON.parse(localStorage.getItem('sticky')||"[]");
}

StickyStorage().forEach(element => {
    const textElement=createTextArea(element.id,element.content)
    containerElement.insertBefore(textElement,btn);
});

function createTextArea(id,content){
const textElement = document.createElement('textarea');
textElement.classList.add('sticky');
textElement.value=content;

textElement.addEventListener('change',()=>{
    updateNote(id,textElement.value)
});

textElement.addEventListener('dblclick',()=>{
    const check=confirm("Are you sure to Delete?");
    if (check){
        deleteNotes(id,textElement)
    }
});

return textElement;
}

function AddSticky(){
    const notes=StickyStorage();
    const newNotes={
        id:Math.floor(Math.random()*100000),
        content:""
    }

    const textElement=createTextArea(newNotes.id,newNotes.content);
    containerElement.insertBefore(textElement,btn);
    notes.push(newNotes);
    saveNotes(notes);
}


btn.addEventListener("click",()=>AddSticky());

function saveNotes(notes){
    localStorage.setItem('sticky',JSON.stringify(notes));
}

function updateNote(id,content){
    const notes=StickyStorage();
    const updateElement=notes.filter((note)=>note.id==id)[0];
    updateElement.content=content;
    saveNotes(notes);
}

function deleteNotes(id,textElement){
    const notes=StickyStorage().filter((note)=>note.id!=id);
    saveNotes(notes);
    containerElement.removeChild(textElement);
}

