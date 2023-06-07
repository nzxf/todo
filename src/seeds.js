import { functions } from './allFunctions';
const timeCreation = functions.timeCreation;

// Project Factory
const Project = (name, content) => {
  const user = 'your name';
  return { name, content };
};

let allProjects = [];

const addTask = (name, title, text, priority, due = [0,0,0,0,0], created = timeCreation()) => {
  if (allProjects.find((project) => project.name == name)) {
    // console.log('Add it to the existed project');
    let projectIndex = allProjects.findIndex((project) => project.name === name);
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
      name: name,
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

addTask('personal', 'grocery', 'Bread, chips, and paper towel', 'low', [3, 54, 20, 9, 2023]);
addTask('social', 'give', 'Donate unused clothes to the local charity', 'low');
addTask('personal', 'read', 'Buy programming book', 'high', [2, 23, 11, 5, 2023], [4, 23, 11, 5, 2023]);
addTask('personal', 'pet', 'Walk Shiro for 30 minutes', 'medium', [2, 23, 11, 5, 2023]);
addTask('social', 'bbq', 'Prepare the upcoming BBQ party', 'low');

export { allProjects };
