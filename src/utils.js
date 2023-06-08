import { functions } from './allFunctions';
const upperFirst = functions.upperFirst;
const timeCreation = functions.timeCreation;
const elMaker = functions.elMaker;
const childRemover = functions.childRemover;
const displayTime = functions.displayTime;
const reProject = functions.reProject;


// CANCEL
const cancelButton = (data, parent) => {
  const cancel = elMaker('div', parent, '', 'cancel-button');
  cancel.addEventListener('click', function () {
    fillData(reProject(data), document.querySelector('.main-body'));
  });
};
// DELETE
const deleteButton = (data, parent, targetArr, targetIndex) => {
  const deleteBtn = elMaker('button', parent, '', 'delete-button');
  deleteBtn.addEventListener('mouseup', function () {
    // DELETE THE DATA
    targetArr.splice(targetIndex, 1);
    // SAVED USER DATA
    localStorage.setItem('user', JSON.stringify(data));
    // UPDATE DATA DISPLAY
    fillData(reProject(data), document.querySelector('.main-body')); // FILL MAINBODY NEW DATA
  });
};
const priorityMaker = (parent, scaleArray, defaultScale) => {
  const priorityContainer = elMaker('div', parent, '', 'priority-container');
  const priority = elMaker('div', priorityContainer, 'priority:', 'priority');
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

    const label = elMaker('label', priorityContainer, '', 'priority-label', `priority-label-${scaleArray[i]}`);
    label.setAttribute('for', `priority-${scaleArray[i]}`);
    // DEFAULT
    if (scaleArray[i] === defaultScale) {
      radioInput.setAttribute('checked', '');
    }
  }
};

// ADD SEQUENCE
const addButton = (data, parent, classNameArray, indexProject) => {
  const addContainer = elMaker('div', parent, '', 'add-container');
  const addBtn = elMaker('button', addContainer, '', 'add-button');
  addBtn.addEventListener('mouseup', function () {
    childRemover(parent);
    addInput(reProject(data), parent, classNameArray, indexProject);
  });
};
const addInput = (data, parent, classNameArray, indexProject) => {
  const addInputContainer = elMaker('form', parent, '', 'add-input-container');
  if (classNameArray.includes('name')) {
    const input = elMaker('input', addInputContainer, '', `${classNameArray[0]}-input`, 'input');
    input.placeholder = `project ${classNameArray[0]}`;
  } else {
    for (let i = 0; i < classNameArray.length - 1; i++) {
      // remove (-1) to include due
      const input = elMaker('input', addInputContainer, '', `${classNameArray[i]}-input`, 'input');
      input.placeholder = classNameArray[i];
    }
    priorityMaker(addInputContainer, ['low', 'medium', 'high'], 'low');
  }

  // CANCEL AND CONFIRM
  const bottonContainer = elMaker('div', addInputContainer, '', 'submit-cancel-container');
  cancelButton(data, bottonContainer);
  submitAddButton(data, bottonContainer, indexProject);
};
const submitAddButton = (data, parent, indexProject) => {
  const submit = elMaker('button', parent, '', 'submit-button');
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    // ADD PROJECT
    if (!data[indexProject]) {
      const nameInput = document.querySelector('.name-input').value;
      // Avoid empty input
      if (nameInput === '') {
        data.push({ name: 'empty', content: [] });
      } else {
        // Normal Input
        data.push({
          name: nameInput,
          content: [],
        });
      }
    }
    // ADD LIST
    else if (data[indexProject].content) {
      const titleInput = document.querySelector('.title-input').value;
      const textInput = document.querySelector('.text-input').value;
      const priorityInput = document.querySelector('.priority:checked').value;
      // Avoid empty input
      if (titleInput === '' && textInput === '') {
        data[indexProject].content.push({
          title: '',
          text: 'empty',
          priority: priorityInput,
          created: timeCreation(),
          due: [0, 0, 0, 0, 0],
        });
      } else {
        // normal input
        data[indexProject].content.push({
          title: titleInput,
          text: textInput,
          priority: priorityInput,
          created: timeCreation(),
          due: [0, 0, 0, 0, 0],
        });
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
    // PROJECT
    if (indexList == undefined) {
      const topProjectX = document.querySelector(`.top-project-${indexProject}`);
      childRemover(topProjectX);
      editInput(data, topProjectX, ['name'], indexProject, indexList);
    } else {
      // LIST
      const listContainerX = document.querySelector(`.list-container-${indexProject}-${indexList}`);
      childRemover(listContainerX);
      editInput(data, listContainerX, ['title', 'text', 'due'], indexProject, indexList);
    }
  });
};
const editInput = (data, parent, classNameArray, indexProject, indexList) => {
  const editInputContainer = elMaker('div', parent, '', 'edit-input-container');
  if (classNameArray.includes('name')) {
    const input = elMaker('input', editInputContainer, '', `${classNameArray[0]}-input`, 'input');
    input.value = data[indexProject][classNameArray[0]];
  } else {
    for (let i = 0; i < classNameArray.length - 1; i++) {
      // minus 1 = due
      const input = elMaker('input', editInputContainer, '', `${classNameArray[i]}-input`, 'input');
      input.value = data[indexProject].content[indexList][classNameArray[i]];
    }
    priorityMaker(editInputContainer, ['low', 'medium', 'high'], data[indexProject].content[indexList]['priority']);
  }

  const bottonContainer = elMaker('div', editInputContainer, '', 'submit-cancel-container');
  cancelButton(data, bottonContainer);
  submitEditButton(reProject(data), bottonContainer, indexProject, indexList);
};
const submitEditButton = (data, parent, indexProject, indexList) => {
  const submit = elMaker('button', parent, '', 'submit-button');
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    // EDIT PROJECT
    if (indexList == undefined) {
      data.splice(indexProject, 1, {
        name: document.querySelector('.name-input').value,
        content: data[indexProject].content,
      });
    }
    // EDIT LIST
    else {
      data[indexProject].content.splice(indexList, 1, {
        title: document.querySelector('.title-input').value,
        text: document.querySelector('.text-input').value,
        priority: document.querySelector('.priority:checked').value,
        created: timeCreation(),
        due: [0, 0, 0, 0, 0],
      });
    }
    // SAVED USER DATA
    localStorage.setItem('user', JSON.stringify(data));
    // UPDATE DATA DISPLAY
    return fillData(reProject(data), document.querySelector('.main-body'));
  });
};
// HIDE OTHERS BUTTONS
const hideAllButOne = (container, trigger, elementName, anotherElementName) => {
  container.addEventListener(trigger, function (e) {
    e.stopPropagation();

    const elements1 = document.querySelectorAll('.button-container');
    elements1.forEach((element) => element.classList.add('hidden'));
    const elements2 = document.querySelectorAll('.bottom-list');
    elements2.forEach((element) => element.classList.add('hidden'));

    if (document.querySelector('.hidden')) {
      // elements1.classList.remove('hidden')
      if (anotherElementName === undefined) {
        return elementName.classList.toggle('hidden');
      }
      elementName.classList.remove('hidden');
      anotherElementName.classList.toggle('hidden');
    }
  });
};

