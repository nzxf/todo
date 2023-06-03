const functions = (() => {
  //  TESTER
  const greet = () => 'Hello from functions city';
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
    const navStart = elMaker('div', navbar, 'start', 'nav-start');
    const navCenter = elMaker('div', navbar, 'center', 'nav-center');
    const navEnd = elMaker('div', navbar, 'end', 'nav-end');
  };
  // CLOSURE
  return { greet, childRemover, elMaker, makeNavbar };
})();

export { functions };
