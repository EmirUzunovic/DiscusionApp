//saving elements from dome to variables

const newDiscussion = document.querySelector('#newDiscussion')


//adding a new Discussion
newDiscussion.addEventListener('submit' , (e) => {
  e.preventDefault();
  //ading object to firebase collection
  db.collection('discussions').add({
    title: newDiscussion.title.value,
    content: newDiscussion.content.value,
    author: "test Author",
    time: new Date()
  })
  //reset input fields
  newDiscussion.title.value = "";
  newDiscussion.content.value = "";
  console.log("add discussion fired")
})


console.log("doslo do kraja newDiscussion")
