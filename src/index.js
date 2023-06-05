import './style.css';
// import { add, format } from 'date-fns';
import { allProjects } from './data';

import { functions } from './allFunctions';
import el from 'date-fns/esm/locale/el/index.js';

const elMaker = functions.elMaker;
const makeNavbar = functions.makeNavbar;
const childRemover = functions.childRemover;
const timeCreation = functions.timeCreation;
const displayTime = functions.displayTime;

const cancelButton = (data, parent) => {
  const cancel = elMaker('div', parent, '', 'cancel-button');
  cancel.addEventListener('click', function () {
    fillData(data, document.querySelector('.main-body'));
  });
};

// DELETE
const deleteButton = (data, parent, targetArr, targetIndex) => {
  const deleteBtn = elMaker('button', parent, '', 'delete-button');
  deleteBtn.addEventListener('mouseup', function () {
    targetArr.splice(targetIndex, 1); // DELETE THE DATA
    fillData(data, document.querySelector('.main-body')); // FILL MAINBODY NEW DATA
  });
};
// ADD SEQUENCE
const addButton = (data, parent, classNameArray, indexProject) => {
  const addContainer = elMaker('div', parent, '', 'add-container');
  const addBtn = elMaker('button', addContainer, '', 'add-button');
  addBtn.addEventListener('mouseup', function () {
    childRemover(parent);
    addInput(data, parent, classNameArray, indexProject);
  });
};
const addInput = (data, parent, classNameArray, indexProject) => {
  for (let i = 0; i < classNameArray.length; i++) {
    const label = elMaker('label', parent, classNameArray[i], `${classNameArray[i]}-label`);
    const input = elMaker('input', parent, '', `${classNameArray[i]}-input`, 'input');
  }
  // CANCEL AND CONFIRM
  const bottonContainer = elMaker('div', parent, '', 'submit-cancel-container');
  cancelButton(data, bottonContainer);
  submitAddButton(data, bottonContainer, indexProject);
};
const submitAddButton = (data, parent, indexProject) => {
  const submit = elMaker('button', parent, '', 'submit-button');
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    // ADD PROJECT
    if (!data[indexProject]) {
      data.push({
        name: document.querySelector('.name-input').value,
        content: [],
      });
    }
    // ADD LIST
    else if (data[indexProject].content) {
      data[indexProject].content.push({
        title: document.querySelector('.title-input').value,
        text: document.querySelector('.text-input').value,
        created: timeCreation(),
      });
    }
    return fillData(data, document.querySelector('.main-body'));
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
      editInput(data, listContainerX, ['title', 'text'], indexProject, indexList);
    }
  });
};
const editInput = (data, parent, classNameArray, indexProject, indexList) => {
  for (let i = 0; i < classNameArray.length; i++) {
    const label = elMaker('label', parent, classNameArray[i], `${classNameArray[i]}-label`);
    const input = elMaker('input', parent, '', `${classNameArray[i]}-input`, 'input');
    // IF DATA EXIST
    if (classNameArray[i] == 'name') {
      input.value = data[indexProject][classNameArray[i]];
    } else if (classNameArray[i] == 'title' || classNameArray[i] == 'text') {
      input.value = data[indexProject].content[indexList][classNameArray[i]];
    }
  }
  const bottonContainer = elMaker('div', parent, '', 'submit-cancel-container');
  cancelButton(data, bottonContainer);
  submitEditButton(data, bottonContainer, indexProject, indexList);
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
        created: timeCreation(),
      });
    }
    // UPDATE DATA DISPLAY
    // childRemover(parent);
    return fillData(data, document.querySelector('.main-body'));
  });
};

// HIDE OTHERS BUTTONS, EXCEPT SELECTED
const hideAllButOne = (container, trigger, dotClassName, elementName) => {
  container.addEventListener(trigger, function (e) {
    e.stopPropagation();
    const elements = document.querySelectorAll(dotClassName);
    elements.forEach((element) => element.classList.add('hidden'));
    if (document.querySelector('.hidden')) {
      elementName.classList.toggle('hidden');
    }
  });
};

// DISPLAY DATA
const fillData = (data, parent) => {
  // CLEAR MAIN BODY
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
    // MID PROJECT
    const midProject = elMaker('div', projectContainer, '', 'mid-project');
    if (data[i].content) {
      for (let j = 0; j < data[i].content.length; j++) {
        const listContainer = elMaker('div', midProject, '', 'list-container', `list-container-${i}-${j}`);
        // TOP LIST
        const buttonContainer = elMaker('div', listContainer, '', 'button-container', 'hidden');
        editButton(data, buttonContainer, i, j);
        deleteButton(data, buttonContainer, data[i].content, j);
        // MID LIST
        const midList = elMaker('div', listContainer, '', 'mid-list');
        elMaker('div', midList, data[i].content[j].title, 'list-title');
        elMaker('div', midList, data[i].content[j].text, 'list-text');
        // BOTTOM LIST
        const bottomList = elMaker('div', listContainer, '', 'bottom-list');
        elMaker('div', bottomList, displayTime(data[i].content[j].created, 'time'), 'list-time');
        elMaker('div', bottomList, displayTime(data[i].content[j].created, 'date'), 'list-date');
        // elMaker('div', bottomList, translateTime(data[i].content[j].created), 'list-date'); // BOTH
        // SHOW BUTTONS WHEN SELECTED
        hideAllButOne(listContainer, 'click', '.button-container', buttonContainer);
      }
    }
    // BOTTOM PROJECT
    const bottomProject = elMaker('div', projectContainer, '', 'bottom-project', 'hidden');
    addButton(data, bottomProject, ['title', 'text'], i);
    // SHOW BUTTONS WHEN SELECTED
    hideAllButOne(projectContainer, 'click', '.button-container', buttonContainer);
    hideAllButOne(projectContainer, 'click', '.bottom-project', bottomProject);
  }
  const addProjectContainer = elMaker('div', parent, '', 'add-project-container');
  addButton(data, addProjectContainer, ['name']);
};

const content = document.querySelector('.content');
makeNavbar(document.querySelector('.content'));

const mainBody = elMaker('div', content, '', 'main-body');
fillData(allProjects, mainBody);

// TODO: add project button keep opening when unselected
