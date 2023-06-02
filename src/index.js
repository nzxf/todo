import './style.css';
// import { add, format } from 'date-fns';
import { allProjects } from './data';

import { functions } from './allFunctions';

const elMaker = functions.elMaker;
const makeNavbar = functions.makeNavbar;

const content = document.querySelector('.content');

makeNavbar(content);

const fillData = (data, parent) => {
  for (let i = 0; i < data.length; i++) {
    const projectContainer = elMaker('div', parent, '', 'project-container');
    const projectName = elMaker(
      'div',
      projectContainer,
      data[i].name.toUpperCase(),
      'project-name'
    );
    for (let j = 0; j < data[i].content.length; j++) {
      // let data = data[i].content;
      const listContainer = elMaker('div', projectContainer, '', 'list-container');
      const listTitle = elMaker(
        'div',
        listContainer,
        data[i].content[j].title,
        'list-title'
      );
      const listText = elMaker(
        'div',
        listContainer,
        data[i].content[j].text,
        'list-text'
      );
    }
  }
};

const mainBody = elMaker('div', content, '', 'main-body');
fillData(allProjects, mainBody);