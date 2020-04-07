let addActive = true
let editActive = false
todos = getSavedTodos()

render(todos)

displayList()
 
document.querySelector("#buttonEdit").addEventListener("click", function () {
    
  if(!editActive){
    editActive=true
    document.querySelector("#buttonAdd").disabled = true;
    for (let el of document.querySelectorAll('.formAdd')) el.style.display = 'block'
    document.querySelector("#note2add").placeholder = "Selecciona la nota que quieras editar"
    
  }else{
    for (let el of document.querySelectorAll('.formAdd')) el.style.display = 'none'
    editActive=false}

  render(todos)
    
  if(!editActive){location.reload()}
  })
  
document.querySelector("#buttonAdd").addEventListener("click",function(e){
    if(!addActive){
      addActive=true
      
    }else{addActive=false}

    if(!addActive){
      for (let el of document.querySelectorAll('.formAdd')) el.style.display = 'block'
      document.querySelector("#buttonEdit").disabled = true;
    }else{
      for (let el of document.querySelectorAll('.formAdd')) el.style.display = 'none'
      document.querySelector("#buttonEdit").disabled = false
    }  
    
  })

document.querySelector("#add-todo").addEventListener("submit", function (e) {
    e.preventDefault()
                
    if(!e.target.elements.note2add.value == "" && !editActive){      
      todos.push({
        id: uuidv4(),
        task: e.target.elements.note2add.value
    })
   /*  if (!e.target.elements.note2add.value == "" && editActive) {

      addEditTodo(idTodo2dit, value)
    } */
    
    
    

    saveTodos(todos);
      
    render(todos)

    e.target.elements.note2add.value = ""

    for (let el of document.querySelectorAll('.formAdd')) el.style.display = 'none'

    addActive = true

    displayList()

    location.reload();
    }
    
    })

document.querySelector('#note2add').addEventListener("input",(e)=>{

    value = e.target.value
  
  })


 