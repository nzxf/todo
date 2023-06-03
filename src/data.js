// DUE (empty = 1 day from now)
let timeCreation = () => {
  let result = [];
  result.push(
    new Date().getHours(),
    new Date().getDate(),
    new Date().getMonth(),
    new Date().getFullYear()
  );
  return result;
};

// Project Factory
const Project = (name, content) => {
  return { name, content };
};

let allProjects = [];

const addList = (name, title, text, created = timeCreation()) => {
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
      content: [{ title: title, text: text, creted: created }],
    });
  }
};

addList('personal', 'pet', 'Walk Shiro for 30 minutes', [0, 11, 5, 2023]);
addList('social', 'give', 'Volunteer in charity act');
addList('work', 'laptop', 'For presentation project');
addList('personal', 'shop', 'Buy bread, chips, and towel', [3, 14, 9, 2023]);
addList('social', 'bbq', 'Talk about the upcoming BBQ party');
addList('school', 'read', 'Buy programming book');
addList('work', 'tie', 'wear tie for big meeting')

export { allProjects };
