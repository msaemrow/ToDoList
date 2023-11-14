//Document selectors
const form = document.querySelector('#addItem');
const input = document.querySelector('#listItem');
const toDoList = document.querySelector('#todo-list')

//Local Storage Array
const toDoListArray = localStorage.getItem("ToDos") ? JSON.parse(localStorage.getItem("TodDos")) : [];

for(let i=0; i<toDoListArray.length; i++){
    let newToDo = document.createElement('li');
    newToDo.innerText = toDoListArray[i].task;
    newToDo.isComplete = toDoListArray[i].isComplete ? true : false;
    if(newToDo.isComplete){
        newToDo.classList.add('completed');
    }

    toDoList.append(newToDo);
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
    toDoListArray.push({task: newItem.innerText, isComplete: newItem.isComplete});
    localStorage.setItem("ToDOs", JSON.stringify(toDoListArray));

    newCompleteBtn.innerText = 'Completed';
    newRemoveBtn.innerText = 'Remove';
    newCompleteBtn.classList.add('button')
    newCompleteBtn.setAttribute('id', 'completedItem');
    newRemoveBtn.setAttribute('id', 'removeItem');
    newRemoveBtn.classList.add('button');

    newItem.append(newCompleteBtn);
    newItem.append(newRemoveBtn);
    input.value = '';
    toDoList.appendChild(newItem);
})

//Event listener that adds completed class to item if completed button is clicked
//or removes item if Remove button is clicked
toDoList.addEventListener('click', function(e){
    if(e.target.id==='removeItem'){
        e.target.parentElement.remove();
    }
    else if(!e.target.isComplete){
        e.target.parentElement.classList.toggle('completed');
        e.target.isComplete = true;
        console.log(e.target.isComplete)
    }
    else if(e.target.isComplete){
        e.target.parentElement.classList.toggle('completed');
        e.target.isComplete = false;
    }
}
);
