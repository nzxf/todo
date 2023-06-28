import { functions } from './allFunctions';
const timeCreation = functions.timeCreation;

// Project Factory
const Project = (name, content) => {
  this.name = name.toLowerCase()
  return { name, content };
};

let allProjects = [];

const addTask = (name, title, text, priority, status = 'in progress', due = [0,0,0,0,0], created = timeCreation()) => {
  if (allProjects.find((project) => project.name == name.toLowerCase())) {
    // console.log('Add it to the existed project');
    let projectIndex = allProjects.findIndex((project) => project.name === name.toLowerCase());
    allProjects[projectIndex].content.push({
      title: title,
      text: text,
      priority: priority,
      status: status,
      due: due,
      created: created,
    });
  } else {
    // console.log('Uuuuh, this is a new project');
    allProjects.push({
      name: name.toLowerCase(),
      content: [
        {
          title: title,
          text: text,
          priority: priority,
          status: status,
          due: due,
          created: created,
        },
      ],
    });
  }
};

// USER MANUAL
addTask('Your project', 'most important', 'task is sorted based on its priority', 'high');
addTask('Your project', 'semi important', 'yellow task always goes after red', 'medium');
addTask('Your project', 'not really important', 'green color for low priority task', 'low');
addTask('Your project', 'completed one', 'put a checkmark to set task as done', 'zero', 'completed');

// INPUT TESTER 
// full data (all mixed: upper+lowercase)
addTask('personal', 'bookstore', 'Buy programming book', 'medium', 'in progress', [2, 23, 11, 5, 2023], [4, 23, 11, 5, 2023]);
// no due date
addTask('Personal', 'grocery', 'Bread, chips, and orange juice', 'low', 'in progress',[3, 54, 20, 9, 2023]);
addTask('personal', 'Park', 'walk Shiro for 30 minutes', 'high','in progress', [2, 23, 11, 5, 2023]);
// no created date & due date
addTask('personal', 'house cleaning', 'Do laundry and dishes', 'zero', 'complete');



export { allProjects };
