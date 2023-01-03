const inputAddTask = document.getElementById('input-add-task');
const btnAddTask = document.querySelector('button');
const taskContainer = document.querySelector('.task-container');
const btnTheme = document.getElementById('btn-theme');
const btnRemoveAllTasks = document.querySelector('.btn-clear-all');
const root = document.querySelector(':root');
const body = document.querySelector('body');
const lineFooter = document.querySelector('.line');

let currentTheme = 'light';
const changeTheme = (newTheme) => {

   if (newTheme === 'light') {

      root.style.setProperty('--bg-color', '#1b2028');
      root.style.setProperty('--text-color', '#FFF');
      btnTheme.src = './assets/dark-mode.svg';
      lineFooter.style.backgroundColor = '#FFF';

      return currentTheme = 'dark';
   }

   root.style.setProperty('--bg-color', '#F5F5F5');
   root.style.setProperty('--text-color', '#1b2028');
   btnTheme.src = './assets/light-mode.svg';
   lineFooter.style.backgroundColor = '#000';


   return currentTheme = 'light';
}

const addNewTask = () => {
   const task = document.createElement('div');
   const checkBoxTask = document.createElement('input');
   const textTask = document.createElement('span');
   const btnRemoveTask = document.createElement('img');
   const divTextContent = document.createElement('div');
   const divDeleteTask = document.createElement('div');

   task.classList.add('task');
   checkBoxTask.type = 'checkbox';
   checkBoxTask.value = 'unchecked';


   textTask.textContent = inputAddTask.value
   btnRemoveTask.src = './assets/icon-trash.svg'
   btnRemoveTask.classList.add('btn-remove-task');

   divTextContent.appendChild(checkBoxTask);
   divTextContent.appendChild(textTask);
   divDeleteTask.appendChild(btnRemoveTask);

   task.appendChild(divTextContent);
   task.appendChild(divDeleteTask);

   taskContainer.appendChild(task);

   checkBoxTask.addEventListener('change', (event) => {
      event.stopPropagation();
      event.preventDefault();

      if (event.target.value === 'unchecked') {
         textTask.style.textDecoration = 'line-through';
         checkBoxTask.value = 'checked';
         return
      }
      textTask.style.textDecoration = 'none';
      checkBoxTask.value = 'unchecked';
      return
   });

   btnRemoveTask.addEventListener('click', () => {
      taskContainer.removeChild(task);
   });

   inputAddTask.style.border = '2px solid #1b2028';
   return inputAddTask.value = '';
}

btnTheme.addEventListener('click', (event) => {
   event.preventDefault();
   event.stopPropagation();

   if (currentTheme === 'light') {
      changeTheme('light');
      return
   }

   changeTheme('dark');
   return
});

btnAddTask.addEventListener('click', (event) => {
   event.preventDefault();
   event.stopPropagation();

   if (inputAddTask.value) {
      addNewTask();
      return
   }
   inputAddTask.style.border = '2px solid red';
});

btnRemoveAllTasks.addEventListener('click', (event) => {
   event.stopPropagation();
   event.preventDefault();

   taskContainer.innerHTML = '';
   return
});

inputAddTask.addEventListener('keypress', (event) => {

   if (event.key === 'Enter' && inputAddTask.value) {
      addNewTask();
      return
   }
   inputAddTask.style.border = '2px solid red';
});