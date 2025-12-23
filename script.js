const inputList = document.getElementById('inputList');
const button = document.getElementById('addBtn');
const taskList = document.getElementById('taskLists');

button.addEventListener("click", () => {
  //console.log("enter task please");
// empty input to alert user
  let task = inputList.value;
  if (task === ""){
    alert("Enter a task Please");
    return;
  }
// create a li item element when button is clicked
  let li = document.createElement("li");
  
  let span = document.createElement("span");
  span.textContent = task;

  span.addEventListener("click", ()=> {
    span.classList.toggle("completed");
  })
  
    

// create list deleted button
  let delBtn = document.createElement("button")
  delBtn.textContent = "Delete";

 delBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  })

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  inputList.value = "";
});