// DISPLAY DATA
const fillData = (data, parent) => {
  childRemover(parent);
  // FILL MAIN BODY
  for (let i = 0; i < data.length; i++) {
    const projectContainer = elMaker('div', parent, '', 'project-container');
    // TOP PROJECT
    const topProject = elMaker('div', projectContainer, '', 'top-project', `top-project-${i}`);
    const buttonContainer = elMaker('div', topProject, '', 'button-container', 'hidden');
    editButton(data, buttonContainer, i);
    deleteButton(data, buttonContainer, data, i);
    const projectName = elMaker('div', topProject, data[i].name.toUpperCase(), 'project-name');
    // MID PROJECT: SHOW ALL TASKS
    const midProject = elMaker('div', projectContainer, '', 'mid-project');
    if (data[i].content) {
      for (let j = 0; j < data[i].content.length; j++) {
        const listContainer = elMaker(
          'div',
          midProject,
          '',
          'list-container',
          `list-container-${i}-${j}`,
          `priority-${data[i].content[j].priority}`
        );
        // TOP LIST
        const buttonContainer = elMaker('div', listContainer, '', 'button-container', 'hidden');
        editButton(data, buttonContainer, i, j);
        deleteButton(data, buttonContainer, data[i].content, j);
        // MID LIST
        const midList = elMaker('div', listContainer, '', 'mid-list');
        elMaker('div', midList, upperFirst(data[i].content[j].title), 'list-title');
        elMaker('div', midList, upperFirst(data[i].content[j].text), 'list-text');
        // BOTTOM LIST
        const bottomList = elMaker('div', listContainer, '', 'bottom-list', 'hidden');
        // const listTime = elMaker('div', bottomList, displayTime(data[i].content[j].created, 'time'), 'list-time');
        const listDate = elMaker('div', bottomList, displayTime(data[i].content[j].created, 'date'), 'list-date');
        // elMaker('div', bottomList, `created ${displayTime(data[i].content[j].created)}`, 'list-date');
        // elMaker('div', bottomList, `due ${displayTime(data[i].content[j].due)}`, 'list-due');
        elMaker('div', bottomList, `${data[i].content[j].priority} priority`, 'list-priority'); // BOTH
        // SHOW BUTTONS WHEN SELECTED
        hideAllButOne(listContainer, 'click', buttonContainer, bottomList);
      }
    }
    // BOTTOM PROJECT: ADD NEW TASK
    const bottomProject = elMaker('div', projectContainer, '', 'bottom-project');
    addButton(data, bottomProject, ['title', 'text', 'due'], i);
    bottomProject.addEventListener('click', function (e) {
      e.stopPropagation();
    });
    // SHOW BUTTONS WHEN SELECTED
    hideAllButOne(projectContainer, 'click', buttonContainer);
  }
  // ADD NEW PROJECT
  const addProjectContainer = elMaker('div', parent, '', 'add-project-container');
  addButton(data, addProjectContainer, ['name']);
  addProjectContainer.addEventListener('click', function (e) {
    e.stopPropagation();
  });
};

export { fillData };
