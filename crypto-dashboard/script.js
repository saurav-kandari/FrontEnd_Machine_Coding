const container = document.getElementById("card-container") ;
let data ;

async function getData(){
  const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false") ;
  
  data = await response.json() ;
  loadData() ;
}
getData() ;

const loadData = () =>{
  for(let i=0;i<data.length;i++){
    let className = data[i].market_cap_change_percentage_24h < 0 ? 'negative' : 'positive';
    container.innerHTML+= `<div class="card">
                          <div class="image">
                            <img class="img" src="${data[i].image}">
                          </div>
                          <div class="details">
                            <div class="row">
                              <span class="name">${data[i].name}</span>
                              <span class="price">${data[i].current_price}</span>
                            </div>
                            <div class="row">
                              <span class="symbol">${data[i].symbol}</span>
                              <span class="percent ${className}">${data[i].market_cap_change_percentage_24h}%</span>
                            </div>
                          </div>
                        </div>`
  }
}