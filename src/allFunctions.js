const functions = (() => {
  //  TESTER
  const greet = () => 'Hello from functions city';
  // TIME CREATED
  const timeCreation = () => {
    let result = [];
    result.push(
      new Date().getMinutes(),
      new Date().getHours(),
      new Date().getDate(),
      new Date().getMonth(),
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
      return `${timeArray.slice(0, 2).join(':')} - ${timeArray.slice(2).join('/')}`
    }
  };
  // ELEMENT MAKER
  const elMaker = (type, parent, text = '', className1, className2) => {
    const el = document.createElement(type);
    if (className1 !== undefined && className2 !== undefined) {
      el.classList.add(className1, className2);
    } else if (className1 !== undefined && className2 === undefined) {
      el.classList.add(className1);
    }
    el.innerText = text;
    parent.appendChild(el);
    return el;
  };
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
    const userName = elMaker('div', navEnd, 'yourname', 'user-name');
  };
  // CLOSURE
  return { greet, timeCreation, displayTime, childRemover, elMaker, makeNavbar };
})();

export { functions };
