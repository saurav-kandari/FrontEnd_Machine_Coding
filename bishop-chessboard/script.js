const table = document.getElementById("table") ;

for(let i=0; i<8; i++){
  let white = i%2==0 ? true: false ;
  let tr = document.createElement("tr") ;
  for(let j=0; j<8; j++){

    let td = document.createElement("td") ;
    if(white){
      td.setAttribute("class","box white") ;
    }else{
      td.setAttribute("class","box black") ;
    }
    td.setAttribute("data-index", `${i}-${j}`) ;
    tr.appendChild(td) ;
    white = !white ;
  }
  table.appendChild(tr) ;
}

table.addEventListener("mouseover", (e)=>{
  let pos = e.target.dataset.index.split('-').map((val)=> parseInt(val)) ;
  let row = pos[0] ;
  let col = pos[1] ;
  let str = `${row}-${col}` ;
  let hash = {} ;

  hash[str] = true ;

  hash = topLeft(row,col,hash) ;
  hash = topRight(row,col,hash);
  hash = bottomLeft(row,col,hash);
  hash = bottonRight(row,col,hash) ;

  const cells = document.querySelectorAll("td") ;

  for(let i=0;i< cells.length ;i++){
    cells[i].classList.remove("highlighted") ;
    cells[i].classList.remove("bishop-cell") ;
  }

  for(let i=0;i<cells.length; i++){
    let str = cells[i].dataset.index ;
    if(`${row}-${col}` == str){
      cells[i].classList.add("bishop-cell") ;
    }
    else if(hash[str]){
      cells[i].classList.add("highlighted") ;
    }
  }
}) ;

table.addEventListener("mouseleave", ()=>{
  const cells = document.querySelectorAll("td") ;

  for(let i=0;i<cells.length ;i++){
    cells[i].classList.remove("highlighted") ;
    cells[i].classList.remove("bishop-cell") ;
  }
})

const topLeft = (row,col,hash) =>{
  row--;
  col-- ;
  while(row>=0 && col>=0){
    let key = `${row}-${col}` ;
    hash[key] = true ;
    row--;
    col-- ;
  }
  return hash ;
}

const topRight = (row,col,hash) =>{
  row--;
  col++ ;
  while(row>=0 && col<8){
    let key = `${row}-${col}` ;
    hash[key] = true ;
    row--;
    col++ ;
  }
  return hash ;
}

const bottomLeft = (row,col,hash) =>{
  row++;
  col-- ;
  while(row<8 && col>=0){
    let key = `${row}-${col}` ;
    hash[key] = true ;
    row++;
    col-- ;
  }
  return hash ;
}

const bottonRight = (row,col,hash) =>{
  row++;
  col++ ;
  while(row<8 && col<8){
    let key = `${row}-${col}` ;
    hash[key] = true ;
    row++;
    col++ ;
  }
  return hash ;
}