//Functions to create
//1-local storage - Json
//2-Create todo array in storage
//3-Display the array (notes) created on the screen
// get name input from input text to create username by making its value username and setitem as username
//4-create a function to display todos and assign all elements and classList.add() to their classes  basically create another same model as your HTML for displaying and editing and deleting your notes
// array method push will take newly todos => todo and add this todos to todo array
// add category filter for personal or work!
// try retyping all css and JS after finishing your portfolio page

window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || []; // todos is global we dont add let or var, const
  const nameInput = document.querySelector("#name");
  //const todoList = document.querySelector('#todo-list');
  const newTodoForm = document.querySelector("#new-todo-form");

  const username = localStorage.getItem("username") || ""; // or and empty string ''

  nameInput.value = username;

  nameInput.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value); // event target : e.target.value u username olarak set et - make nameinput a new user when changed and when nameInput(comes from name id) and there is entry on new-todo-form made by this user and this input made username
  });

  newTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime(),
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos)); // turns actual todo list of array to text to save on JSON
    e.target.reset();
    DisplayTodos();
  });
  DisplayTodos();
});
// so far we formed JSON local storage and their variables for name input linked to username and then new todo form extracted from FORM content
// below we need to create functions to make those sections show/display when new todo created!

function DisplayTodos() {
  const todoList = document.querySelector("#todo-list");

  todoList.innerHTML = ""; //need to reseach

  todos.forEach((todo) => {
    // form the below elements and classes for each new todo
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("button");

    input.type = "checkbox";
    input.checked = todo.done;
    span.classList.add("opt");

    if (todo.category == "personal") {
      span.classList.add("personal");
    } else {
      span.classList.add("business");
    }

    content.classList.add("todo-content");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    label.appendChild(input); // check this as I dont understand
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add("done");
    }
    input.addEventListener("change", (e) => {
      todo.done = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.done) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }
      DisplayTodos();
    });

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteButton.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      DisplayTodos();
    });
  });
}
