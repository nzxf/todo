import './style.css';
import { add, format } from 'date-fns';

import { functions } from './allFunctions';
const elMaker = functions.elMaker;

const content = document.querySelector('.content');

// DUE (empty = 1 day from now)
let dueTime = (hour = 0, date = 1, month = 0, year = 0) => {
  let result = [];
  result.push(
    new Date().getHours() + hour,
    new Date().getDate() + date,
    new Date().getMonth() + month,
    new Date().getFullYear() + year
  );
  return result;
};

// Project Factory
const Project = (name, content) => {
  return { name, content };
};

// TODO input

let allProjects = [];
const addList = (name, title, text, due = dueTime()) => {
  if (allProjects.find((project) => project.name == name)) {
    // console.log('Add it to the existed project');
    let projectIndex = allProjects.findIndex(
      (project) => project.name === name
    );
    allProjects[projectIndex].content.push({
      title: title,
      text: text,
      due: due,
    });
  } else {
    // console.log('Uuuuh, this is a new project');
    allProjects.push({
      name: name,
      content: [{ title: title, text: text, due: due }],
    });
  }
};

addList('personal', 'pet', 'Walk Shiro for 30 minutes', [0, 11, 5, 2023]);
addList('social', 'give', 'Volunteer in charity act');
addList('work', 'bring', 'Give back friend denim jacket');
addList('personal', 'shop', 'Buy bread, chips, and towel', [3, 14, 9, 2023]);
addList('social', 'bbq', 'Talk about the upcoming BBQ party');
addList('', 'bbq', 'Talk about the upcoming BBQ party');

allProjects.forEach(p=>p.content.forEach(c=> console.log(`${p.name}: ${c.title} - ${c.text}`)))
