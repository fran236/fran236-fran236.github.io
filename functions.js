
function displayList(){
    let mainContainerList = document.querySelector(".drag-container").hasChildNodes()
  
    if (!mainContainerList) {
      document.querySelector(".drag-container").style.display ="none"
    }else{
      document.querySelector(".drag-container").style.display ="block"
    }
  }

function render(todos) {
    document.querySelector(".drag-container").innerHTML = ""
    todos.forEach(element => {
    const e = document.querySelector(".drag-container").appendChild(generateTodoDOM(element))  
    console.log(e);
    if(!editActive){if(e.getBoundingClientRect().height > 76){
       e.className = "scroll drag-box"
        e.style.height = "85px"
        
    } }
           
    })
}

const getSavedTodos = function () {
    const jsonTodos = localStorage.getItem("todos")
  
    if (jsonTodos !== null) {
     return JSON.parse(jsonTodos)
   }else {
     return []
   }
}
  
const saveTodos = function (todos) {
    localStorage.setItem("todos" , JSON.stringify(todos))
}

function selectElementText(el){
    var range = document.createRange() // create new range object
    range.selectNodeContents(el) // set range to encompass desired element text
    var selection = window.getSelection() // get Selection object from currently user selected text
    selection.removeAllRanges() // unselect any user selected text (if any)
    selection.addRange(range) // add range to Selection object to select it
 }

const reorganizeTodo = function (id) {
const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id
    })
    if (todoIndex > -1) {
    newTodo.push(todos[todoIndex])
    }
}

const addEditTodo = function (id, value) {
  const todoIndex = todos.findIndex(function (todo) {
      return todo.id === id
      })
      if (todoIndex > -1) {
      todos[todoIndex].task = value
      }
  }


const removeTodo = function (id) {
const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id
    })
    if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
    }
}

const generateTodoDOM = function (todo) {

    allDiv = document.createElement("div")
    text =  document.createElement("div")
    buttonDelete = document.createElement("div")
    allDiv.setAttribute("class", "drag-box")
    allDiv.setAttribute("id", todo.id)
    text.textContent = todo.task
    text.setAttribute("class", "textDiv")
    allDiv.appendChild(text)
    allDiv.addEventListener("click", (event)=>{ 
 
       selectElementText(event.target)
       document.execCommand("copy") 
    if (editActive) {

    document.querySelector('#note2add').value = event.target.children[0].innerHTML
    idTodo2dit = todo.id

    }
       
      }) 
        
     buttonDelete.addEventListener('click', (event) => {
               
           removeTodo(todo.id)
           saveTodos(todos)
           render(todos)
           displayList()
           });
           if(editActive){
             buttonDelete.setAttribute("class", "buttonDelete")
             buttonDelete.textContent = "X"
             allDiv.appendChild(buttonDelete)
           }else{
             buttonDelete.textContent = ""
             buttonDelete.classList.remove("buttonDelete")
           }
           
   return allDiv
   }
