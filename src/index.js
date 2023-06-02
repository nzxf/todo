import './style.css';
// import { add, format } from 'date-fns';
import { allProjects } from './data';

import { functions } from './allFunctions';

const elMaker = functions.elMaker;
const makeNavbar = functions.makeNavbar;

const childRemover = (parent) => {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.children[0]);
  }
};

// DELETE BUTTON MAKER
const addDeleteButton = (data, parent, targetEl, targetArr, targetIndex) => {
  const deleteContainer = elMaker('div', parent, '', 'delete-container');
  const deleteButton = elMaker('button', deleteContainer, '', 'delete-button');
  deleteButton.addEventListener('mouseup', function () {
    targetArr.splice(targetIndex, 1); // DELETE THE PROJECT
    childRemover(targetEl); // CLEAR MAINBOARD
    fillData(data, document.querySelector('.main-body')); // REFILL MAINBOARD WITH NEW DATA
  });
};

const content = document.querySelector('.content');
makeNavbar(content);

const fillData = (data, parent) => {
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    const projectContainer = elMaker('div', parent, '', 'project-container');
    // DELETE BUTTON (PROJECT)
    addDeleteButton(data, projectContainer, parent, data, i);
    const projectName = elMaker('div', projectContainer, data[i].name.toUpperCase(), 'project-name');
    for (let j = 0; j < data[i].content.length; j++) {
      const listContainer = elMaker('div', projectContainer, '', 'list-container');
      // DELETE BUTTON (LIST)
      addDeleteButton(data, listContainer, parent, data[i].content, j);
      const listTitle = elMaker('div', listContainer, data[i].content[j].title, 'list-title');
      const listText = elMaker('div', listContainer, data[i].content[j].text, 'list-text');
    }
    elMaker('div', projectContainer, 'Add a list', 'add-list-button');
  }
  const addProjectContainer = elMaker('div', parent, '', 'add-project-container');
  elMaker('div', addProjectContainer, 'Add a project', 'add-project-button');
};

const mainBody = elMaker('div', content, '', 'main-body');
fillData(allProjects, mainBody);
