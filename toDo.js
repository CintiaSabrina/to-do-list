let addTask = document.querySelector("#todo-input")
let editTask = document.querySelector("#edit-input")

let btnAdd = document.querySelector("#btnAdd")
let btnCheck = document.querySelector("#btnCheck")
let btnErase = document.querySelector("#eraseButton")
let btnFinishTodo = document.querySelector(".finish-todo")
let btnRemoveTodo = document.querySelector(".remove-todo")


let todoList = document.querySelector("#todo-list")
let todo = document.querySelector(".todo")
let todoForm = document.querySelector("#todo-form")
let editForm = document.querySelector("#edit-form")


    function clickAdd(){
        if(!addTask.value){
            alert("Digite uma tarefa");
            addTask.focus();
        }
    }

    todoForm.addEventListener("click", (e) => {
        e.preventDefault();
        
        const inputValue = addTask.value;
        
        if(inputValue){
            saveTodo(inputValue);
        }
    })
    
    let editInput;
    const saveTodo = (text) => {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        
        const todoTitle = document.createElement("h3");
        todoTitle.innerHTML = text;
        todo.appendChild(todoTitle);
         
        //create buttons
        const doneBtn = document.createElement("button");
        doneBtn.classList.add("finish-todo")
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        todo.appendChild(doneBtn);
        
        const deletBtn = document.createElement("button");
        deletBtn.classList.add("remove-todo");
        deletBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        todo.appendChild(deletBtn);
        
        todoList.appendChild(todo);
        
        addTask.value = ""   
    }

    document.addEventListener("click", (e) => {
        const targtEl = e.target;
        const parentEl = targtEl.closest("div");
        
        
        if(targtEl.classList.contains("finish-todo")){
            parentEl.classList.toggle("done");
        }
        
        if(targtEl.classList.contains("remove-todo")){
            parentEl.remove();
        }
    })

        btnCancel.addEventListener("click",(e)=>{
            e.preventDefault();

            toggleForms();
        })
    
    
    
    
    
    
    
    



