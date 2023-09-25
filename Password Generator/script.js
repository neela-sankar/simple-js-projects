const output=document.querySelector('#output');
const btn=document.querySelector('#btn');
const password=document.querySelector('#len');
const number=document.querySelector('#number');
const capital=document.querySelector('#capital');
const small=document.querySelector('#small');
const symbols=document.querySelector('#symbols');
const frm=document.querySelector('#frm');


//Clipboard copy
btn.addEventListener('click',async()=>{
    const copy=output.value;
    if(copy){
        await navigator.clipboard.writeText(copy);
        alert('Copy to clipboard!')
    }else{
        alert("There is no password to copy");
    }
});

function genRandomChar(min,max){
    const limit=(max-min)+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}

function captialValue(){
    return genRandomChar(65,90);
}

function smallValue(){
    return genRandomChar(97,122);
}

function numberValue(){
    return genRandomChar(48,57);
}

function symbolValue(){
    const symbols="~!@#$%^&*()_+{}:?><*/.-"
    return symbols[Math.floor(Math.random()*symbols.length)];
}

const functionArray=[
    {
        element:number,
        fun:numberValue
    },
    {
        element:capital,
        fun:captialValue
    },
    {
        element:small,
        fun:smallValue
    },
    {
        element:symbols,
        fun:symbolValue
    },
];



frm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const limit=password.value;
    let generatedPassword="";

    const funArray=functionArray.filter(({element})=>element.checked);

    for(i=0;i<limit;i++){
        const index=Math.floor(Math.random()*funArray.length);
        const letter=funArray[index].fun();
        generatedPassword+=letter;
    }

    output.value=generatedPassword;
});