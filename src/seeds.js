import { functions } from './allFunctions';
const timeCreation = functions.timeCreation;

// Project Factory
const Project = (name, content) => {
  this.name = name.toLowerCase()
  return { name, content };
};

let allProjects = [];

const addTask = (name, title, text, priority, due = [0,0,0,0,0], created = timeCreation()) => {
  if (allProjects.find((project) => project.name == name.toLowerCase())) {
    // console.log('Add it to the existed project');
    let projectIndex = allProjects.findIndex((project) => project.name === name.toLowerCase());
    allProjects[projectIndex].content.push({
      title: title,
      text: text,
      priority: priority,
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
          due: due,
          created: created,
        },
      ],
    });
  }
};

// INPUT TESTER
// (all mixed: upper+lowercase name)
// Complete data
addTask('personal', 'bookstore', 'Buy programming book', 'medium', [2, 23, 11, 5, 2023], [4, 23, 11, 5, 2023]);
// no due date
addTask('Personal', 'grocery', 'Bread, chips, and orange juice', 'low', [3, 54, 20, 9, 2023]);
addTask('personal', 'Park', 'walk Shiro for 30 minutes', 'high', [2, 23, 11, 5, 2023]);
// no created date & due date
addTask('social', 'Collegue', 'go out for dinner with workmates', 'low');
addTask('Social', 'BBQ', 'Prepare the upcoming BBQ party', 'low');
addTask('personal', 'house cleaning', 'Do laundry and dishes', 'zero');

export { allProjects };
