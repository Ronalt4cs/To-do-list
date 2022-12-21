const inputAddTask = document.getElementById('input-add-task');
const btnAddTask = document.querySelector('button');
const taskContainer = document.querySelector('.task-container');
const btnTheme = document.getElementById('btn-theme');
const root = document.querySelector(':root');
const body = document.querySelector('body');

let currentTheme = 'light';
const changeTheme = (newTheme) => {

   if (newTheme === 'light') {

      root.style.setProperty('--bg-color', '#1b2028');
      root.style.setProperty('--text-color', '#FFF');
      btnTheme.src = '../assets/dark-mode.svg';

      return currentTheme = 'dark';
   }

   root.style.setProperty('--bg-color', '#F5F5F5');
   root.style.setProperty('--text-color', '#1b2028');
   btnTheme.src = '../assets/light-mode.svg';

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

   textTask.textContent = inputAddTask.value
   btnRemoveTask.src = '../assets/icon-trash.svg'
   btnRemoveTask.classList.add('btn-remove-task');

   divTextContent.appendChild(checkBoxTask);
   divTextContent.appendChild(textTask);
   divDeleteTask.appendChild(btnRemoveTask);

   task.appendChild(divTextContent);
   task.appendChild(divDeleteTask);

   taskContainer.appendChild(task);

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


inputAddTask.addEventListener('keypress', (event) => {

   if (event.key === 'Enter' && inputAddTask.value) {
      addNewTask();
      return
   }
   return inputAddTask.style.border = '2px solid red';

});
