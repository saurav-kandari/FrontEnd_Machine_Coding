let totalCount = 0 ;
let countVal = 1 ;
const counter = document.getElementById("count") ;
const incBtn = document.getElementById("increment-btn") ;
const dncBtn = document.getElementById("decrement-btn") ;
const rstBtn = document.getElementById("reset") ;
const incInput = document.getElementById("increment") ;

counter.innerHTML=totalCount ;

incBtn.addEventListener("click", ()=>{
  totalCount+=countVal ;
  counter.innerHTML=totalCount ;
});

dncBtn.addEventListener("click", ()=>{
  totalCount-=countVal ;
  if(totalCount<0)
    totalCount=0 ;
  counter.innerHTML=totalCount ;
});

rstBtn.addEventListener("click", ()=>{
  totalCount=0 ;
  counter.innerHTML=totalCount ;
});

incInput.addEventListener("change", (e)=>{
  countVal = parseInt(e.target.value) ;
});