const inputs = document.getElementById("input-container") ;

inputs.addEventListener("input",(e)=>{
  let target = e.target ;
  if(target.value != ""){
    let value = parseInt(target.value) ;
    if(isNaN(value)){
      target.value = "" ;
    }else{
      let next = target.nextElementSibling ;
      if(next){
        next.focus() ;
      }
    }
  }
}) ;

inputs.addEventListener("keyup", (e)=>{
  let target = e.target ;
  let key = e.key.toLowerCase() ;
  if(key == 'backspace' || key == 'delete'){
    let prev = target.previousElementSibling ;
    if(prev){
      prev.focus() ;
    }
  }
});