const commentContainer = document.getElementById("comment-container") ;

const createReply = () => {
  let div = document.createElement("div") ;
  div.setAttribute('class','reply-input') ;

  div.innerHTML += `<input type="text" class="input-field" placeholder="Type your reply here...">
                    <button id="submit-btn" class="submit-btn">Submit</button>` ;
  return div ;
}

const submitReply = (text) =>{
  let div = document.createElement("div") ;
  div.setAttribute('class','comment-section') ;

  div.innerHTML += `<div class="comment">
                          <span class="cmmnt-body">${text}</span>
                          <span id="reply" class="reply">Add Reply</span>
                    </div>` ;
  return div ;
}

commentContainer.addEventListener("click", (e)=>{
  let replyClicked = e.target.classList.contains("reply") ;
  let submitClicked = e.target.classList.contains("submit-btn") ;
  let commentSection = e.target.closest(".comment-section") ;

  if(replyClicked){
    commentSection.appendChild(createReply()) ;
  }

  if(submitClicked){
    let commentInp = e.target.closest('.reply-input') ;
    let inputVal = commentInp.children[0].value ;
    if(inputVal)
      commentSection.appendChild(submitReply(inputVal)) ;
    commentInp.remove() ;
  }
});