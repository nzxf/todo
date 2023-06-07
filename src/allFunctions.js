const functions = (() => {
  //  TESTER
  const greet = () => 'Hello from functions city';
  // TIME CREATED
  const timeCreation = () => {
    let result = [];
    result.push(
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getDate(),
      new Date().getMonth() + 1,
      new Date().getFullYear()
    );
    return result;
  };
  // DISPLAY TIME 
  const displayTime = (timeArray, string) => {
    if (string === 'time') {
      return timeArray.slice(0, 2).join(':')
    } else if (string === 'date') {
    return timeArray.slice(2).join('/')
    } else {
      return `⏰ ${timeArray.slice(0, 2).join(':')} 📇 ${timeArray.slice(2).join('/')}`
    }
  };
  // ELEMENT MAKER
  const elMaker = (type, parent, text = '', ...classNames) => {
    const element = document.createElement(type);
    if (classNames) {
      for (const className of classNames) {
        element.classList.add(className);      
      }
    element.innerText = text;
    parent.appendChild(element);
    return element;
  }};

  // CHILD REMOVER
  const childRemover = (parent) => {
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.children[0]);
    }
  };
  //NAVBAR
  const makeNavbar = (parent) => {
    const navbar = elMaker('div', parent, '', 'navbar');
    const navStart = elMaker('div', navbar, '', 'nav-start');
    const webIcon = elMaker('div', navStart, '', 'app-icon');
    const webName = elMaker('div', navStart, 'TODO', 'app-name');
    const navCenter = elMaker('div', navbar, '', 'nav-center');
    const navEnd = elMaker('div', navbar, '', 'nav-end');
    const usericon = elMaker('div', navEnd, '', 'user-icon');
    const userName = elMaker('div', navEnd, 'nzxf', 'user-name');
  };
  // CLOSURE
  return { greet, timeCreation, displayTime, childRemover, elMaker, makeNavbar };
})();

export { functions };
