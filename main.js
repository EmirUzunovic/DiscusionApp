
//initialize materializecss
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDL9CSmtK9wEImO8CDG3dvvVoalPFSzHiE",
  authDomain: "discussionapp-e4ba4.firebaseapp.com",
  databaseURL: "https://discussionapp-e4ba4.firebaseio.com",
  projectId: "discussionapp-e4ba4",
  storageBucket: "discussionapp-e4ba4.appspot.com",
  messagingSenderId: "845748877433"
};
firebase.initializeApp(config);
const db = firebase.firestore();

//saving elements from dome to variables
const discusions = document.querySelector('#discusions');

//create element & render 
function renderDiscusion(doc){
  let li = document.createElement('li');
  let divCard = document.createElement('div');
  let divCardContent = document.createElement('div');
  let discusionTopic = document.createElement('span');
  let discusionContent = document.createElement('p');
  let postedBy = document.createElement('p');
  let postedAt = document.createElement('p');
  let goToDiscussionButton = document.createElement('a')
  let goToDiscussionIcon = document.createElement('i')
  let deleteButton = document.createElement('a')
  let deleteIcon = document.createElement('i')

  li.setAttribute('key', doc.id);
  divCard.classList.add('card', 'blue', 'white-text');
  divCardContent.classList.add('card-content');
  discusionTopic.classList.add('card-title', 'center-align');
  discusionTopic.textContent = doc.data().title;
  discusionContent.classList.add('truncate');
  discusionContent.textContent = doc.data().content;
  postedBy.textContent = "Posted by " +  doc.data().author;
  postedAt.textContent = "Posted at " +  doc.data().time;
 
  goToDiscussionButton.classList.add('btn-floating', 'right', 'center-align', 'light', 'red', 'lighten-1', 'waves-effect', 'waves-dark', 'z-depth-0');
  goToDiscussionButton.setAttribute('href', 'discusion.html');
  goToDiscussionIcon.classList.add('material-icons');
  goToDiscussionIcon.textContent = "send"
  
  deleteButton.classList.add('btn-floating', 'right', 'center-align', 'light', 'red', 'lighten-1', 'waves-effect', 'waves-dark', 'z-depth-0');
  deleteIcon.setAttribute('lock', doc.id);
  deleteIcon.classList.add('material-icons');
  deleteIcon.textContent = "delete"

  li.appendChild(divCard);
  divCard.appendChild(divCardContent);
  divCardContent.appendChild(discusionTopic);
  divCardContent.appendChild(goToDiscussionButton);
  divCardContent.appendChild(deleteButton);
  divCardContent.appendChild(discusionContent);
  divCardContent.appendChild(postedBy);
  divCardContent.appendChild(postedAt);
  deleteButton.appendChild(deleteIcon);
  goToDiscussionButton.appendChild(goToDiscussionIcon);
  
  discusions.appendChild(li);

  //deleting data   
  deleteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const id = e.target.getAttribute('lock');
    db.collection('discussions').doc(id).delete();
  });
}

// real-time listener geting data
db.collection('discussions').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
          renderDiscusion(change.doc);
        } else if (change.type == 'removed'){
      let li = discusions.querySelector('[key=' + change.doc.id + ']');
      discusions.removeChild(li);     
  }
    });
  });

console.log("doslo do kraja na main")
