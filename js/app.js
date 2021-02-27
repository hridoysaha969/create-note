// Back-End of Note application
// Don't Copy or Edit those code. 
// You Can Copy but you have to Mention "copy from Hridoy Saha"

// ===== START FROM HERE =====  
console.log('Welcome to Note Application. Made By Hridoy Saha.')
// To show user notes in web page
showNotes();

// If user add a note , add it to the local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value)
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = '';
    // console.log(notesObj);
    showNotes();
})
// Function to show Element from Localstorage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function(element, index) {
        html += `
        <div class="noteCard my-3 mx-3 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-center">Notes ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-info">Delete Notes</button>
        </div>
        </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0){
        notesElm.innerHTML = html;
    }else {
        notesElm.innerHTML = 'Please add some note and click \"Add Note\" Button.'
    }
}
// Function to Delete a Note
function deleteNote(index) {
    // console.log('I am Deleting.....', index);
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}
// Search Area
let search = document.getElementById('searchTxt');
search.addEventListener("input", function() {
    let inputVal = search.value.toLowerCase();
    // console.log('Input added Successfully! Your input is ', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        // console.log(cardTxt)
    })
})

// Are you using my source code??
// You are requested to mention "Hridoy Saha"