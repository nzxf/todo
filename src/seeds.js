import { functions } from './allFunctions';
const timeCreation = functions.timeCreation;

// Project Factory
const Project = (name, content) => {
  const user = 'your name';
  return { name, content };
};

let allProjects = [];

const addTask = (name, title, text, created = timeCreation()) => {
  if (allProjects.find((project) => project.name == name)) {
    // console.log('Add it to the existed project');
    let projectIndex = allProjects.findIndex((project) => project.name === name);
    allProjects[projectIndex].content.push({
      title: title,
      text: text,
      created: created,
    });
  } else {
    // console.log('Uuuuh, this is a new project');
    allProjects.push({
      name: name,
      content: [
        {
          title: title,
          text: text,
          created: created,
        },
      ],
    });
  }
};

addTask('personal', 'pet', 'Walk Shiro for 30 minutes', [2, 23, 11, 5, 2023]);
addTask('social', 'give', 'Donate unused clothes to the local charity');
addTask('personal', 'grocery', 'Bread, chips, and paper towel', [3, 54, 20, 9, 2023]);
addTask('social', 'bbq', 'Prepare the upcoming BBQ party');
addTask('personal', 'read', 'Buy programming book');

export { allProjects };
