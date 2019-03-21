
//initialize materializecss
$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.tabs').tabs();
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
  console.log("render fired")
  console.log(doc);
  let li = document.createElement('li');
  let a = document.createElement('a');
  let divCard = document.createElement('div');
  let divCardContent = document.createElement('div');
  let discusionTopic = document.createElement('span');
  let discusionContent = document.createElement('p');
  let postedBy = document.createElement('p');
  let postedAt = document.createElement('p');

  a.setAttribute('href', "discusion.html");
  a.setAttribute('key', doc.id);
  divCard.classList.add('card', 'blue', 'white-text');
  divCardContent.classList.add('card-content');
  discusionTopic.classList.add('card-title', 'center-align');
  discusionTopic.textContent = doc.data().title;
  discusionContent.classList.add('truncate');
  discusionContent.textContent = doc.data().content;
  postedBy.textContent = "Posted by " +  doc.data().author;
  postedAt.textContent = "Posted at " +  doc.data().time;
  a.textContent = doc;

  li.appendChild(a);
  a.appendChild(divCard);
  divCard.appendChild(divCardContent);
  divCardContent.appendChild(discusionTopic);
  divCardContent.appendChild(discusionContent);
  divCardContent.appendChild(postedBy);
  divCardContent.appendChild(postedAt);
  
  discusions.appendChild(li);
}



//getting data from discussion collection
db.collection('discussions').get().then((querySnapshot) => {
  console.log("prosao get aktivirao se then");
    querySnapshot.forEach((x) => {
        console.log("ispisuje doc " + x);
        //renderDiscusion(doc);
      });
  });




console.log("doslo do kraja na main")
