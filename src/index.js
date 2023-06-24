import './style.css';
import { allProjects } from './seeds';

import { functions } from './allFunctions';
const elMaker = functions.elMaker;
const makeNavbar = functions.makeNavbar;
const reProject = functions.reProject;
const checkLocalData = functions.checkLocalData;

import { fillData } from './utils';

const loadPage = (data) => {
  const content = document.querySelector('.content');

  content.addEventListener('mouseover', function () {
    fillData(reProject(checkLocalData(data)), mainBody);
  });
  // NAVBAR
  makeNavbar(content);
  const mainBody = elMaker('div', content, '', 'main-body');
  // CONTENT
  fillData(reProject(checkLocalData(data)), mainBody);
};

loadPage(allProjects);