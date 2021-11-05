
function newItem(){
  // Add new item to list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li)
  }
  // Cross out item from list
  function crossOut() {
    li.toggleClass("strike");
  }
  
  li.on("dblclick", crossOut);

  //3(i). Adding the delete button "X":
  let crossOutButton = document.createElement("crossOutButton");
  crossOutButton.appendChild(document.createTextNode("X"));
  li.appendChild(crossOutButton);

  crossOutButton.addEventListener("click", deleteListItem);
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem(){
    li.classList.add("delete")
  }
  // 4. Reordering the items:
  $('#list').sortable();
}
