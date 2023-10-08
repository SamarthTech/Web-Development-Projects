window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const inputDescription = document.querySelector("#new-task-input-description");
    const incompleteList = document.querySelector("#incomplete-tasks");
    const completedList = document.querySelector("#completed-tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value;
        const taskDescription = inputDescription.value;
        const taskStartTime = new Date().toLocaleString(); // Starting time
        const taskElement = createTaskElement(taskText, taskDescription, taskStartTime);

        incompleteList.appendChild(taskElement);

        input.value = '';
        inputDescription.value = '';
    });

    function createTaskElement(text, description, startTime) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add('content');

        const taskTextElement = document.createElement('input');
        taskTextElement.classList.add('text');
        taskTextElement.type = 'text';
        taskTextElement.value = `Task: ${text}`;
        taskTextElement.setAttribute('readonly', 'readonly');

        const taskDescriptionElement = document.createElement('p');
        taskDescriptionElement.classList.add('description');
        taskDescriptionElement.textContent = `Description: ${description}`;

        const taskStartTimeElement = document.createElement('span');
        taskStartTimeElement.classList.add('task-datetime');
        taskStartTimeElement.textContent = `Start Time: ${startTime}`;

        taskContentElement.appendChild(taskTextElement);
        taskContentElement.appendChild(taskDescriptionElement);
        taskContentElement.appendChild(taskStartTimeElement);

        const taskActionsElement = document.createElement('div');
        taskActionsElement.classList.add('actions');

        const taskCompleteButton = document.createElement('button');
        taskCompleteButton.classList.add('complete');
        taskCompleteButton.innerText = 'Complete';

        const taskEditButton = document.createElement('button'); // Add Edit button
        taskEditButton.classList.add('edit'); // Add the 'edit' class
        taskEditButton.innerText = 'Edit';

        const taskDeleteButton = document.createElement('button');
        taskDeleteButton.classList.add('delete');
        taskDeleteButton.innerText = 'Delete';

        taskActionsElement.appendChild(taskCompleteButton);
        taskActionsElement.appendChild(taskEditButton); // Append the Edit button
        taskActionsElement.appendChild(taskDeleteButton);

        taskElement.appendChild(taskContentElement);
        taskElement.appendChild(taskActionsElement);

        // Event listener for completing tasks (same as before)
        taskCompleteButton.addEventListener('click', () => {
            incompleteList.removeChild(taskElement);
            const completionTime = new Date().toLocaleString();
            taskStartTimeElement.textContent = `Start Time: ${startTime}, Completion Time: ${completionTime}`;
            completedList.appendChild(taskElement);
        });

        // Event listener for editing tasks (same as before)
        taskEditButton.addEventListener('click', () => {
            taskTextElement.removeAttribute('readonly');
            taskDescriptionElement.contentEditable = true;

            const taskSaveButton = document.createElement('button');
            taskSaveButton.classList.add('save');
            taskSaveButton.innerText = 'Save';

            taskActionsElement.replaceChild(taskSaveButton, taskEditButton);

            taskSaveButton.addEventListener('click', () => {
                const editedText = taskTextElement.value.replace('Task: ', '');
                const editedDescription = taskDescriptionElement.textContent.replace('Description: ', '');

                taskTextElement.value = `Task: ${editedText}`;
                taskDescriptionElement.textContent = `Description: ${editedDescription}`;

                taskTextElement.setAttribute('readonly', 'readonly');
                taskDescriptionElement.contentEditable = false;

                taskActionsElement.replaceChild(taskEditButton, taskSaveButton);
            });
        });

        // Event listener for deleting tasks
        taskDeleteButton.addEventListener('click', () => {
            if (incompleteList.contains(taskElement)) {
                incompleteList.removeChild(taskElement);
            } else if (completedList.contains(taskElement)) {
                completedList.removeChild(taskElement);
            }
        });

        return taskElement;
    }
});