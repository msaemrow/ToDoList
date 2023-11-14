//Document selectors
const form = document.querySelector('#addItem');
const input = document.querySelector('#listItem');
const todoList = document.querySelector('#todo-list')

//Local Storage Array
const todoListArray = localStorage.getItem("Todos") ? JSON.parse(localStorage.getItem("Todos")) : [];

for(let i=0; i<todoListArray.length; i++){
    let newTodo = document.createElement('li');
    newTodo.innerText = todoListArray[i].task;
    newTodo.isComplete = todoListArray[i].isComplete ? true : false;
    if(newTodo.isComplete){
        newTodo.classList.add('completed');
    }

    todoList.append(newTodo);
}

//Event listener that adds a new li, completed button and remove button
form.addEventListener('submit', function(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    const newCompleteBtn = document.createElement('button');
    const newRemoveBtn = document.createElement('button');

    newItem.innerText = input.value;
    newItem.isComplete = false;
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
            e.target.parentElement.remove();
        }
    else if(e.target.id==='completedItem'){
        if(!e.target.isComplete){
            e.target.parentElement.classList.toggle('completed');
            e.target.isComplete = true;
            console.log(e.target.isComplete)
            }
        else{
            e.target.parentElement.classList.toggle('completed');
            e.target.isComplete = false;
            }
    }else{
        return;
    }
}
);
