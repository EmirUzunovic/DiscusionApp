
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





const discusion = document.querySelector('#discusions');
const newDiscussion = document.querySelector('#newDiscussion')
const loginForm = document.querySelector('#login');

const error = document.querySelector('#error');
console.log(db.collection('discussions'))
//create element ˛& render 
// function renderDiscusion(doc){
//   let li = document.createElement('li');
//   let a = document.createElement('a');
//   let divCard = document.createElement('div');
//   let divCardContent = document.createElement('div');
//   let discusionTopic = document.createElement('span');
//   let discusionContent = document.createElement('p');
//   let postedBy = document.createElement('p');
//   let postedAt = document.createElement('p');

//   a.setAttribute('href', "discusion.html");
//   a.setAttribute('key', "discusion.html");
//   a.textContent = doc;

//   divCard.appendChild(a);
//   error.appendChild(divCard);
// }
// renderDiscusion("test");

// function renderError(doc){
//   let li = document.createElement('li');
//   let a = document.createElement('a');
//   let divCard = document.createElement('div');
//   let divCardContent = document.createElement('div');
//   let discusionTopic = document.createElement('span');
//   let discusionContent = document.createElement('p');
//   let postedBy = document.createElement('p');
//   let postedAt = document.createElement('p');

//   a.setAttribute('href', "discusion.html");
//   a.setAttribute('key', "discusion.html");
//   a.textContent = doc;

//   li.appendChild(a);
//   discusion.appendChild(li);
// }
// renderError("test");

//adding Discusion

newDiscussion.addEventListener('submit' , (e) => {
  e.preventDefault();
  db.collection('discussions').add({
    title: newDiscussion.title.value,
    content: newDiscussion.content.value,
    author: "test Author",
    time: new Date()
  })

  newDiscussion.title = "";
  newDiscussion.content = "";
  console.log("add discussion fired")
})

