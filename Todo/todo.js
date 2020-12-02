let todo = localStorage.getItem('TodoList');
let savedColor = localStorage.getItem('color')

if (todo == null) {
    todo = []
    console.log('null')
} else {
    todo = todo.split(',');
    console.log(todo)
    actualiseTodo()
}

if (savedColor != null ) {
    document.querySelector("body").style.backgroundColor = savedColor;
    document.querySelector('#color').value = savedColor
}

function createElement(txt) {
    return htmlElement = '<li class="element" id="todoElement"><p>' + txt + '</p> <button class="delete-button" onclick="deleteElement(this)">X</button></li>'
}

function actualiseTodo() {
    localStorage.setItem('TodoList', todo);
    let list = document.querySelector('#element-list')
    let listElements = ''
    
    for (let item of todo) {
        listElements = listElements + createElement(item);
    }

    list.innerHTML = listElements;
}

function addElement() {
    let content = document.querySelector('#inputTxt').value
    if (content != '') {
        console.log(content);
        todo.push(content);
        document.querySelector('#inputTxt').value = ''
        actualiseTodo();
        
    } else {
        console.log('c\'est vide')
    }
}

function deleteElement(elem) {
    for (let item of todo) {
        if (item == elem.parentNode.firstChild.innerText) {
            todo.splice(todo.indexOf(item), 1)
            actualiseTodo();
        }
    }
}


document.querySelector('#todo-submit').addEventListener('click', addElement);
document.querySelector('#todo-submit').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      addElement();
    }
  });

function changeColor(){
    let color = document.querySelector('#color').value;
    document.querySelector("body").style.backgroundColor = color;
    localStorage.setItem('color', color);
}

document.querySelector("#color").addEventListener('input', changeColor);
