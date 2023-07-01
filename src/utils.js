import { functions } from './allFunctions';
const upperFirst = functions.upperFirst;
const timeCreation = functions.timeCreation;
const elMaker = functions.elMaker;
const childRemover = functions.childRemover;
const displayTime = functions.displayTime;
const reProject = functions.reProject;

// NOTIFICATION
const notify = (text) => {
  const notifContainer = document.querySelector('.notif-container')
  const notif = elMaker('p', notifContainer, text, `notif`);
  setTimeout(() => {
    notifContainer.removeChild(notif);
  }, 4000);
};
// CANCEL
const cancelButton = (data, parent) => {
  const cancel = elMaker('div', parent, '', 'cancel-button');
  cancel.addEventListener('mouseup', function () {
    fillData(reProject(data), document.querySelector('.main-body'));
  });
};
// DELETE
const deleteButton = (data, parent, indexProject, indexList) => {
  const deleteBtn = elMaker('button', parent, '', 'delete-button');
  // CONFIRM PROJECT DELETION
  deleteBtn.addEventListener('mouseup', function () {
    // AVOID MULTIPLE DELETE CONFIRMATION
    fillData(data, document.querySelector('.main-body'));
    // DELETING PROJECT
    if (indexList === undefined) {
      // CLEAR PARENT
      const topProjectX = document.querySelector(
        `.top-project-${indexProject}`
      );
      childRemover(topProjectX);
      // CONFIRM DELETION PROMPT
      const confirmContainer = elMaker(
        'div',
        topProjectX,
        '',
        'confirm-container'
      );
      elMaker(
        'div',
        confirmContainer,
        `Delete '${upperFirst(
          data[indexProject].name
        )}' project and all the tasks inside it?`,
        'confirm-text'
      );
      // CONFIRM DELETION BUTTONS
      const buttonContainer = elMaker(
        'div',
        confirmContainer,
        '',
        'confirm-cancel-container'
      );
      cancelButton(data, buttonContainer);
      const confirmButton = elMaker(
        'div',
        buttonContainer,
        '',
        'confirm-button'
      );
      confirmButton.addEventListener('mouseup', () =>
        deleteData(data, indexProject, indexList)
      );
    } else {
      // CLEAR PARENT
      const listContainerX = document.querySelector(
        `.list-container-${indexProject}-${indexList}`
      );
      childRemover(listContainerX);
      // CONFIRM DELETION PROMPT
      const confirmContainer = elMaker(
        'div',
        listContainerX,
        '',
        'confirm-container'
      );
      elMaker(
        'div',
        confirmContainer,
        `Delete '${upperFirst(
          data[indexProject].content[indexList].title
        )}' task?`,
        'confirm-text'
      );
      // CONFIRM DELETION BUTTONS
      const buttonContainer = elMaker(
        'div',
        confirmContainer,
        '',
        'confirm-cancel-container'
      );
      cancelButton(data, buttonContainer);
      const confirmButton = elMaker(
        'div',
        buttonContainer,
        '',
        'confirm-button'
      );
      confirmButton.addEventListener('mouseup', () =>
        deleteData(data, indexProject, indexList)
      );
    }
  });
};
const deleteData = (data, indexProject, indexList) => {
  if (indexList === undefined) {
    // DELETE PROJECT DATA
    notify(
      `Successfully deleted '${data[indexProject].name}' and all of its contents`
    );
    data.splice(indexProject, 1);
  } else {
    // DELETE TASK DATA
    notify(
      `Successfully deleted '${data[indexProject].content[indexList].title}' from '${data[indexProject].name}'`
    );
    data[indexProject].content.splice(indexList, 1);
  }
  // SAVED USER DATA
  localStorage.setItem('user', JSON.stringify(data));
  // UPDATE DATA DISPLAY
  fillData(reProject(data), document.querySelector('.main-body')); // FILL MAINBODY NEW DATA
};
// INPUT: PRIORITY
const priorityMaker = (parent, scaleArray, defaultScale) => {
  const priorityContainer = elMaker('div', parent, '', 'priority-container');
  const priority = elMaker('div', priorityContainer, 'Priority:', 'priority');
  for (let i = 0; i < scaleArray.length; i++) {
    const radioInput = elMaker(
      'input',
      priorityContainer,
      scaleArray[i],
      'priority',
      'priority-input',
      `priority-input-${scaleArray[i]}`
    );
    radioInput.setAttribute('name', 'priority');
    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('value', scaleArray[i]);
    radioInput.id = `priority-${scaleArray[i]}`;

    const label = elMaker(
      'label',
      priorityContainer,
      '',
      'priority-label',
      `priority-label-${scaleArray[i]}`
    );
    label.setAttribute('for', `priority-${scaleArray[i]}`);
    // DEFAULT
    if (scaleArray[i] === defaultScale) {
      radioInput.setAttribute('checked', '');
    }
  }
};
// INPUT: DUE
const dueMaker = (parent) => {
  const dueContainer = elMaker('div', parent, '', 'due-container');
  const dueIn = elMaker('div', dueContainer, 'Due in:');
  const timeInput = elMaker('input', dueContainer, '00', 'time-input');
  timeInput.setAttribute('type', 'number');
  timeInput.setAttribute('value', '0');
  timeInput.setAttribute('min', '0');
  timeInput.setAttribute('max', '24');
  const timeLabel = elMaker('label', dueContainer, 'hour(s)', 'time-label');
  const dayInput = elMaker('input', dueContainer, '00', 'day-input');
  dayInput.setAttribute('type', 'number');
  dayInput.setAttribute('value', '0');
  dayInput.setAttribute('min', '0');
  dayInput.setAttribute('max', '30');
  const dayLabel = elMaker('label', dueContainer, 'day(s)', 'day-label');
};
//PROCESS RAW TIME & DATE
const dueTranslator = (hourInput, dayInput) => {
  if (hourInput == 0 && dayInput == 0) {
    return [0, 0, 0, 0, 0];
  } else {
    // ADD MISSING PARTS
    let hour = new Date().getHours() + parseInt(hourInput);
    let minute = new Date().getMinutes();
    let day = new Date().getDate() + parseInt(dayInput);
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    // COMBINING INTO ONE FORMAT
    const event = new Date(year, month, day, hour, minute, 0);
    const optionD = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const optionT = { hour12: false };
    const datePart = event.toLocaleDateString('en-GB', optionD);
    const timePart = event.toLocaleTimeString(undefined, optionT);
    // PARSE & PUT INTO ARRAY
    const newDate = datePart.split('/').map((num) => parseInt(num));
    const newTime = timePart.split(':', 2).map((num) => parseInt(num));
    return newTime.concat(newDate);
  }
};
// INPUT: STATUS
const checkboxMaker = (data, parent, indextProject, indexList) => {
  const checkboxContainer = elMaker('label', parent, '', 'checkbox-container');
  const checkbox = elMaker('input', checkboxContainer, '', 'checkbox');
  checkbox.setAttribute('data-project', indextProject);
  checkbox.setAttribute('data-list', indexList);
  checkbox.setAttribute('type', 'checkbox');
  checkbox.addEventListener('change', () => {
    let currentStatus = data[indextProject].content[indexList].status;
    const listContainerX = document.querySelector(
      `.list-container-${indextProject}-${indexList}`
    );
    if (currentStatus === 'in-progress') {
      notify(`Successfully set '${data[indextProject].content[indexList].title}' as complete`)
      data[indextProject].content[indexList].status = 'complete';
      listContainerX.classList.replace('list-in-progress', 'list-complete');
    } else {
      notify(`Successfully set '${data[indextProject].content[indexList].title}' back to in-progress`)
      data[indextProject].content[indexList].status = 'in-progress';
      listContainerX.classList.replace('list-complete', 'list-in-progress');
    }
    // SAVED USER DATA
    localStorage.setItem('user', JSON.stringify(data));
    // UPDATE DATA DISPLAY
    return fillData(reProject(data), document.querySelector('.main-body'));
  });
};
// ADD SEQUENCE
const addButton = (data, parent, classNameArray, indexProject) => {
  const addContainer = elMaker(
    'div',
    parent,
    '',
    'add-container',
    `add-container-${indexProject}`
  );
  const addBtn = elMaker('button', addContainer, '', 'add-button');
  addBtn.addEventListener('mouseup', function () {
    fillData(data, document.querySelector('.main-body'));
    const addContainerX = document.querySelector(
      `.add-container-${indexProject}`
    );
    childRemover(addContainerX);
    addInput(reProject(data), addContainerX, classNameArray, indexProject);
  });
};
const addInput = (data, parent, classNameArray, indexProject) => {
  const addInputContainer = elMaker('form', parent, '', 'add-input-container');
  if (classNameArray.includes('name')) {
    const input = elMaker(
      'input',
      addInputContainer,
      '',
      `${classNameArray[0]}-input`,
      'input'
    );
    input.placeholder = `project ${classNameArray[0]}`;
  } else {
    for (let i = 0; i < classNameArray.length; i++) {
      const input = elMaker(
        'input',
        addInputContainer,
        '',
        `${classNameArray[i]}-input`,
        'input'
      );
      input.placeholder = classNameArray[i];
    }
    priorityMaker(addInputContainer, ['low', 'medium', 'high'], 'low');
    dueMaker(addInputContainer);
  }

  // CANCEL AND CONFIRM
  const buttonContainer = elMaker(
    'div',
    addInputContainer,
    '',
    'submit-cancel-container'
  );
  cancelButton(data, buttonContainer);
  submitAddButton(data, buttonContainer, indexProject);
};
const submitAddButton = (data, parent, indexProject) => {
  const submit = elMaker('button', parent, '', 'submit-button');
  submit.addEventListener('mouseup', function (event) {
    event.preventDefault();
    // ADD PROJECT
    if (!data[indexProject]) {
      const nameInput = document.querySelector('.name-input').value;
      // Avoid empty input
      if (nameInput === '') {
        data.push({ name: 'new project', content: [] });
        notify('Successfully added a new project');
      } else {
        // Normal Input
        data.push({
          name: nameInput,
          content: [],
        });
        notify(`Successfully added a new project named '${nameInput}'`);
      }
    }
    // ADD LIST
    else if (data[indexProject].content) {
      const titleInput = document.querySelector('.title-input').value;
      const textInput = document.querySelector('.text-input').value;
      const priorityInput = document.querySelector('.priority:checked').value;
      const dueTimeInput = document.querySelector('.time-input').value;
      const dueDayInput = document.querySelector('.day-input').value;

      // Avoid empty input
      if (titleInput === '' && textInput === '') {
        data[indexProject].content.push({
          title: 'new task',
          text: '',
          priority: priorityInput,
          status: 'in-progress',
          created: timeCreation(),
          due: dueTranslator(dueTimeInput, dueDayInput),
        });
        notify(
          `Successfully added a new task to '${data[indexProject].name}'`
        );
      } else {
        // normal input
        data[indexProject].content.push({
          title: titleInput,
          text: textInput,
          priority: priorityInput,
          status: 'in-progress',
          created: timeCreation(),
          due: dueTranslator(dueTimeInput, dueDayInput),
        });
        notify(
          `Successfully added a task named '${titleInput}' to '${data[indexProject].name}'`
        );
      }
    }
    // SAVED USER DATA
    localStorage.setItem('user', JSON.stringify(data));
    // UPDATE DATA DISPLAY
    return fillData(reProject(data), document.querySelector('.main-body'));
  });
};
// EDIT SEQUENCE
const editButton = (data, parent, indexProject, indexList) => {
  const editBtn = elMaker('button', parent, '', 'edit-button');
  editBtn.addEventListener('mouseup', function () {
    fillData(data, document.querySelector('.main-body'));
    // PROJECT
    if (indexList == undefined) {
      const topProjectX = document.querySelector(
        `.top-project-${indexProject}`
      );
      childRemover(topProjectX);
      editInput(data, topProjectX, ['name'], indexProject, indexList);
    } else {
      // LIST
      const listContainerX = document.querySelector(
        `.list-container-${indexProject}-${indexList}`
      );
      childRemover(listContainerX);
      editInput(
        data,
        listContainerX,
        ['title', 'text'],
        indexProject,
        indexList
      );
    }
  });
};
const editInput = (data, parent, classNameArray, indexProject, indexList) => {
  const editInputContainer = elMaker('div', parent, '', 'edit-input-container');
  // EDIT PROJECT NAME
  if (classNameArray.includes('name')) {
    const input = elMaker(
      'input',
      editInputContainer,
      '',
      `${classNameArray[0]}-input`,
      'input'
    );
    input.value = data[indexProject][classNameArray[0]];
    input.placeholder = 'project name';
  } else {
    // EDIT TASK
    for (let i = 0; i < classNameArray.length; i++) {
      const input = elMaker(
        'input',
        editInputContainer,
        '',
        `${classNameArray[i]}-input`,
        'input'
      );
      input.value = data[indexProject].content[indexList][classNameArray[i]];
      input.placeholder = classNameArray[i];
    }
    priorityMaker(
      editInputContainer,
      ['low', 'medium', 'high'],
      data[indexProject].content[indexList]['priority']
    );
    dueMaker(editInputContainer);
  }

  const buttonContainer = elMaker(
    'div',
    editInputContainer,
    '',
    'submit-cancel-container'
  );
  cancelButton(data, buttonContainer);
  submitEditButton(reProject(data), buttonContainer, indexProject, indexList);
};
const submitEditButton = (data, parent, indexProject, indexList) => {
  const submit = elMaker('button', parent, '', 'submit-button');
  submit.addEventListener('mouseup', function (event) {
    event.preventDefault();
    // EDIT PROJECT
    if (indexList == undefined) {
      const inputValue = document.querySelector('.name-input').value;
      notify(
        `Successfully changed '${data[indexProject].name}' into '${inputValue}'`
      );
      data.splice(indexProject, 1, {
        name: inputValue,
        content: data[indexProject].content,
      });
    }
    // EDIT LIST
    else {
      const dueTimeInput = document.querySelector('.time-input').value;
      const dueDayInput = document.querySelector('.day-input').value;
      const inputTitle = document.querySelector('.title-input').value;
      notify(
        `Successfully changed '${data[indexProject].content[indexList].title}' into '${inputTitle}'`
      );

      data[indexProject].content.splice(indexList, 1, {
        title: inputTitle,
        text: document.querySelector('.text-input').value,
        priority: document.querySelector('.priority:checked').value,
        status: 'in-progress',
        created: timeCreation(),
        due: dueTranslator(dueTimeInput, dueDayInput),
      });
    }
    // SAVED USER DATA
    localStorage.setItem('user', JSON.stringify(data));
    // UPDATE DATA DISPLAY
    return fillData(reProject(data), document.querySelector('.main-body'));
  });
};
// DISPLAY DATA
const fillData = (data, parent) => {
  childRemover(parent);
  // FILL MAIN BODY
  for (let i = 0; i < data.length; i++) {
    const projectContainer = elMaker('div', parent, '', 'project-container');
    // TOP PROJECT
    const topProject = elMaker(
      'div',
      projectContainer,
      '',
      'top-project',
      `top-project-${i}`
    );
    const projectName = elMaker(
      'div',
      topProject,
      data[i].name.toUpperCase(),
      'project-name'
    );
    const buttonContainer = elMaker(
      'div',
      topProject,
      '',
      'button-container',
      'invisible'
    );
    editButton(data, buttonContainer, i);
    deleteButton(data, buttonContainer, i);
    // SHOW BUTTONS
    topProject.addEventListener('mouseover', () => {
      buttonContainer.classList.remove('invisible');
    });
    // HIDE BUTTONS
    topProject.addEventListener('mouseleave', () => {
      buttonContainer.classList.add('invisible');
    });

    // MID PROJECT: SHOW ALL TASKS
    const midProject = elMaker('div', projectContainer, '', 'mid-project');
    midProject.addEventListener('mouseover', (e) => e.stopPropagation());
    if (data[i].content) {
      for (let j = 0; j < data[i].content.length; j++) {
        const listContainer = elMaker(
          'div',
          midProject,
          '',
          'list-container',
          `list-container-${i}-${j}`,
          `priority-${data[i].content[j].priority}`,
          `list-${data[i].content[j].status}`
        );
        // TOP LIST
        // MID LIST
        const midList = elMaker('div', listContainer, '', 'mid-list');
        checkboxMaker(data, midList, i, j);
        elMaker(
          'div',
          midList,
          upperFirst(data[i].content[j].title),
          'list-title'
        );
        const buttonContainer = elMaker(
          'div',
          midList,
          '',
          'button-container',
          'invisible'
        );
        editButton(data, buttonContainer, i, j);
        deleteButton(data, buttonContainer, i, j);
        elMaker(
          'div',
          midList,
          upperFirst(data[i].content[j].text),
          'list-text'
        );
        // BOTTOM LIST
        const bottomList = elMaker(
          'div',
          listContainer,
          '',
          'bottom-list',
          'hidden'
        );
        elMaker(
          'div',
          bottomList,
          `created ${displayTime(data[i].content[j].created)}`,
          'list-date'
        );
        elMaker(
          'div',
          bottomList,
          `due ${displayTime(data[i].content[j].due)}`,
          'list-due'
        );
        elMaker(
          'div',
          bottomList,
          `status: ${data[i].content[j].status}`,
          'list-status'
        );
        elMaker(
          'div',
          bottomList,
          `${data[i].content[j].priority} priority`,
          'list-priority'
        );
        // SHOW BUTTONS
        listContainer.addEventListener('mouseover', () => {
          buttonContainer.classList.remove('invisible');
        });
        // HIDE BUTTONS
        listContainer.addEventListener('mouseleave', () => {
          buttonContainer.classList.add('invisible');
        });
        // CLICK FOR TASK DETAILS
        listContainer.addEventListener('click', () => {
          // const bottomLists = document.querySelectorAll('.list-container .hidden');
          // bottomLists.forEach((el) => el.classList.add('hidden'));
          bottomList.classList.toggle('hidden');
        });
      }
    }
    // BOTTOM PROJECT: ADD NEW TASK
    const bottomProject = elMaker(
      'div',
      projectContainer,
      '',
      'bottom-project'
    );
    addButton(data, bottomProject, ['title', 'text'], i);
    bottomProject.addEventListener('mouseup', function (e) {
      e.stopPropagation();
    });
  }
  // ADD NEW PROJECT
  const addProjectContainer = elMaker(
    'div',
    parent,
    '',
    'add-project-container'
  );
  addButton(data, addProjectContainer, ['name']);
  addProjectContainer.addEventListener('mouseover', function (e) {
    e.stopPropagation();
  });
};

export { fillData };
