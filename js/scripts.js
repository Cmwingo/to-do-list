function ToDoItem(name,dueBy){
  this.name = name;
  this.dueBy = dueBy;
}
$(document).ready(function(){
  var toDoItems = [];
  var clickCount = -1;
  var i = 1;

  $("form#toDoInput").submit(function(event) {
    event.preventDefault();
    alert("Submission");
    var items = [];
    // $(".groceryList").append("<li>" + ($("#toDoItem1").val().toUpperCase()) +"</li>");
    for (i = 1; i <= clickCount; i++) {
      var listItem = ("toDoItem" + i);
      console.log(listItem);
      var itemValue = $("#" + listItem).val();
      console.log(itemValue);
      items[i] = (itemValue);
      console.log(items);
      $(".toDoList").append("<li>" + items[i] +"</li>");
    }
  });
  $("#addItem").click(function(){
    clickCount++;
    console.log(clickCount);
    var name = $("#toDoItem").val();
    var dueBy = $("input#dueBy").val();
    var toDoItem = new ToDoItem(name, dueBy);
    toDoItems[clickCount] = toDoItem;
    console.log(toDoItem);

    console.log(name);
    console.log(dueBy);
    $(".toDoList").append('<div class="checkbox"><label for="toDoItem' + clickCount + '">' + toDoItem.name + '</label><input id="toDoItem' + clickCount + '" type="checkbox" value="">Due By: ' + toDoItem.dueBy + '</div>');

  });
});
