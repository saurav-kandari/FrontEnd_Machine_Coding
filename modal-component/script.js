const btn = document.getElementById("open-btn") ;
const modal = document.getElementById("modal-container") ;
const closeBtn = document.getElementById("close") ;

btn.addEventListener("click", ()=>{
  modal.style.display = "block" ;
});

closeBtn.addEventListener("click", ()=>{
  modal.style.display = "none" ;
});