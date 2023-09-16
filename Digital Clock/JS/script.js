function time(){
    var hrs=new Date().getHours();
    var min=new Date().getMinutes();
    var sec=new Date().getSeconds();


    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;

    const currentTime=document.querySelector(".current-time");
    currentTime.innerHTML=hrs+' : '+min+' : '+sec;
    console.log(hrs+' : '+min+' : '+sec);
}

time();

setInterval(time,1000);