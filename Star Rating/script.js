const starContainer = document.getElementById("star-container") ;
const stars = document.querySelectorAll(".star") ;
const count = document.getElementById("count") ;
let filled = 0 ;

starContainer.addEventListener("click",(e)=>{
  let currentFilled = e.target.dataset.index ;
  
  for(let i=0;i<filled;i++){
    stars[i].classList.remove('selected') ;
  }

  for(let i=0;i<currentFilled;i++){
    stars[i].classList.add('selected') ;
  }

  filled = currentFilled ;

  count.innerHTML = `Rating Count: ${filled}` ;
}) ;

starContainer.addEventListener("mouseover",(e)=>{
  let currentFilled = e.target.dataset.index ;
  
  for(let i=0;i<5;i++){
    stars[i].classList.remove('selected') ;
  }

  for(let i=0;i<currentFilled;i++){
    stars[i].classList.add('selected') ;
  }

}) ;

starContainer.addEventListener("mouseleave",(e)=>{
  let currentFilled = e.target.dataset.index ;
  
  for(let i=0;i<5;i++){
    stars[i].classList.remove('selected') ;
  }

  for(let i=0;i<filled;i++){
    stars[i].classList.add('selected') ;
  }

}) ;