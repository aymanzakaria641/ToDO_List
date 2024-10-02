const textInput = document.getElementById("faildInput");
const btnplus = document.getElementById("btnplus");
const Divitems = document.getElementById("items");

let arrayOftasks = [];

// Check Is There Tasks In Local Storage
if (localStorage.getItem("tasks")) {
  arrayOftasks = JSON.parse(localStorage.getItem("tasks"));
}

// trigger Get Data From Local Storage
getDataLocalStorage();

// Click On Div
Divitems.addEventListener("click", (e) => {
  //============= Delet Item ============= //
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.parentElement.remove();
    // Delete Item From Logal Storage
    deleteTaskLocalstorage(
      e.target.parentElement.parentElement.getAttribute("data-id")
    );
  }
  // ========== Change Color ============= //
  if (e.target.classList.contains("fa-regular")) {
    e.target.parentElement.parentElement.classList.toggle("greenItem");
    doneTask(e.target.parentElement.parentElement.getAttribute("data-id"));
  }
});

function apperNotification() {
  const notofacation = document.getElementById("notification");
  const classApper = document.createElement("div");
  notofacation.appendChild(classApper);

  setTimeout(() => {
    classApper.classList.add("apper");
    classApper.innerText = "Note Add";
  }, 100);

  setTimeout(() => {
    classApper.remove();
  }, 2100);
}

btnplus.addEventListener("click", () => {
  const taskText = textInput.value;

  if (taskText !== "") {
    apperNotification();
    addTaskToArray(taskText);
  }
});

function addTaskToArray(taskText) {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // Push Task To Array Of Tasks
  arrayOftasks.push(task);
  addElementsToPage(arrayOftasks);
  addDatalocalStorage(arrayOftasks);
}

function addElementsToPage(arrayOftask) {
  // Empty Tasks Div
  Divitems.innerHTML = "";
  //Looping Of Array Of Tasks
  arrayOftask.forEach((task) => {
    const divItem = document.createElement("div");
    divItem.className = "item";
    if (task.completed) {
      divItem.className = "item greenItem";
    }
    divItem.setAttribute("data-id", task.id);
    Divitems.appendChild(divItem).textContent = task.title;
    
    // Div Icons
    const divIcon = document.createElement("div");
    divIcon.classList.add("icon");
    divItem.appendChild(divIcon);

    const icon_1 = document.createElement("i");
    icon_1.classList.add("fa-regular");
    icon_1.classList.add("fa-circle-check");
    divIcon.appendChild(icon_1);

    const icon_2 = document.createElement("i");
    icon_2.classList.add("fa-solid");
    icon_2.classList.add("fa-trash-can");
    divIcon.appendChild(icon_2);

    textInput.value = "";
  });
}

function addDatalocalStorage(arrayOftasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOftasks));
}

function getDataLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPage(tasks);
  }
}

function deleteTaskLocalstorage(taskId) {
  arrayOftasks = arrayOftasks.filter((task) => task.id != taskId);
  addDatalocalStorage(arrayOftasks);
}

function doneTask(taskId) {
  for (let i = 0; i < arrayOftasks.length; i++) {
    if (arrayOftasks[i].id == taskId) {

      if (arrayOftasks[i].completed == false) { 
        arrayOftasks[i].completed = true;
      }
        else arrayOftasks[i].completed = false;
    }
  }
  addDatalocalStorage(arrayOftasks);
}


// taskId.target.classList.toggle("greenItem");