const tasksBox = document.getElementById("TasksBox");
const toggleFormBtn = document.getElementById("ToggleForm");
const noteForm = document.querySelector(".addNotePanel");

const fieldTitle = document.getElementById("FieldTitle");
const fieldDesc = document.getElementById("FieldDesc");
const addBtn = document.getElementById("AddTaskBtn");

const addNote = () => {
   createCard( fieldTitle.value, fieldDesc.value );
   fieldTitle.value = "";
   fieldDesc.value = "";
   toggleNoteForm();
}
addBtn.addEventListener("click", addNote);

const toggleNoteForm = () => {
    noteForm.classList.toggle("showNoteForm");
}
toggleFormBtn.addEventListener("click", toggleNoteForm);


const createCard = (titleText,descText) => {
    const task = document.createElement("article");
    task.classList.add("taskCard"); 
    const title = document.createElement("h3");
    title.textContent = titleText; 
    const description = document.createElement("p");
    description.textContent = descText; 
    task.appendChild(title);
    task.appendChild(description); 
    tasksBox.appendChild(task);
}
createCard("Zakupy","Produkty na obiad");
createCard("Lekcje", "Kartkówka z przyrody");
createCard("Nauka JS", "Funkcje i zmienne");






