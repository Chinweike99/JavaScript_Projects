const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Fucntion Show notes

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


// Function to store and save on local browser
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "icons/trash3.svg";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
})

// Function to remove a note
notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
});

// or using onclick:
// function createNote(){
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src = "icons/trash3.svg";
//     notesContainer.appendChild(inputBox).appendChild(img);
// }