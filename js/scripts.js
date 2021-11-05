
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

  // Add X delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  crossOutButton.addEventListener("click", deleteListItem);
  
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem(){
    li.classList.add("delete")
  }
  // 4. Reordering the items:
  $('#list').sortable();
}
