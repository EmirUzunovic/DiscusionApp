//saving elements from dome to variables

const newComment = document.querySelector('#newComment');
//saving elements from dome to variables
const comments = document.querySelector('.comments');

//create element & render 
function renderComments(doc){
  let li = document.createElement('li');
  let divCard = document.createElement('div');
  let divCardContent = document.createElement('div');
  let authorName = document.createElement('span');
  let commentTime = document.createElement('p');
  let commentContent = document.createElement('p');
  let likeButton = document.createElement('button')
  let answeredButton = document.createElement('button')


  li.setAttribute('key', doc.id);
  divCard.classList.add('card');
  divCardContent.classList.add('card-content');
  authorName.classList.add('card-title', 'red-text', 'lighten-1');
  authorName.textContent = "Posted by " +  doc.data().author;
  commentTime.classList.add('grey-text');
  commentTime.textContent = "Posted at " +  doc.data().time;
  commentContent.classList.add('grey-text');
  commentContent.textContent = doc.data().comment;
  likeButton.classList.add('btn', 'red', 'lighten-1');
  likeButton.setAttribute('lock', doc.id);
  likeButton.textContent= "Like"
  answeredButton.classList.add('btn', 'red', 'lighten-1');
  answeredButton.setAttribute('lock', doc.id);
  answeredButton.textContent= "Answered"
 

  li.appendChild(divCard);
  divCard.appendChild(divCardContent);
  divCardContent.appendChild(authorName);
  divCardContent.appendChild(commentTime);
  divCardContent.appendChild(commentContent);
  divCardContent.appendChild(likeButton);
  divCardContent.appendChild(answeredButton);
  
  comments.appendChild(li);

  //saving answered data   
  answeredButton.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("answeredButton fired");
    //this should do something with answered comments to save them 
    // const id = e.target.getAttribute('lock');
    // db.collection('discussions').doc(id).delete();
  });

  //adding likes to comment
  likeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("likeButton fired");
    //this should add new field in comment Likes: number
    // const id = e.target.getAttribute('lock');
    // db.collection('discussions').doc(id).delete();
  });
}



// real-time listener geting data
db.collection('discussions').doc('EXn0SpsVOsl5fE00j94c').collection('comments').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
      if(change.type == 'added'){
        renderComments(change.doc);
      } else if (change.type == 'removed'){
    let li = discusions.querySelector('[key=' + change.doc.id + ']');
    discusions.removeChild(li);     
}
  });
});




//adding a new Comment
newComment.addEventListener('submit' , (e) => {
  e.preventDefault();
  //ading new subCollection to firebase collection 
  db.collection('discussions').doc('EXn0SpsVOsl5fE00j94c').collection('comments').add({
    comment: newComment.content.value,
    author: "test Author",
    time: new Date()
  }).then(function(){
    console.log("document successfully written");
  }).catch(function(error){
    console.log("Error writing document: ", error);
  })
  //reset input fields
  
  newComment.content.value = "";
  console.log("add comment fired")
})


console.log("doslo do kraja discussion")