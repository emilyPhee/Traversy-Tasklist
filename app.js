// Define UI vars
const cardContent = document.querySelector('.card-content');
const taskForm = document.querySelector('#task-form');
const inputTask = document.getElementById('task');
let ulCollection = document.querySelector('.collection');

const filter = document.querySelector('#filter');

const cardAction = document.querySelector('.card-action');


let taskArray = [];


// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  taskForm.addEventListener('submit', addTask);
  document.body.addEventListener('click', deleteItem);
  filter.addEventListener('input', handleFilter);
  
}


function addTask(e) {
  if (inputTask.value === '') {
    alert('Add a task');
  }

  // Create list element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  li.innerText = inputTask.value;


  // Create a tag element
  const a = document.createElement('a');
  a.className = 'delete-item secondary-content';

  // Create icon tag element
  const i = document.createElement('i');
  i.className = 'fa fa-remove';

  // Append element to parent DOM element(s)
  ulCollection.appendChild(li);
  li.appendChild(a);
  a.appendChild(i);

  taskArray.push(li);

  // Clear task form after add to list / submit
  inputTask.value = '';
  e.preventDefault();
}

function deleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
}



function handleFilter(e) {
  const filterInput = e.target.value;
  const results = taskArray
    .filter(function(listElement){
      return listElement.innerText.toLowerCase().includes(filterInput.toLowerCase());
  });
      
  ulCollection.innerHTML = '';
  results.forEach(function(li) {
    ulCollection.appendChild(li);
  });
}

