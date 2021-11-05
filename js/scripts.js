
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

  // Delete class w/ display:none CSS
  function deleteListItem() {
    li.addClass("delete")
  }

  // Add X delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  crossOutButton.addEventListener("click", deleteListItem);

  //Reorder items
  $('#list').sortable();
}
