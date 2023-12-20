const gameContainer = document.getElementById("game-container") ;
const rstBtn = document.getElementById("reset") ;
const result = document.getElementById("result") ;

let chance = true ;
let allFilled = 0 ;
let hash = {} ;

rstBtn.addEventListener("click", ()=>{
  const cells = document.querySelectorAll(".cell") ;
  cells.forEach((cell)=>{
    if(cell.classList.contains("cell-withX")){
      cell.classList.remove("cell-withX") ;
    }else{
      cell.classList.remove("cell-withO") ;
    }
  }) ;
  chance = true ;
  hash = {} ;
  allFilled = 0 ;
  result.innerHTML = "" ;
  gameContainer.style.pointerEvents = "auto" ;
}) ;

gameContainer.addEventListener("click", (e)=>{

  if(e.target.dataset.index){
    let idx = e.target.dataset.index.split("-").map(val=> parseInt(val)) ;
    let x = idx[0] ;
    let y = idx[1] ;
    let str = `${x}-${y}` ;
    if(!hash[str]){
      if(chance){
        e.target.classList.add("cell-withX") ;
        hash[str] = "X" ;
      }else{
        e.target.classList.add("cell-withO") ;
        hash[str] = "O" ;
      }
      allFilled+=1 ;
      chance = !chance ;

      let win = checkWinStatus() ;

      if(allFilled == 9 || win.includes("won")){
        result.innerHTML = win ;
        gameContainer.style.pointerEvents = "none" ;
      }
    }
  }
}) ;

const checkWinStatus = () =>{
  
  //Check Rows
  for(let i=0;i<3;i++){
    let set = new Set() ;
    let player ="" ;
    for(let j=0;j<3;j++){
      let str = `${i}-${j}` ;
      set.add(hash[str]);
      player = hash[str] ;
    }
    if(set.size == 1 && player){
      return `Player ${player} won !` ;
    }
  }

  //Check column
  for(let i=0;i<3;i++){
    let set = new Set() ;
    let player ="" ;
    for(let j=0;j<3;j++){
      let str = `${j}-${i}` ;
      set.add(hash[str]);
      player = hash[str] ;
    }
    if(set.size == 1 && player){
      return `Player ${player} won !` ;
    }
  }

  let i=0, j =0, player="";
  let set = new Set() ;
  while(i<3&&j<3){
    let str = `${j}-${i}` ;
    set.add(hash[str]);
    player = hash[str] ;
    i++;
    j++ ;
  }
  if(set.size == 1 && player){
    return `Player ${player} won !` ;
  }

  i=0, j=2, player="" ;
  set.clear() ;
  while(i<3 && j>=0){
    let str = `${j}-${i}` ;
    set.add(hash[str]);
    player = hash[str] ;
    i++;
    j-- ;
  }

  if(set.size == 1 && player){
    return `Player ${player} won !` ;
  }

  return `Match Drawn !!! `;
}