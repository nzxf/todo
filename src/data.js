 import { functions } from "./allFunctions";
const timeCreation = functions.timeCreation

// Project Factory
const Project = (name, content) => {
  return { name, content };
};

let allProjects = [];

const addTask = (name, title, text, created = timeCreation()) => {
  if (allProjects.find((project) => project.name == name)) {
    // console.log('Add it to the existed project');
    let projectIndex = allProjects.findIndex(
      (project) => project.name === name
    );
    allProjects[projectIndex].content.push({
      title: title,
      text: text,
      created: created,
    });
  } else {
    // console.log('Uuuuh, this is a new project');
    allProjects.push({
      name: name,
      content: [{ title: title, text: text, created: created }],
    });
  }
};

addTask('personal', 'pet', 'Walk Shiro for 30 minutes', [2, 23, 11, 5, 2023]);
addTask('social', 'give', 'Volunteer in charity act');
addTask('work', 'laptop', 'For presentation project');
addTask('personal', 'shop', 'Buy bread, chips, and towel', [3, 54, 20, 9, 2023]);
addTask('social', 'bbq', 'Talk about the upcoming BBQ party');
addTask('school', 'read', 'Buy programming book');
addTask('work', 'tie', 'wear tie for big meeting')

export { allProjects };
