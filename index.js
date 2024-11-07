const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

  
  function addTask(){
    if(inputBox.value === ''){
      alert("You Must Write Something !");
    }
else{
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  let span = document.createElement("span");
  //for crosss icon
  span.innerHTML = "\u00d7";
  li.appendChild(span);
}
inputBox.value="";
saveData();
  }
  //checked and unchecked element and close or crosed 
  listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData();
    }
    else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
    }
  },false);
  function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
  }
  // after reload page dATA SHOW ,DATA DONT REMOVE AFTER RELOAD
  function showTask(){
 listContainer.innerHTML = localStorage.getItem("data");
  }
  showTask();