const textInput = document.getElementById("faildInput");
const btnplus = document.getElementById("btnplus");

function addItem(taskText) {
  const Items = document.getElementById("items");

  const divItem = document.createElement("div");
  divItem.classList.add("item");
  Items.appendChild(divItem);

  const text = document.createElement("p");
  text.textContent = taskText;
  divItem.appendChild(text);

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

  // ========== Change Color ============= //
  icon_1.addEventListener("click", () => {
    divItem.classList.toggle("greenItem");
  });

  //============= Delet Item ============= //
  icon_2.addEventListener("click", () => {
    divItem.remove();
  });
}

function apper() {
     const notofacation = document.getElementById('notification');
     const classApper = document.createElement("div");
     notofacation.appendChild(classApper);

     setTimeout(() => {
          classApper.classList.add('apper');
          classApper.innerText = "Note Add";
 }, 100);
 
 setTimeout(() => {
     classApper.remove();  
 }, 2100);
}

btnplus.addEventListener("click", () => {
  const taskText = textInput.value;

  if (taskText==='') 
  {
     alert("Please Add Item");
  }
  else 
  {
     console.log(taskText);
     addItem(taskText);
     apper();
  }
});
