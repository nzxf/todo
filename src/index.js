import './style.css';
// import { add, format } from 'date-fns';
import { allProjects } from './data';

import { functions } from './allFunctions';

const elMaker = functions.elMaker;
const makeNavbar = functions.makeNavbar;
const childRemover = functions.childRemover;

// DELETE BUTTON MAKER
const deleteButton = (data, parent, targetArr, targetIndex) => {
  const deleteContainer = elMaker('div', parent, '', 'delete-container');
  const deleteBtn = elMaker('button', deleteContainer, '', 'delete-button');
  deleteBtn.addEventListener('mouseup', function () {
    targetArr.splice(targetIndex, 1); // DELETE THE PROJECT
    childRemover(document.querySelector('.main-body')); // CLEAR MAINBODY
    fillData(data, document.querySelector('.main-body')); // FILL MAINBODY NEW DATA
  });
};

const submitButton = (data, parent, projectIndex) => {
  const submit = elMaker('button', parent, '', 'submit-button');
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    // PUSH DATA INPUT
    if (projectIndex >= 0) {
      data[projectIndex].content.push({
        title: document.querySelector('.title-input').value,
        text: document.querySelector('.text-input').value,
      });
    } else {
      data.push({ name: document.querySelector('.name-input').value, content: [] });
    }
    // REFRESH DATA DISPLAY
    childRemover(parent); // CLEAR INPUT FORM
    childRemover(document.querySelector('.main-body')); // CLEAR MAINBODY
    fillData(data, document.querySelector('.main-body')); // FILL MAIN BODY NEW DATA
  });
};

const addInput = (data, parent, projectIndex, classNameArray) => {
  const form = elMaker('form', parent);
  for (let i = 0; i < classNameArray.length; i++) {
    const label = elMaker('label', form, classNameArray[i], `${classNameArray[i]}-label`);
    const input = elMaker('input', form, classNameArray[i], `${classNameArray[i]}-input`, 'input');
  }
  // SUBMIT BUTTON
  submitButton(data, form, projectIndex);
};

const addButton = (data, parent, classNameArray, projectIndex) => {
  const addContainer = elMaker('div', parent, '', 'add-container');
  const addBtn = elMaker('button', addContainer, '', 'add-button');
  addBtn.addEventListener('mouseup', function () {
    childRemover(addContainer);
    addInput(data, addContainer, projectIndex, classNameArray);
  });
};

// const addProjectButton = (data, parent)

const content = document.querySelector('.content');
makeNavbar(content);

const fillData = (data, parent) => {
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    const projectContainer = elMaker('div', parent, '', 'project-container');
    // DELETE BUTTON (PROJECT)
    deleteButton(data, projectContainer, data, i);
    const projectName = elMaker('div', projectContainer, data[i].name.toUpperCase(), 'project-name');
    if (data[i].content) {
      for (let j = 0; j < data[i].content.length; j++) {
        const listContainer = elMaker('div', projectContainer, '', 'list-container');
        // DELETE BUTTON (LIST)
        deleteButton(data, listContainer, data[i].content, j);
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

const mainBody = elMaker('div', content, '', 'main-body');
fillData(allProjects, mainBody);
