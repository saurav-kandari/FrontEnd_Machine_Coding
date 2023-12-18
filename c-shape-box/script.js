const boxContainer = document.getElementById("box-container") ; 
const boxes = document.querySelectorAll(".box") ;
let queue = [] ;

boxContainer.addEventListener("click", (e)=>{
  let idx = e.target.dataset.index ;

  if(idx != undefined && !queue.includes(idx)){
    queue.push(idx);
    boxes[idx].classList.add("checked") ;
  }

  if(queue.length == 7){
    let count = 0 ;
    while(queue.length > 0){
      let idx = queue.shift();
      count++;
      setTimeout(()=>{
        boxes[idx].classList.remove("checked") ;
      },count*500)
    }
  }

})