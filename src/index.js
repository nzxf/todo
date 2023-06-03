import './style.css';
// import { add, format } from 'date-fns';
import { allProjects } from './data';

import { functions } from './allFunctions';

const elMaker = functions.elMaker;
const makeNavbar = functions.makeNavbar;
const childRemover = functions.childRemover;

// DELETE BUTTON MAKER
const deleteButton = (data, parent, targetArr, targetIndex) => {
  const deleteBtn = elMaker('button', parent, '', 'delete-button');
  deleteBtn.addEventListener('mouseup', function () {
    targetArr.splice(targetIndex, 1); // DELETE THE DATA
    fillData(data, document.querySelector('.main-body')); // FILL MAINBODY NEW DATA
  });
};

const submitButton = (data, parent, indexProject) => {
  const submit = elMaker('button', parent, '', 'submit-button');
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    // PUSH DATA INPUT
    if (indexProject >= 0) {
      data[indexProject].content.push({
        title: document.querySelector('.title-input').value,
        text: document.querySelector('.text-input').value,
      });
    } else {
      data.push({ name: document.querySelector('.name-input').value, content: [] });
    }
    // REFRESH DATA DISPLAY
    childRemover(parent); // CLEAR INPUT FORM
    fillData(data, document.querySelector('.main-body')); // FILL MAIN BODY NEW DATA
  });
};

const addInput = (data, parent, classNameArray, indexProject, indexList) => {
  const form = elMaker('form', parent);
  for (let i = 0; i < classNameArray.length; i++) {
    const label = elMaker('label', form, classNameArray[i], `${classNameArray[i]}-label`);
    const input = elMaker('input', form, classNameArray[i], `${classNameArray[i]}-input`, 'input');
    // console.log('project index' + indexProject)
    // input.value = data[projectIndex].content[0][classNameArray[i]]
  }
  // SUBMIT BUTTON
  submitButton(data, form, indexProject);
};

const editButton = (data, parent, targetArr, indexProject, indexList) => {
  const editBtn = elMaker('button', parent, '', 'edit-button');
  editBtn.addEventListener('mouseup', function () {
    // addButton(data, projectContainer, ['title', 'text'], i);
    if (indexList == undefined) {
      console.log('editing ' + targetArr[indexProject].name);
      // document.querySelectorAll('.project-name').forEach((name) => name.remove());
    } else {
      // childRemover(parent.parentNode);
      // addInput(data, document.querySelector('.list-container'), targetIndex, ['title', 'text']);
      console.log('editing ' + targetArr[indexList].title);
    }
    // fillData(data, document.querySelector('.main-body'));
  });
};

const addButton = (data, parent, classNameArray, indexProject) => {
  const addContainer = elMaker('div', parent, '', 'add-container');
  const addBtn = elMaker('button', addContainer, '', 'add-button');
  addBtn.addEventListener('mouseup', function () {
    childRemover(addContainer);
    addInput(data, addContainer, classNameArray, indexProject);
  });
};

const fillData = (data, parent) => {
  // CLEAN MAINBODY
  childRemover(parent);
  // FILL MAINBODY
  for (let i = 0; i < data.length; i++) {
    const projectContainer = elMaker('div', parent, '', 'project-container');
    // BUTTONS (PROJECT)
    const buttonContainer = elMaker('div', projectContainer, '', 'button-container');
    editButton(data, buttonContainer, data, i);
    deleteButton(data, buttonContainer, data, i);
    // FILL PROJECT
    const projectName = elMaker('div', projectContainer, data[i].name.toUpperCase(), 'project-name');
    if (data[i].content) {
      for (let j = 0; j < data[i].content.length; j++) {
        const listContainer = elMaker('div', projectContainer, '', 'list-container');
        // BUTTONS (LIST)
        const buttonContainer = elMaker('div', listContainer, '', 'button-container');
        editButton(data, buttonContainer, data[i].content, i, j);
        deleteButton(data, buttonContainer, data[i].content, j);
        // FILL LIST
        elMaker('div', listContainer, data[i].content[j].title, 'list-title');
        elMaker('div', listContainer, data[i].content[j].text, 'list-text');
      }
    }
    addButton(data, projectContainer, ['title', 'text'], i);
  }
  const addProjectContainer = elMaker('div', parent, '', 'add-project-container');
  addButton(data, addProjectContainer, ['name']);
  // elMaker('div', addProjectContainer, 'Add a project', 'add-project-button');
};

const content = document.querySelector('.content');
makeNavbar(content);
const mainBody = elMaker('div', content, '', 'main-body');
fillData(allProjects, mainBody);
