const form = document.querySelector('#addItem');
const input = document.querySelector('#listItem');
const toDoList = document.querySelector('#todo-list')

toDoList.addEventListener('click', function(e){
    if(e.target.id==='completedItem'){
        e.target.parentElement.classList.add('completed');
    } else if(e.target.id==='removeItem'){
        e.target.parentElement.remove();
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    const newCompleteBtn = document.createElement('button');
    const newRemoveBtn = document.createElement('button');
    newCompleteBtn.innerText = 'Completed Item';
    newRemoveBtn.innerText = 'Remove Item';
    newCompleteBtn.classList.add('button')
    newCompleteBtn.setAttribute('id', 'completedItem');
    newRemoveBtn.setAttribute('id', 'removeItem');
    newRemoveBtn.classList.add('button');
    newItem.innerText = input.value;
    newItem.append(newCompleteBtn);
    newItem.append(newRemoveBtn);
    input.value = '';
    toDoList.appendChild(newItem);

})