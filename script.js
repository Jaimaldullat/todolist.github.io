var todoInput = document.getElementById("todo-input");
var todoButton = document.getElementById("todo-button");
var todoList = document.getElementById("todo-list");

function checkInput() {
    return todoInput.value.length;
};

function createElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    var button = document.createElement("button");
    button.classList.add("delete-button");
    button.appendChild(document.createTextNode("Delete"));
    button.onclick = removeParent;
    li.appendChild(button);
    todoList.appendChild(li);
    todoInput.value = "";
};

function addItemOnButtonClick() {
    if (checkInput() > 0) {
        createElement();
    }
};

function additemOnEnterPress(e) {
    if (checkInput() > 0 && e.keyCode === 13) {
        createElement();
    }
};

function removeParent(evt) {
    evt.target.parentNode.remove();
}

todoButton.addEventListener("click", addItemOnButtonClick);

todoInput.addEventListener("keypress", additemOnEnterPress);

todoList.addEventListener("click", function (e) {
    e.target.classList.toggle("done");
})
