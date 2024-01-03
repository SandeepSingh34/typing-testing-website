

let textarea=document.getElementById("tarea");
let timer=document.getElementById("timer");
let btn=document.getElementById("btn");
let ok=document.getElementById("ok");
let showR=document.getElementById("showR");
let speedData=document.getElementById("sd");
let spd=document.getElementById("spd");
let paragraph=document.getElementById("dt");
let wrong=document.getElementById("wrong");
let ref=document.getElementById("ref");
let printingResult=document.getElementById("printing-result");

//data of story
dataS=[
    "Technology is the application of knowledge for achieving practical goals in a reproducible way. The word technology can also mean the products resulting from such efforts, including both tangible tools such as utensils or machines, and intangible ones such as software.",
    "April 2021. Everyday, my country, India, is touching new heights in the number of Covid19 cases. Every day, more and more people are dying. Every day, we are hearing that someone we know has been infected. After one year, we are back in square one, that too a grimmer one. How did we reach here?",
   "I had always wondered why it is a ritual in our society that a woman goes to her mother’s home to deliver her child. When I was pregnant with my daughter last year and once she was born in the first month of this year, I got my answers. The reason is the mother of the new mother, the new grandmother. And the truth that nobody can take care of you better than your own mother, especially when you are with child and after childbirth.",
   "Short moral stories are best for children who have been reading for generations. These short stories with morals are popular in different languages and parts of the world. A moral story depicts practical situations excitingly and carries a message that imbibes moral values in the children. Different short moral stories teach different lessons to kids. The stories also make children responsible, respectful, empathetic, and honest from a very early age."
]


randomData=Math.floor(Math.random()*dataS.length-1)+1;
paragraph.innerHTML=dataS[randomData];

//timer
let increm=1;
let tim=()=>{
     timer.innerHTML=timer.innerHTML-1;
     increm=increm+1;
     if(timer.innerHTML<1)
     {  
        
        textarea.setAttribute("readonly","readonly");
        showR.style.display="flex";
        speedD=Math.round((textarea.value.length/5))/(30/60)+" wpm";
        speedData.innerHTML=speedD;
        clearInterval(clearinter);
     }
  
}
let clearinter;
a=1;
w=0;
let type=()=>{
   
    if(a==1)
    {
        clearinter=setInterval(tim,1000);
        a=a+1;
    }
    if(increm==1)
    {
        spd.innerHTML=0;
    }
    else{
   spd.innerHTML=Math.round((textarea.value.length/5)/(increm/60))+" wpm";
    }



   
}

//restart writing
let restart=()=>{
  textarea.removeAttribute("readonly");
}
textarea.addEventListener("keypress",type);

btn.addEventListener("click",restart);



//show data
let hide=()=>{
    randomData=Math.floor(Math.random()*dataS.length-1)+1;
    paragraph.innerHTML=dataS[randomData];

    showR.style.display="none";
     textarea.value="";
   a=1;
   timer.innerHTML=30;
   textarea.removeAttribute("readonly");
   spd.innerHTML=0;
}
ok.addEventListener("click",hide);


//refresh the contents 
let refunction=()=>{
    randomData=Math.floor(Math.random()*dataS.length-1)+1;
    paragraph.innerHTML=dataS[randomData];

}

ref.addEventListener("click",refunction);
let bod=document.getElementById("body").innerHTML;
let printing=()=>{
    document.getElementById("body").innerHTML=showR.innerHTML;
    window.print();
   window.location.reload();
}

printingResult.addEventListener("click",printing);