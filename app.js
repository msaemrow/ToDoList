//Document selectors
const form = document.querySelector('#addItem');
const input = document.querySelector('#listItem');
const toDoList = document.querySelector('#todo-list')

//Local Storage Array
const toDoListArray = JSON.parse(localStorage.getItem('toDOListArray')) || [];

//Event listener that adds completed class to item if completed button is clicked
//or removes item if Remove button is clicked
toDoList.addEventListener('click', function(e){
    if(e.target.id==='completedItem'){
        e.target.parentElement.classList.add('completed');
        e.target.parentElement.classList.remove('incomplete');
        console.log(e.target.parentElement.firstChild.data);
    } else if(e.target.id==='removeItem'){
        e.target.parentElement.remove();
    }
})


//Event listener that adds a new li, completed button and remove button
form.addEventListener('submit', function(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    const newCompleteBtn = document.createElement('button');
    const newRemoveBtn = document.createElement('button');

    newItem.innerText = input.value;
    newItem.classList.add('incomplete');
    //save the new item in the toDoListArray
    toDoListArray.push({task: newItem.innerText, isComplete: newItem.getAttribute('class')});
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
