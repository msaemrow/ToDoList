document.addEventListener("DOMContentLoaded",function(){
//Document selectors
const form = document.querySelector('#addItem');
const input = document.querySelector('#listItem');
const todoList = document.querySelector('#todo-list')

//Local Storage Array
const todoListArray = localStorage.getItem("Todos") ? JSON.parse(localStorage.getItem("Todos")) : [];

function refreshLocalStorage(){
    localStorage.setItem("Todos", JSON.stringify(todoListArray));
    for(let i=0; i<todoListArray.length; i++){
        let newTodo = document.createElement('li');
        const newCompleteBtn = document.createElement('button');
        const newRemoveBtn = document.createElement('button');
        newCompleteBtn.innerText = 'Completed';
        newRemoveBtn.innerText = 'Remove';
        newCompleteBtn.classList.add('button')
        newCompleteBtn.setAttribute('id', 'completedItem');
        newRemoveBtn.setAttribute('id', 'removeItem');
        newRemoveBtn.classList.add('button');

        newTodo.innerText = todoListArray[i].task;
        newTodo.title = newTodo.innerText;
        newTodo.isComplete = todoListArray[i].isComplete ? true : false;
        if(newTodo.isComplete){
            newTodo.classList.add('completed');
        }
        newTodo.append(newCompleteBtn);
        newTodo.append(newRemoveBtn);
        todoList.append(newTodo);
}
}


//Event listener that adds a new li, completed button and remove button
form.addEventListener('submit', function(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    const newCompleteBtn = document.createElement('button');
    const newRemoveBtn = document.createElement('button');

    newItem.innerText = input.value;
    newItem.isComplete = false;
    newItem.title = newItem.innerText;
    //save the new item in the toDoListArray
    todoListArray.push({task: newItem.innerText, isComplete: newItem.isComplete});
    localStorage.setItem("Todos", JSON.stringify(todoListArray));

    newCompleteBtn.innerText = 'Completed';
    newRemoveBtn.innerText = 'Remove';
    newCompleteBtn.classList.add('button')
    newCompleteBtn.setAttribute('id', 'completedItem');
    newRemoveBtn.setAttribute('id', 'removeItem');
    newRemoveBtn.classList.add('button');

    newItem.append(newCompleteBtn);
    newItem.append(newRemoveBtn);
    input.value = '';
    todoList.appendChild(newItem);
})

//Event listener that adds completed class to item if completed button is clicked
//or removes item if Remove button is clicked
todoList.addEventListener('click', function(e){
    if(e.target.id==='removeItem'){
        removeTask(e);
        e.target.parentElement.remove();
  
        }
    else if(e.target.id==='completedItem'){
        if(!e.target.parentElement.isComplete){
            e.target.parentElement.classList.toggle('completed');
            updatedCompletedStatus(e);
            }
        else{
            e.target.parentElement.classList.toggle('completed');
            updatedCompletedStatus(e);
            }
    }else{
        return;
    }
    console.log(todoListArray);

}
);

//Update complete status of todo task in todoListArray
function updatedCompletedStatus(e){
    for(let i=0; i<todoListArray.length; i++){
    if(todoListArray[i].task === e.target.parentElement.title && todoListArray[i].isComplete===false){
    todoListArray[i].isComplete = true;
    }else if(todoListArray[i].task === e.target.parentElement.title && todoListArray[i].isComplete===true){
     todoListArray[i].isComplete = false;
    }
}
}
//Delete todo task in todoListArray
function removeTask(e){
    for(let i=0; i<todoListArray.length; i++){
        if(todoListArray[i].task === e.target.parentElement.title){
        todoListArray.splice(i, 1);
    }
}
}
//Initial local storage refresh
refreshLocalStorage();

})
