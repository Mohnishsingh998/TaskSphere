const todolist = [{

}]; //array with no value inside.

renderTodoList();

function renderTodoList() {
  let todoListHTML ='';

  for (let i = 0; i < todolist.length; i++) {
    // ALGORITHUM
    const todoObject = todolist[i]; //loop through the array
    const name = todoObject.name;
    const duedate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
    <div>${duedate}</div>
    <button class = "delete-TODO" onclick = "
    todolist.splice(${i},1);
    renderTodoList();
    ">DELETE</button>
    `; //create some html code for each todo using java script.
    todoListHTML = todoListHTML + html;
  }

  document.querySelector(".display_task").innerHTML = todoListHTML;
}
// now create a function to add data to array.

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-selector');
  const dueDate = dateInputElement.value;

  todolist.push( {name,dueDate }); // to save name in array we use .push to insert.

  inputElement.value = "";

  renderTodoList();
}
